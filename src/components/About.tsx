import { motion } from 'framer-motion';
import { GraduationCap, Languages, MapPin, Sparkle } from 'lucide-react';
import avatarPhoto from '../assets/gabriel-seibel.jpg';
import { education, languages, profile, stats } from '../config/profile';
import CountUp from './CountUp';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="sobre" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
              01 · Sobre mim
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-5xl">
              Quem constrói é quem entende o negócio.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Avatar / photo placeholder */}
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="group relative aspect-[4/5] w-full">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-400/20 to-amber-400/30 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div
                className="absolute -inset-px rounded-[1.75rem] opacity-60"
                style={{
                  background:
                    'conic-gradient(from 0deg, var(--color-violet-glow), var(--color-cyan-glow), var(--color-amber-glow), var(--color-violet-glow))',
                }}
              >
                <div className="absolute inset-[3px] rounded-[1.65rem] bg-(--bg)" />
              </div>
              <div className="glass relative flex h-full w-full items-center justify-center overflow-hidden rounded-[1.75rem]">
                <img
                  src={avatarPhoto}
                  alt={`Foto de ${profile.name}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-(--border-soft) bg-(--surface-2)/60 px-3 py-1.5 text-xs text-(--text-secondary)">
                <MapPin className="h-3.5 w-3.5 text-violet-400" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-(--border-soft) bg-(--surface-2)/60 px-3 py-1.5 text-xs text-(--text-secondary)">
                <Languages className="h-3.5 w-3.5 text-cyan-400" /> {languages[0].name} ·{' '}
                {languages[0].level}
              </span>
            </div>
          </Reveal>

          {/* Bio + stats */}
          <div className="flex flex-col gap-10">
            <Reveal delay={0.15} className="space-y-5 text-base leading-relaxed text-(--text-secondary) sm:text-lg">
              <p>{profile.bio}</p>
              <p>{profile.bioSecondary}</p>
            </Reveal>

            <Reveal delay={0.2} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="cursor-interactive rounded-2xl border border-(--border-soft) bg-(--surface)/40 p-5 transition-colors hover:border-violet-400/40"
                >
                  <div className="font-display text-3xl font-semibold text-(--text-primary) sm:text-4xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1.5 text-xs text-(--text-tertiary)">{stat.label}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex items-center gap-2 text-sm font-medium text-(--text-primary)">
                <GraduationCap className="h-4 w-4 text-amber-400" />
                Formação acadêmica
              </div>
              <div className="mt-4 space-y-3">
                {education.map((item) => (
                  <motion.div
                    key={item.degree}
                    whileHover={{ x: 4 }}
                    className="cursor-interactive flex flex-col gap-1 rounded-xl border border-(--border-soft) bg-(--surface)/30 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-(--text-primary)">{item.degree}</p>
                      <p className="text-xs text-(--text-tertiary)">{item.institution}</p>
                    </div>
                    <span className="text-xs text-(--text-tertiary)">{item.period}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={0.3}
              className="flex items-start gap-3 rounded-2xl border border-violet-400/20 bg-violet-500/5 p-5"
            >
              <Sparkle className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              <p className="text-sm leading-relaxed text-(--text-secondary)">{profile.objective}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
