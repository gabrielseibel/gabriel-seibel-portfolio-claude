/**
 * ============================================================================
 *  CONTEÚDO EDITÁVEL DO PORTFÓLIO
 * ============================================================================
 *  Este é o ÚNICO arquivo que você precisa editar para atualizar o conteúdo
 *  pessoal do site (nome, biografia, experiências, habilidades, projetos e
 *  contatos). Os componentes visuais não precisam ser tocados.
 * ============================================================================
 */

import type { LucideIcon } from 'lucide-react';
import {
  Users,
  Target,
  Network,
  Crown,
  Compass,
  Workflow,
  BrainCircuit,
  MessagesSquare,
  ShieldCheck,
  Presentation,
  LineChart,
  Building2,
  Server,
  Database,
  Boxes,
} from 'lucide-react';

// ----------------------------------------------------------------------------
// Perfil principal
// ----------------------------------------------------------------------------
export const profile = {
  name: 'Gabriel Antonio Carrera Seibel',
  firstName: 'Gabriel',
  initials: 'GS',
  role: 'Gestão · Coordenação · Liderança',
  roleShort: 'Gestor & Estrategista de Negócios',
  headline: 'Transformo processos em resultados e equipes em times de alta performance.',
  location: 'Chapecó – SC, Brasil',
  phone: '(54) 99221-8457',
  email: 'gabriel.seibel@hotmail.com',
  bio: `Sou um profissional com trajetória multidisciplinar, atuando de forma estratégica
  nas áreas de tecnologia, gestão, comercial e operações. Ao longo da minha carreira,
  desenvolvi a capacidade de compreender rapidamente o funcionamento dos negócios,
  mapear processos e assumir responsabilidades além da função inicial, sempre com foco
  em eficiência e resultados.`,
  bioSecondary: `Tenho forte experiência em ambientes dinâmicos, onde atuei como elo entre áreas
  técnicas e administrativas, apoiando decisões estratégicas, reorganização de
  processos e gestão de equipes. Minha atuação é marcada pela flexibilidade, visão
  sistêmica e facilidade em liderar mudanças, garantindo continuidade operacional
  mesmo em cenários de transição.`,
  objective: `Busco oportunidades em empresas de tecnologia onde possa aplicar minha experiência
  em gestão, administração e liderança, contribuindo para a evolução dos processos,
  fortalecimento da cultura organizacional e crescimento sustentável da empresa.`,
  avatarInitials: 'GS',
  resumeUrl: '', // opcional: link para PDF do currículo
  social: {
    github: '',
    linkedin: 'https://www.linkedin.com/in/-gabriel-seibel',
    instagram: '',
    email: 'mailto:gabriel.seibel@hotmail.com',
    whatsapp: 'https://wa.me/5554992218457',
  },
};

// ----------------------------------------------------------------------------
// Métricas de destaque (seção "Sobre")
// ----------------------------------------------------------------------------
export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export const stats: Stat[] = [
  { label: 'Anos de experiência', value: 9, suffix: '+' },
  { label: 'Áreas de atuação', value: 5 },
  { label: 'Equipes lideradas', value: 12, suffix: '+' },
  { label: 'Empresas & projetos', value: 6 },
];

// ----------------------------------------------------------------------------
// Formação acadêmica
// ----------------------------------------------------------------------------
export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: 'MBA – Planejamento e Gestão Comercial',
    institution: 'IDEAU',
    period: 'Concluído em 2022',
  },
  {
    degree: 'Tecnólogo – Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade Anglicana de Erechim',
    period: 'Concluído em 2017',
  },
];

