import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Mail, Send } from 'lucide-react';
import { profile } from '../config/profile';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './icons/BrandIcons';
import Reveal from './Reveal';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

const socialLinks = [
  { label: 'E-mail', href: profile.social.email, icon: Mail, value: profile.email },
  { label: 'LinkedIn', href: profile.social.linkedin, icon: LinkedinIcon, value: 'in/-gabriel-seibel' },
  { label: 'GitHub', href: profile.social.github, icon: GithubIcon, value: 'github.com' },
  { label: 'Instagram', href: profile.social.instagram, icon: InstagramIcon, value: '@instagram' },
].filter((link) => Boolean(link.href));

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (values: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = 'Informe seu nome.';
    if (!values.email.trim()) {
      next.email = 'Informe seu e-mail.';
    } else if (!EMAIL_REGEX.test(values.email)) {
      next.email = 'Informe um e-mail válido.';
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = 'Escreva uma mensagem com pelo menos 10 caracteres.';
    }
    return next;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    const nextForm = { ...form, [field]: value };
    setForm(nextForm);
    if (touched[field]) {
      setErrors(validate(nextForm));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validation).length > 0) return;

    setStatus('submitting');

    // Sem backend conectado ainda: simula o envio para dar feedback visual
    // imediato. Para integrar de verdade, troque este bloco por uma chamada
    // a um serviço como Formspree, EmailJS, Resend ou uma função serverless.
    await new Promise((resolve) => setTimeout(resolve, 1400));

    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTouched({});
    setTimeout(() => setStatus('idle'), 4500);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-xl border bg-(--surface)/50 px-4 py-3 text-sm text-(--text-primary) outline-none transition-colors placeholder:text-(--text-tertiary) ${
      touched[field] && errors[field]
        ? 'border-rose-500/60 focus:border-rose-500'
        : 'border-(--border-soft) focus:border-violet-400/60'
    }`;

  return (
    <section id="contato" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
            05 · Contato
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-5xl">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="mt-4 text-sm text-(--text-secondary) sm:text-base">
            Estou aberto a novas oportunidades em gestão, coordenação e liderança. Envie uma
            mensagem ou fale comigo diretamente pelos canais abaixo.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal delay={0.1} className="flex flex-col gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  className="cursor-interactive group flex items-center gap-4 rounded-2xl border border-(--border-soft) bg-(--surface)/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-(--border-soft) bg-(--surface-2)/70 text-violet-400 transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-(--text-primary)">
                      {link.label}
                    </span>
                    <span className="block text-xs text-(--text-tertiary)">{link.value}</span>
                  </span>
                </a>
              );
            })}

            <div className="mt-2 rounded-2xl border border-(--border-soft) bg-(--surface-2)/30 p-5 text-xs leading-relaxed text-(--text-tertiary)">
              <strong className="text-(--text-secondary)">{profile.location}</strong>
              <br />
              {profile.phone}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-3xl border border-(--border-soft) p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-(--text-secondary)">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={inputClass('name')}
                    placeholder="Seu nome completo"
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-(--text-secondary)">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={inputClass('email')}
                    placeholder="voce@email.com"
                    aria-invalid={Boolean(touched.email && errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-(--text-secondary)">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Conte um pouco sobre a oportunidade ou projeto..."
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {touched.message && errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-interactive mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-(--text-primary) px-6 py-3.5 text-sm font-semibold text-(--bg) transition-opacity disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Mensagem enviada!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Enviar mensagem
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-xs text-emerald-400"
                >
                  Obrigado pelo contato! Vou responder o quanto antes.
                </motion.p>
              )}
              <p className="mt-4 text-[11px] leading-relaxed text-(--text-tertiary)">
                Este formulário simula o envio localmente. Para receber as mensagens de verdade,
                conecte-o a um serviço como Formspree, EmailJS ou uma função serverless.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
