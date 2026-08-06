import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Target, TrendingUp, X } from 'lucide-react';
import type { Project } from '../config/profile';
import { GithubIcon } from './icons/BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-(--border-soft) shadow-2xl"
          >
            <div className={`relative h-40 w-full bg-gradient-to-br sm:h-52 ${project.gradient}`}>
              <div className="absolute inset-0 bg-grid opacity-20" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar detalhes do projeto"
                className="cursor-interactive absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/50"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="absolute bottom-4 left-6 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {project.category}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-(--text-tertiary)">
                {project.period}
              </p>
              <h3
                id="project-modal-title"
                className="mt-2 font-display text-2xl font-semibold text-(--text-primary) sm:text-3xl"
              >
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-(--text-secondary) sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-(--border-soft) bg-(--surface-2)/60 px-3 py-1 text-xs text-(--text-secondary)"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-(--border-soft) bg-(--surface)/40 p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-(--text-primary)">
                    <Target className="h-4 w-4 text-rose-400" />
                    Desafios
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-(--text-secondary)">
                    {project.challenges}
                  </p>
                </div>
                <div className="rounded-2xl border border-(--border-soft) bg-(--surface)/40 p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-(--text-primary)">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    Resultados
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-(--text-secondary)">
                    {project.results}
                  </p>
                </div>
              </div>

              {(project.link || project.githubLink) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="cursor-interactive inline-flex items-center gap-2 rounded-full bg-(--text-primary) px-5 py-2.5 text-sm font-semibold text-(--bg) transition-transform hover:scale-105"
                    >
                      Ver projeto <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="cursor-interactive inline-flex items-center gap-2 rounded-full border border-(--border-soft) px-5 py-2.5 text-sm font-semibold text-(--text-primary) transition-colors hover:border-violet-400/50"
                    >
                      GitHub <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
