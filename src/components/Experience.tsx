import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../config/profile';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--border-soft) to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            02 · Jornada
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-5xl">
            Trajetória construída em movimento.
          </h2>
        </Reveal>

        <ol className="relative">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-(--border-soft) to-transparent sm:left-[19px]"
            aria-hidden="true"
          />

          {experiences.map((item) => (
            <Reveal
              key={`${item.company}-${item.period}`}
              as="span"
              delay={0}
              className="relative mb-10 block pl-10 last:mb-0 sm:pl-14"
            >
              <li className="list-none">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                  className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border sm:h-10 sm:w-10 ${
                    item.current
                      ? 'border-violet-400 bg-violet-500/20 text-violet-300'
                      : 'border-(--border-soft) bg-(--surface-2) text-(--text-tertiary)'
                  }`}
                >
                  <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </motion.span>

                <div
                  className={`cursor-interactive group rounded-2xl border p-5 transition-all duration-300 sm:p-7 ${
                    item.current
                      ? 'border-violet-400/40 bg-violet-500/[0.06] shadow-[0_0_60px_-25px_rgba(139,92,246,0.6)]'
                      : 'border-(--border-soft) bg-(--surface)/30 hover:border-violet-400/30 hover:bg-(--surface)/50'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.current
                          ? 'bg-violet-500 text-white'
                          : 'bg-(--surface-2) text-(--text-secondary)'
                      }`}
                    >
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-violet-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                        Atual
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-(--text-primary) sm:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-(--text-secondary)">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
                    {item.description}
                  </p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {item.responsibilities.map((resp) => (
                      <li
                        key={resp}
                        className="flex items-start gap-2 text-xs leading-relaxed text-(--text-tertiary)"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400/70" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
