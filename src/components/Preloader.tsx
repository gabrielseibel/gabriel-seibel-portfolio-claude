import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../config/profile';

interface PreloaderProps {
  onFinish: () => void;
}

const DURATION_MS = 1400;

export default function Preloader({ onFinish }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [barActive, setBarActive] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Ativa a transição CSS da barra assim que o componente monta.
    const activateFrame = requestAnimationFrame(() => setBarActive(true));

    // setInterval (em vez de requestAnimationFrame) continua rodando mesmo
    // se a aba estiver em segundo plano/oculta, evitando que o preloader
    // fique travado quando o navegador pausa o rAF de abas não visíveis.
    const start = Date.now();
    const interval = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setProgress(pct);
      if (pct >= 100) {
        window.clearInterval(interval);
        setTimeout(() => setVisible(false), 250);
      }
    }, 40);

    return () => {
      cancelAnimationFrame(activateFrame);
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      // Não depende exclusivamente do callback de exit-animation do
      // Framer Motion (que usa requestAnimationFrame internamente e pode
      // ficar suspenso em abas em segundo plano): garante que a página
      // sempre revele o conteúdo principal, com ou sem a transição visual.
      const fallback = setTimeout(onFinish, 650);
      return () => clearTimeout(fallback);
    }
  }, [visible, onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-(--bg)"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          aria-hidden="true"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="font-display text-5xl sm:text-6xl font-semibold tracking-tight text-(--text-primary)"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {profile.initials}
              <span className="text-gradient">.</span>
            </motion.div>

            <div className="h-px w-40 sm:w-56 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-amber-400 transition-[width] ease-linear"
                style={{
                  width: barActive ? '100%' : '0%',
                  transitionDuration: `${DURATION_MS}ms`,
                }}
              />
            </div>

            <motion.span
              className="font-mono text-xs tracking-[0.3em] text-(--text-tertiary)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {String(progress).padStart(3, '0')}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
