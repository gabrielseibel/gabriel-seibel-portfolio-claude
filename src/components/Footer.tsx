import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { profile } from '../config/profile';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './icons/BrandIcons';

const year = new Date().getFullYear();

const links = [
  { label: 'E-mail', href: profile.social.email, icon: Mail },
  { label: 'LinkedIn', href: profile.social.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', href: profile.social.github, icon: GithubIcon },
  { label: 'Instagram', href: profile.social.instagram, icon: InstagramIcon },
].filter((link) => Boolean(link.href));

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-(--border-soft) py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-(--text-primary)">
            {profile.initials}
            <span className="text-gradient">.</span>
          </p>
          <p className="mt-1 text-xs text-(--text-tertiary)">
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer noopener"
                aria-label={link.label}
                className="cursor-interactive flex h-9 w-9 items-center justify-center rounded-full border border-(--border-soft) text-(--text-secondary) transition-colors hover:border-violet-400/50 hover:text-(--text-primary)"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}

          <motion.button
            type="button"
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Voltar ao topo"
            className="cursor-interactive flex h-9 w-9 items-center justify-center rounded-full bg-(--text-primary) text-(--bg) transition-transform"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
