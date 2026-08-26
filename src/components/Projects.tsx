import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project, type ProjectCategory } from '../config/profile';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';

const workProjects = projects.filter((p) => p.group === 'trabalho');
const devProjects = projects.filter((p) => p.group === 'desenvolvimento');

/** Categorias realmente presentes num grupo, na ordem em que aparecem — evita
 * mostrar um filtro pill ("Educação", "Comercial"...) que não tem nada atrás. */
function categoriesIn(list: Project[]): ('Todos' | ProjectCategory)[] {
  const seen: ProjectCategory[] = [];
  for (const p of list) if (!seen.includes(p.category)) seen.push(p.category);
  return ['Todos', ...seen];
}

interface ProjectGroupSectionProps {
  eyebrow: string;
  title: string;
  list: Project[];
  onOpen: (project: Project) => void;
}

function ProjectGroupSection({ eyebrow, title, list, onOpen }: ProjectGroupSectionProps) {
  const categories = useMemo(() => categoriesIn(list), [list]);
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>('Todos');

  const filtered = useMemo(
    () => (activeFilter === 'Todos' ? list : list.filter((p) => p.category === activeFilter)),
    [list, activeFilter]
  );

  return (
    <div className="mb-20 last:mb-0">
      <Reveal className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">
            {eyebrow}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-(--text-primary) sm:text-3xl">
            {title}
          </h3>
        </div>
      </Reveal>

      {categories.length > 2 && (
        <Reveal delay={0.1} className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
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
                  layoutId={`projects-active-pill-${eyebrow}`}
                  className="absolute inset-0 rounded-full bg-(--text-primary)"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </Reveal>
      )}

      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={onOpen} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-(--text-tertiary)">
          Nenhum projeto encontrado para esta categoria.
        </p>
      )}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-400">
            04 · Projetos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-5xl">
            Casos que traduzem estratégia em resultado.
          </h2>
        </Reveal>

        <ProjectGroupSection
          eyebrow="Trajetória profissional"
          title="Gestão, liderança e operações."
          list={workProjects}
          onOpen={setSelectedProject}
        />

        <ProjectGroupSection
          eyebrow="Por conta própria"
          title="Projetos de desenvolvimento."
          list={devProjects}
          onOpen={setSelectedProject}
        />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
