import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Skill } from '../config/profile';

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = skill.icon;
  const offset = CIRCUMFERENCE - (skill.level / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="cursor-interactive group relative overflow-hidden rounded-2xl border border-(--border-soft) bg-(--surface)/40 p-5 transition-colors duration-300 hover:border-violet-400/40"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/0 blur-2xl transition-colors duration-500 group-hover:bg-violet-500/25" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border-soft) bg-(--surface-2)/70 text-violet-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:text-violet-300">
          <Icon className="h-5 w-5" />
        </div>

        <div className="relative h-14 w-14 shrink-0">
          <svg viewBox="0 0 52 52" className="h-14 w-14 -rotate-90">
            <circle
              cx="26"
              cy="26"
              r={RADIUS}
              fill="none"
              strokeWidth="3"
              className="stroke-(--border-soft)"
            />
            <motion.circle
              cx="26"
              cy="26"
              r={RADIUS}
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              stroke="url(#skill-gradient)"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={{ strokeDashoffset: isInView ? offset : CIRCUMFERENCE }}
              transition={{ duration: 1, delay: 0.15 + index * 0.06, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="skill-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-violet-glow)" />
                <stop offset="100%" stopColor="var(--color-cyan-glow)" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] font-medium text-(--text-secondary)">
            {skill.level}
          </span>
        </div>
      </div>

      <h4 className="relative mt-4 font-display text-base font-semibold text-(--text-primary)">
        {skill.name}
      </h4>

      <p className="relative mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-(--text-tertiary) opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
        {skill.description}
      </p>
    </motion.div>
  );
}
