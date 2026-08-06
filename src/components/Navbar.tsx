import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../config/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? 'glass-strong border-(--border-soft) shadow-[0_8px_40px_-16px_rgba(0,0,0,0.35)]'
              : 'border-transparent bg-transparent'
          }`}
          aria-label="Navegação principal"
        >
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('inicio');
            }}
            className="cursor-interactive font-display text-lg font-semibold tracking-tight text-(--text-primary)"
          >
            {profile.initials}
            <span className="text-gradient">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`cursor-interactive relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeId === link.id
                      ? 'text-(--text-primary)'
                      : 'text-(--text-secondary) hover:text-(--text-primary)'
                  }`}
                >
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-(--surface-2)"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="hidden sm:flex" />
            <a
              href={profile.social.email}
              className="cursor-interactive hidden rounded-full bg-(--text-primary) px-4 py-2 text-sm font-semibold text-(--bg) transition-transform hover:scale-105 md:inline-flex"
            >
              Contato
            </a>
            <button
              type="button"
              className="cursor-interactive flex h-9 w-9 items-center justify-center rounded-full border border-(--border-soft) text-(--text-primary) md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-strong mx-5 mt-2 rounded-2xl border border-(--border-soft) p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      activeId === link.id
                        ? 'bg-(--surface-2) text-(--text-primary)'
                        : 'text-(--text-secondary)'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between border-t border-(--border-soft) px-4 pt-3">
              <span className="text-sm text-(--text-tertiary)">Tema</span>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
