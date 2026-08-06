import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectCategories, projects, type Project } from '../config/profile';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectCategories)[number]>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'Todos'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projetos" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">
              04 · Projetos
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-5xl">
              Casos que traduzem estratégia em resultado.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`cursor-interactive relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'text-(--bg)'
                  : 'text-(--text-secondary) hover:text-(--text-primary)'
              }`}
            >
              {activeFilter === category && (
                <motion.span
                  layoutId="projects-active-pill"
                  className="absolute inset-0 rounded-full bg-(--text-primary)"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-sm text-(--text-tertiary)">
            Nenhum projeto encontrado para esta categoria.
          </p>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
