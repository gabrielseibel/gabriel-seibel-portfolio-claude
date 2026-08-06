import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { manifesto } from '../config/profile';

interface AnimatedLineProps {
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedLine({ text, progress, range }: AnimatedLineProps) {
  const words = text.split(' ');
  return (
    <span className="flex flex-wrap justify-center gap-x-3">
      {words.map((word, i) => {
        const start = range[0] + (i / words.length) * (range[1] - range[0]);
        const end = range[0] + ((i + 1) / words.length) * (range[1] - range[0]);
        return <Word key={i} word={word} progress={progress} range={[start, end]} />;
      })}
    </span>
  );
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ word, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-(--border-soft) bg-(--surface-2)/30 py-32 sm:py-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <p className="font-display text-2xl font-medium leading-tight tracking-tight text-(--text-primary) sm:text-4xl lg:text-5xl">
          <AnimatedLine text={manifesto.lines[0]} progress={scrollYProgress} range={[0, 0.45]} />
          <br className="hidden sm:block" />{' '}
          <AnimatedLine text={manifesto.lines[1]} progress={scrollYProgress} range={[0.45, 0.9]} />
        </p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-sm text-(--text-secondary) sm:text-base"
        >
          {manifesto.supporting}
        </motion.p>
      </div>
    </section>
  );
}
