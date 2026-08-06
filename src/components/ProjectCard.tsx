import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../config/profile';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onOpen(project)}
      className="cursor-interactive group relative block w-full overflow-hidden rounded-2xl border border-(--border-soft) bg-(--surface)/40 text-left transition-colors duration-300 hover:border-violet-400/40"
    >
      <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-grid opacity-20 transition-transform duration-700 ease-out group-hover:scale-110" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl font-semibold text-white/25 transition-transform duration-500 group-hover:scale-105">
            {project.title.split(' ')[0]}
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="translate-y-2 text-xs text-white/85 transition-transform duration-300 group-hover:translate-y-0">
            {project.summary}
          </p>
        </div>

        <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>

        <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-(--text-tertiary)">
          {project.period}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-semibold text-(--text-primary)">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-(--border-soft) px-2.5 py-1 text-[11px] text-(--text-secondary)"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