// ----------------------------------------------------------------------------
// Experiência profissional (timeline)
// ----------------------------------------------------------------------------
export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
  responsibilities: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    period: '04/2026 — Atual',
    company: 'SENAC',
    role: 'Professor',
    description:
      'Docência em Gestão, Marketing, Mídias Sociais, Informática e áreas correlatas.',
    responsibilities: [
      'Professor de Gestão, Marketing, Mídias Sociais, Informática e áreas correlatas.',
    ],
    current: true,
  },
  {
    period: '12/2024 — 04/2026',
    company: 'O Quintal da Minha Casa',
    role: 'Gestor',
    description:
      'Planejamento estratégico e administração geral do negócio, da equipe à expansão física.',
    responsibilities: [
      'Planejamento estratégico do negócio e definição de metas de crescimento.',
      'Gestão de equipe e reestruturação da cultura organizacional.',
      'Redefinição do modelo de negócio visando escalabilidade.',
      'Condução da mudança para sede própria e ampliação do espaço físico.',
      'Administração geral da empresa, integrando operações, pessoas e resultados.',
    ],
  },
  {
    period: '10/2023 — 12/2024',
    company: 'VK2 Studio Web',
    role: 'Sócio / Gestor Comercial',
    description:
      'Estruturação comercial e expansão de mercado como sócio da operação.',
    responsibilities: [
      'Desenvolvimento de estratégias de crescimento comercial.',
      'Gestão da equipe de vendas e relacionamento com clientes.',
      'Identificação de novas oportunidades de mercado.',
      'Negociação de contratos e propostas comerciais.',
      'Integração das ações comerciais com iniciativas de marketing.',
    ],
  },
  {
    period: '04/2022 — 12/2022',
    company: 'AWA Sistemas',
    role: 'Consultor de Sistemas e Negócios',
    description:
      'Consultoria de implantação, ligando regras de negócio à parametrização de sistemas.',
    responsibilities: [
      'Mapeamento de processos e regras de negócio para implantação de sistemas.',
      'Parametrização de sistemas conforme necessidades dos clientes.',
      'Elaboração de documentação técnica e funcional de projetos.',
      'Condução de treinamentos para usuários finais.',
      'Acompanhamento de prazos, entregas e alinhamento com equipes internas.',
    ],
  },
  {
    period: '01/2017 — 12/2022',
    company: 'Manual dos Games',
    role: 'Redator-Chefe / Diretor de Operações',
    description:
      'Liderança editorial e operacional na transformação do portal em referência nacional.',
    responsibilities: [
      'Liderança editorial e coordenação da equipe de redatores.',
      'Planejamento estratégico de conteúdo e crescimento do portal.',
      'Gestão das operações do site, garantindo fluxo contínuo de publicações.',
      'Estruturação de processos internos e organização da produção editorial.',
      'Atuação direta na transformação do portal em um dos maiores sites de notícias de games do Brasil.',
    ],
  },
  {
    period: '05/2020 — 04/2022',
    company: 'Zin Pão Indústria de Alimentos',
    role: 'Diretor de TI e Operações',
    description:
      'Atuação transversal entre TI, finanças, comercial e logística com foco em continuidade operacional.',
    responsibilities: [
      'Gestão da infraestrutura de TI, redes, servidores e sistemas.',
      'Atuação direta nas áreas financeira, comercial e operacional em apoio às lideranças.',
      'Controle de custos, formação de preços e análise de margens.',
      'Planejamento e execução de estratégias de marketing e branding.',
      'Coordenação logística para distribuição nos estados RS, SC, PR e SP.',
      'Atuação transversal, assumindo temporariamente funções estratégicas em diferentes áreas para garantir continuidade operacional e eficiência dos processos.',
    ],
  },
  {
    period: '02/2017 — 02/2020',
    company: 'Transportes Transvidal',
    role: 'Analista de Tecnologia da Informação',
    description:
      'Suporte técnico, infraestrutura e administração de banco de dados corporativo.',
    responsibilities: [
      'Manutenção de computadores e suporte a sistemas.',
      'Gerenciamento de redes e servidores.',
      'Administração de banco de dados Oracle.',
      'Gerenciamento de e-mails corporativos.',
      'Suporte técnico aos usuários e à infraestrutura.',
    ],
  },
];

