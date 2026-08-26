import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({ value, suffix = '', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 90 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      motionValue.set(value);
    };

    // Plain IntersectionObserver, no margin: triggers as soon as any part of
    // the element is on screen. A negative margin (requiring the element to
    // sit well inside the viewport before firing) is the kind of thing that
    // quietly never satisfies on a phone, where the visible viewport shrinks
    // and grows as the address bar shows/hides mid-scroll.
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) trigger();
        },
        { threshold: 0 }
      );
      observer.observe(el);
    }

    // Belt-and-suspenders: if the observer never fires for any reason (a
    // browser quirk, a tab that was backgrounded when it should have fired),
    // fall back to a manual geometry check once, and again on scroll/resize.
    const manualCheck = () => {
      if (triggered) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) trigger();
    };
    manualCheck();
    window.addEventListener('scroll', manualCheck, { passive: true });
    window.addEventListener('resize', manualCheck);

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', manualCheck);
      window.removeEventListener('resize', manualCheck);
    };
  }, [motionValue, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
