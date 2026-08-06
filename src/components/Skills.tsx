import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillCategories } from '../config/profile';
import Reveal from './Reveal';
import SkillCard from './SkillCard';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0];

  return (
    <section id="habilidades" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-400">
            03 · Habilidades
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-5xl">
            Um repertório multidisciplinar.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mb-10 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-interactive relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'text-(--bg)'
                  : 'text-(--text-secondary) hover:text-(--text-primary)'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="skills-active-pill"
                  className="absolute inset-0 rounded-full bg-(--text-primary)"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{cat.title}</span>
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {current.skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