// ----------------------------------------------------------------------------
// Habilidades
// ----------------------------------------------------------------------------
export interface Skill {
  name: string;
  level: number; // 0-100
  description: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'gestao',
    title: 'Gestão & Liderança',
    skills: [
      {
        name: 'Gestão de Equipes',
        level: 95,
        description: 'Formação, liderança e desenvolvimento de times multidisciplinares.',
        icon: Users,
      },
      {
        name: 'Planejamento Estratégico',
        level: 92,
        description: 'Definição de metas, visão de longo prazo e execução orientada a resultado.',
        icon: Target,
      },
      {
        name: 'Liderança Multidisciplinar',
        level: 90,
        description: 'Conduzir pessoas e projetos entre áreas técnicas e administrativas.',
        icon: Crown,
      },
      {
        name: 'Tomada de Decisão Estratégica',
        level: 90,
        description: 'Decisões orientadas a dados em cenários de alta complexidade.',
        icon: Compass,
      },
    ],
  },
  {
    id: 'processos',
    title: 'Processos & Negócio',
    skills: [
      {
        name: 'Mapeamento de Processos',
        level: 93,
        description: 'Diagnóstico, redesenho e documentação de fluxos operacionais.',
        icon: Workflow,
      },
      {
        name: 'Visão Sistêmica de Negócios',
        level: 94,
        description: 'Compreensão integrada de operação, pessoas e resultado financeiro.',
        icon: Network,
      },
      {
        name: 'Gestão Comercial',
        level: 88,
        description: 'Estratégias de crescimento, negociação e relacionamento com clientes.',
        icon: LineChart,
      },
      {
        name: 'Reestruturação Organizacional',
        level: 87,
        description: 'Redesenho de cultura, hierarquia e modelo de negócio.',
        icon: Building2,
      },
    ],
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia',
    skills: [
      {
        name: 'Infraestrutura de TI',
        level: 85,
        description: 'Redes, servidores, suporte técnico e continuidade operacional.',
        icon: Server,
      },
      {
        name: 'Banco de Dados (Oracle)',
        level: 78,
        description: 'Administração e manutenção de bancos corporativos.',
        icon: Database,
      },
      {
        name: 'Implantação de Sistemas',
        level: 86,
        description: 'Parametrização, documentação técnica e treinamento de usuários.',
        icon: Boxes,
      },
      {
        name: 'Segurança da Informação',
        level: 75,
        description: 'Fundamentos de técnicas de invasão e proteção de dados.',
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    skills: [
      {
        name: 'Comunicação Interdepartamental',
        level: 93,
        description: 'Elo entre áreas técnicas, comerciais e administrativas.',
        icon: MessagesSquare,
      },
      {
        name: 'Oratória & Docência',
        level: 89,
        description: 'Palestras, treinamentos e docência em turmas de gestão e marketing.',
        icon: Presentation,
      },
      {
        name: 'Gestão de Processos',
        level: 91,
        description: 'Estruturação e melhoria contínua de rotinas organizacionais.',
        icon: Workflow,
      },
      {
        name: 'Pensamento Estratégico',
        level: 92,
        description: 'Leitura de cenários e antecipação de oportunidades de negócio.',
        icon: BrainCircuit,
      },
    ],
  },
];

// ----------------------------------------------------------------------------
// Projetos / Casos de destaque
// ----------------------------------------------------------------------------
export type ProjectCategory = 'Gestão' | 'Comercial' | 'Tecnologia' | 'Educação';

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  period: string;
  challenges: string;
  results: string;
  gradient: string; // classes tailwind para o "cover" (placeholder visual)
  link?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 'quintal-reestruturacao',
    title: 'Reestruturação — O Quintal da Minha Casa',
    summary: 'Replanejamento estratégico e mudança para sede própria.',
    description:
      'Liderança da reestruturação completa do negócio: nova cultura organizacional, novo modelo de escalabilidade e transição para uma sede própria maior, sem interrupção das operações.',
    category: 'Gestão',
    tags: ['Planejamento Estratégico', 'Gestão de Pessoas', 'Expansão'],
    period: '2024 — 2026',
    challenges:
      'Conduzir a mudança de sede e a reestruturação da cultura organizacional mantendo a operação ativa e a equipe engajada durante todo o processo de transição.',
    results:
      'Modelo de negócio redesenhado para escalabilidade, cultura organizacional fortalecida e ampliação do espaço físico concluída com continuidade total das operações.',
    gradient: 'from-violet-600 via-fuchsia-500 to-amber-400',
  },
  {
    id: 'vk2-crescimento-comercial',
    title: 'Estratégia Comercial — VK2 Studio Web',
    summary: 'Estruturação da área comercial como sócio-gestor.',
    description:
      'Como sócio e gestor comercial, estruturei o processo de vendas, a prospecção de novos mercados e a integração entre marketing e comercial da agência.',
    category: 'Comercial',
    tags: ['Vendas', 'Negociação', 'Marketing'],
    period: '2023 — 2024',
    challenges:
      'Criar um processo comercial estruturado do zero, alinhando expectativas entre equipe de vendas, marketing e entrega de projetos.',
    results:
      'Novos contratos negociados, carteira de clientes ampliada e integração consistente entre ações comerciais e de marketing.',
    gradient: 'from-cyan-500 via-sky-500 to-violet-600',
  },
  {
    id: 'awa-implantacao-sistemas',
    title: 'Implantação de Sistemas — AWA Sistemas',
    summary: 'Consultoria de negócios aplicada à parametrização de sistemas.',
    description:
      'Mapeamento de processos e regras de negócio de clientes para implantação e parametrização de sistemas, com documentação técnica e treinamento de usuários finais.',
    category: 'Tecnologia',
    tags: ['Consultoria', 'Processos', 'Treinamento'],
    period: '2022',
    challenges:
      'Traduzir regras de negócio complexas de diferentes clientes em parametrizações de sistema claras, dentro de prazos apertados de implantação.',
    results:
      'Implantações concluídas com documentação técnica e funcional completa, e equipes de clientes capacitadas para uso autônomo dos sistemas.',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    id: 'manual-dos-games',
    title: 'Manual dos Games — Direção Editorial',
    summary: 'De portal iniciante a referência nacional em games.',
    description:
      'Liderança editorial e operacional que ajudou a transformar o Manual dos Games em um dos maiores portais de notícias de games do Brasil, estruturando processos e equipe de redação.',
    category: 'Gestão',
    tags: ['Liderança Editorial', 'Processos', 'Estratégia de Conteúdo'],
    period: '2017 — 2022',
    challenges:
      'Escalar a produção de conteúdo mantendo qualidade editorial, com uma equipe distribuída e crescente ao longo dos anos.',
    results:
      'Portal consolidado como uma das maiores referências de notícias de games do país, com processos editoriais estruturados e time fortalecido.',
    gradient: 'from-rose-500 via-orange-500 to-amber-400',
  },
  {
    id: 'zinpao-ti-operacoes',
    title: 'TI & Operações Multidisciplinares — Zin Pão',
    summary: 'Direção de TI com atuação estratégica transversal.',
    description:
      'Direção de TI e operações com atuação direta em finanças, comercial e logística, coordenando distribuição em quatro estados e assumindo funções estratégicas conforme a necessidade do negócio.',
    category: 'Tecnologia',
    tags: ['Infraestrutura', 'Logística', 'Gestão Financeira'],
    period: '2020 — 2022',
    challenges:
      'Garantir continuidade operacional em múltiplas frentes (TI, financeiro, comercial e logística) simultaneamente, em cenários de transição de liderança.',
    results:
      'Infraestrutura de TI estabilizada, logística coordenada em 4 estados (RS, SC, PR, SP) e continuidade operacional garantida em todas as áreas de apoio.',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-400',
  },
  {
    id: 'senac-docencia',
    title: 'Docência — SENAC',
    summary: 'Formação de novos profissionais em gestão e marketing.',
    description:
      'Atuação como professor de Gestão, Marketing, Mídias Sociais e Informática, aplicando experiência prática de mercado à formação de novos profissionais.',
    category: 'Educação',
    tags: ['Docência', 'Gestão', 'Marketing Digital'],
    period: '2026 — Atual',
    challenges:
      'Conectar teoria acadêmica à realidade prática do mercado de gestão e tecnologia, tornando o conteúdo aplicável desde a sala de aula.',
    results:
      'Aulas estruturadas com forte conexão prática, unindo experiência real de liderança e gestão ao conteúdo pedagógico.',
    gradient: 'from-fuchsia-500 via-purple-600 to-indigo-600',
  },
];

export const projectCategories: ('Todos' | ProjectCategory)[] = [
  'Todos',
  'Gestão',
  'Comercial',
  'Tecnologia',
  'Educação',
];

// ----------------------------------------------------------------------------
// Idiomas e cursos complementares
// ----------------------------------------------------------------------------
export const languages = [{ name: 'Inglês', level: 'Avançado' }];

export const extras: string[] = [
  'Técnicas de Invasão e Segurança da Informação',
  'Representante brasileiro na Conferência sobre Ética e Mídias Sociais (Artigo sobre Cyberbullying) — Nashville (EUA), 2016',
  'Palestra no SENAC sobre o Mercado de Jogos e Esports',
];

// ----------------------------------------------------------------------------
// Manifesto (seção de destaque)
// ----------------------------------------------------------------------------
export const manifesto = {
  lines: [
    'Não gerencio apenas processos.',
    'Construo estruturas que as pessoas confiam.',
  ],
  supporting:
    'Visão sistêmica, liderança prática e execução orientada a resultado — essa é a ponte que construo entre estratégia e operação.',
};

// ----------------------------------------------------------------------------
// Navegação
// ----------------------------------------------------------------------------
export const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
];
