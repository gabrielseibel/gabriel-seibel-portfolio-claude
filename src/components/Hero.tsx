import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { profile } from '../config/profile';

const headlineWords = profile.headline.split(' ');

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: '110%', rotate: 4 },
  show: {
    opacity: 1,
    y: '0%',
    rotate: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(560px circle at ${mouseX}% ${mouseY}%, color-mix(in srgb, var(--color-violet-glow) 16%, transparent), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: spotlight }}
      />

      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 animate-blob bg-gradient-to-br from-violet-500/30 to-fuchsia-500/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 animate-blob bg-gradient-to-tr from-cyan-400/25 to-amber-400/10 blur-3xl [animation-delay:-4s] sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[8%] top-[22%] hidden h-24 w-24 rounded-3xl border border-(--border-soft) animate-float lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[6%] bottom-[18%] hidden h-16 w-16 rounded-full border border-(--border-soft) animate-float-slow lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[20%] bottom-[12%] hidden h-10 w-10 rotate-45 border border-(--border-soft) animate-spin-slow lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border-soft) bg-(--surface-2)/50 px-4 py-1.5 text-xs font-medium tracking-wide text-(--text-secondary)"
        >
          <Sparkles className="h-3.5 w-3.5 text-violet-400" />
          Disponível para novas oportunidades
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-lg text-(--text-secondary) sm:text-xl"
        >
          Olá, eu sou <span className="text-(--text-primary)">{profile.name}</span>
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-(--text-primary) sm:text-6xl lg:text-7xl"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden pb-1 align-bottom last:mr-0">
              <motion.span
                variants={wordVariant}
                className={`inline-block ${
                  i === headlineWords.length - 1 || i === headlineWords.length - 2
                    ? 'text-gradient'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-(--text-secondary) sm:text-lg"
        >
          {profile.roleShort} · {profile.location}. Conecto estratégia, pessoas e operação
          para transformar processos complexos em crescimento sustentável.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={() => scrollTo('projetos')}
            className="cursor-interactive group inline-flex items-center gap-2 rounded-full bg-(--text-primary) px-6 py-3.5 text-sm font-semibold text-(--bg) transition-transform hover:scale-105"
          >
            Conheça meu trabalho
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contato')}
            className="cursor-interactive inline-flex items-center gap-2 rounded-full border border-(--border-soft) bg-(--surface)/40 px-6 py-3.5 text-sm font-semibold text-(--text-primary) backdrop-blur transition-colors hover:border-violet-400/50"
          >
            Entre em contato
          </button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="cursor-interactive absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-(--text-tertiary) transition-colors hover:text-(--text-primary)"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Scroll para explorar</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
