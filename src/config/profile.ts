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
import imgJurisdocAi from '../assets/projects/jurisdoc-ai.webp';
import imgJozenirSite from '../assets/projects/jozenir-camargo-site.webp';
import imgCatQuest from '../assets/projects/cat-quest.webp';
import imgStopExtension from '../assets/projects/stop-extension.webp';
import imgStoreVision from '../assets/projects/store-vision-analytics.webp';
import imgPlantationVision from '../assets/projects/plantation-vision-analytics.webp';
import imgMeuPrimeiroWindows from '../assets/projects/meu-primeiro-windows.webp';
import imgNaVarzeaUnity from '../assets/projects/na-varzea-unity.webp';
import imgMuddySundays from '../assets/projects/muddy-sundays.webp';
import imgShotgunNightmare from '../assets/projects/shotgun-nightmare.webp';
import imgVehicleAnalytics from '../assets/projects/vehicle-analytics.webp';
import imgRadarIa from '../assets/projects/radar-ia.webp';
import imgOfficePlayground from '../assets/projects/office-playground.webp';
import imgPortalAr from '../assets/projects/portal-ar.webp';
import imgGestos from '../assets/projects/gestos.webp';
import imgPisoteio from '../assets/projects/pisoteio.webp';
import imgRocaAndRoll from '../assets/projects/roca-and-roll.webp';
import imgRodaDeBobo from '../assets/projects/roda-de-bobo.webp';
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
export type ProjectCategory = 'Gestão' | 'Comercial' | 'Tecnologia' | 'Educação' | 'Desenvolvimento';

// Duas trilhas de carreira, mostradas em seções separadas na página de
// Projetos: a trajetória de gestão/liderança e os projetos de desenvolvimento
// de software construídos por conta própria.
export type ProjectGroup = 'trabalho' | 'desenvolvimento';

// Dentro de "desenvolvimento", subdivide produtos/ferramentas de jogos —
// só usado para agrupar o grid, não aparece como filtro.
export type ProjectSubgroup = 'simulacao' | 'educacao' | 'visao' | 'negocios' | 'jogos';

/** Temas dos projetos de desenvolvimento, na ordem em que aparecem no site. */
export const devThemes: { id: ProjectSubgroup; title: string; intro: string }[] = [
  {
    id: 'simulacao',
    title: 'Simulação em tempo real',
    intro: 'Sistemas com centenas de agentes decidindo ao mesmo tempo, e você gerenciando o resultado.',
  },
  {
    id: 'educacao',
    title: 'Aprender brincando',
    intro: 'Tecnologia ensinada do jeito que prende: laboratórios, desafios e XP no lugar da apostila.',
  },
  {
    id: 'visao',
    title: 'Visão computacional',
    intro: 'Câmeras e modelos que contam, classificam e reagem ao que veem.',
  },
  {
    id: 'negocios',
    title: 'IA e produtos para negócios',
    intro: 'Ferramentas sob medida para empresas e escritórios trabalharem melhor.',
  },
  {
    id: 'jogos',
    title: 'Jogos e experiências',
    intro: 'Multiplayer com amigos, realidade aumentada, terror e outras ideias que viraram jogo.',
  },
];

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  group: ProjectGroup;
  subgroup?: ProjectSubgroup;
  tags: string[];
  period: string;
  challenges: string;
  results: string;
  gradient: string; // classes tailwind para o "cover" quando não há print real
  image?: string; // screenshot real do projeto, quando existe
  illustrativeImage?: boolean; // true quando `image` é foto de banco de imagens, não print do projeto
  link?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 'quintal-reestruturacao',
    group: 'trabalho',
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
    group: 'trabalho',
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
    group: 'trabalho',
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
    group: 'trabalho',
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
    group: 'trabalho',
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
    group: 'trabalho',
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
  // --- Simulação em tempo real ------------------------------------------------
  {
    id: 'pisoteio',
    group: 'desenvolvimento',
    subgroup: 'simulacao',
    image: imgPisoteio,
    title: 'Pisoteio — Simulador de Multidões',
    summary:
      'Até 1.700 pessoas simuladas em tempo real: você planeja o evento e a multidão decide se ele dá certo.',
    description:
      'Jogo de gestão de multidões no navegador. Antes do evento você coloca grades, abre portões e posiciona seguranças; depois o público chega, se espreme na frente do palco e tenta sair ao mesmo tempo. Cada pessoa é simulada 30 vezes por segundo: escolhe rotas que desviam de aglomeração, empurra, cai quando a densidade passa de 5 pessoas por m² e espalha pânico para quem está perto. Os seguranças acalmam quem está em volta.',
    category: 'Desenvolvimento',
    tags: ['JavaScript', 'Canvas', 'Simulação de agentes'],
    period: '2026',
    challenges:
      'Simular até 1.500 pessoas a 60 fps num celular comum (arrays tipados e rotas por Dijkstra recalculadas a cada segundo) e tratar um tema sério como engenharia de segurança, sem violência gráfica.',
    results:
      '6 fases (show, festival, réveillon, estádio, carnaval e metrô) com mapa de calor e gráfico de pressão. Cada fase tem um plano de referência validado por testes automáticos, e cada dica ensina um princípio real de gestão de multidões.',
    gradient: 'from-red-700 via-orange-500 to-yellow-400',
    link: 'https://gabrielseibel.github.io/pisoteio/',
    githubLink: 'https://github.com/gabrielseibel/pisoteio',
  },
  {
    id: 'roca-and-roll',
    group: 'desenvolvimento',
    subgroup: 'simulacao',
    image: imgRocaAndRoll,
    title: 'Roça & Roll — Gestão de Fazenda',
    summary:
      'Gestão de fazenda para jovens: equipe com turnos e salário, máquinas autônomas, mercado e agroindústria.',
    description:
      'Simulador de fazenda em pixel art que roda no navegador do PC e do celular. Dá para arar, plantar e colher com trator e colheitadeira, mas o centro é a gestão: contratar ajudantes com turnos de 8 horas e salário diário, dizer de quais campos cada um cuida, manter a frota de máquinas autônomas, vender no mercado com preços que mudam todo dia e montar uma agroindústria com moinho, prensa e usina de biodiesel.',
    category: 'Desenvolvimento',
    tags: ['JavaScript', 'Canvas', 'Pixel art'],
    period: '2026',
    challenges:
      'Fazer a equipe inteira seguir o plano sozinha, campo a campo (arar tudo, plantar, tratar e só colher quando amadurece), enquanto o jogador anda livre pelo mapa ou assume a máquina de qualquer ajudante.',
    results:
      'Quatro estações, 12 campos, mina com 50 níveis, vila com 8 moradores e tutorial guiado. A trilha lo-fi de 10 faixas foi composta em código, e o save se protege contra dados corrompidos.',
    gradient: 'from-lime-600 via-amber-500 to-orange-500',
    link: 'https://gabrielseibel.github.io/fazenda-sossego/',
    githubLink: 'https://github.com/gabrielseibel/fazenda-sossego',
  },
  {
    id: 'muddy-sundays',
    group: 'desenvolvimento',
    subgroup: 'simulacao',
    image: imgMuddySundays,
    title: 'Muddy Sundays',
    summary: 'Uma liga de várzea inglesa em pixel art que continua viva até com o jogo fechado.',
    description:
      'Jogo de gestão de futebol amador ambientado no interior da Inglaterra: o jogador assume um time de domingo (Sunday League) sem rede nos gols e tenta subir da Division Four até a Premier, num mundo que segue simulando as partidas de domingo enquanto ele está fora.',
    category: 'Desenvolvimento',
    tags: ['Tauri', 'React', 'Canvas'],
    period: '2026',
    challenges:
      'Simular o mundo do jogo continuamente, inclusive com o jogo fechado, sem perder a sensação de um lugar vivo.',
    results:
      'Mundo em pixel art navegável, narrativa de abertura completa e instalador próprio para Windows.',
    gradient: 'from-emerald-700 via-green-600 to-lime-500',
  },

  // --- Aprender brincando -----------------------------------------------------
  {
    id: 'office-playground',
    group: 'desenvolvimento',
    subgroup: 'educacao',
    image: imgOfficePlayground,
    title: 'Office Playground',
    summary: 'Aprender Word, Excel e PowerPoint brincando, sem apostila, sem login e com XP.',
    description:
      'Quem abre o site não lê um manual: mexe. Os laboratórios imitam o Word, o Excel e o PowerPoint e cada tarefa vale XP, com arcade de minigames, conquistas, trilha de aprendizagem e um desafio mestre no fim. O site também reúne as aulas do curso de Informática Essencial, inclusive o módulo de redes.',
    category: 'Desenvolvimento',
    tags: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    period: '2026',
    challenges:
      'Recriar a sensação dos programas do Office dentro do navegador, leve o bastante para rodar em computadores simples de sala de aula.',
    results:
      'No ar no GitHub Pages, com laboratórios de Word, Excel e PowerPoint, sala de aula, desafio mestre e guias por unidade curricular.',
    gradient: 'from-blue-600 via-emerald-500 to-orange-400',
    link: 'https://gabrielseibel.github.io/office-playground/',
    githubLink: 'https://github.com/gabrielseibel/office-playground',
  },
  {
    id: 'meu-primeiro-windows',
    group: 'desenvolvimento',
    subgroup: 'educacao',
    image: imgMeuPrimeiroWindows,
    title: 'Meu Primeiro Windows',
    summary: 'Ensina o Windows do zero, com voz e exercícios, para quem nunca usou um computador.',
    description:
      'Aplicativo desktop que ensina o uso básico do Windows 11 do zero, com narração por voz, passo a passo guiado e exercícios práticos, pensado para quem nunca usou um computador antes.',
    category: 'Desenvolvimento',
    tags: ['Tauri', 'React', 'TypeScript'],
    period: '2026',
    challenges:
      'Explicar conceitos de computador básico sem nenhum jargão técnico, com narração sincronizada e ritmo adequado para iniciantes completos.',
    results:
      'Aplicativo instalável com narração por voz, testes automatizados (Playwright) e instalador próprio para Windows.',
    gradient: 'from-sky-500 via-blue-400 to-indigo-400',
  },

  // --- Visão computacional ----------------------------------------------------
  {
    id: 'store-vision-analytics',
    group: 'desenvolvimento',
    subgroup: 'visao',
    image: imgStoreVision,
    illustrativeImage: true,
    title: 'Store Vision Analytics',
    summary: 'Uma câmera que conta quem entra e quem sai e mostra a ocupação da loja ao vivo.',
    description:
      'Sistema de visão computacional para lojas físicas: detecta e rastreia pessoas por câmera, conta entradas e saídas por uma linha de referência e mostra a ocupação atual num painel web atualizado ao vivo.',
    category: 'Desenvolvimento',
    tags: ['FastAPI', 'YOLO', 'WebSocket'],
    period: '2026',
    challenges:
      'Entregar rápido uma Fase 1 funcional (ocupação em tempo real), com arquitetura pronta para evoluir para relatórios de tempo de permanência na Fase 2.',
    results:
      'Fase 1 (API, persistência e painel de ocupação) em produção. Os relatórios de tempo médio de permanência estão planejados para a Fase 2.',
    gradient: 'from-teal-600 via-cyan-500 to-sky-400',
  },
  {
    id: 'plantation-vision-analytics',
    group: 'desenvolvimento',
    subgroup: 'visao',
    image: imgPlantationVision,
    illustrativeImage: true,
    title: 'Plantation Vision Analytics',
    summary: 'Câmera na lavoura que conta plantas e identifica pragas, ervas daninhas e doenças.',
    description:
      'Sistema de visão computacional agrícola: conta plantas, identifica pragas e ervas daninhas por espécie e estima doenças na planta em foco, com modelos próprios de detecção e classificação e painel web em tempo real.',
    category: 'Desenvolvimento',
    tags: ['FastAPI', 'YOLO', 'OpenCV'],
    period: '2026',
    challenges:
      'Treinar modelos de detecção e classificação específicos para soja e milho a partir de datasets próprios.',
    results:
      'Captura, detecção e classificação funcionando com câmera ao vivo. A análise de vídeo gravado está no roadmap.',
    gradient: 'from-lime-600 via-green-500 to-emerald-400',
  },
  {
    id: 'vehicle-analytics',
    group: 'desenvolvimento',
    subgroup: 'visao',
    image: imgVehicleAnalytics,
    illustrativeImage: true,
    title: 'Análise de Tráfego — Contagem de Veículos',
    summary: 'Conta e classifica veículos por tipo, cor e direção com um modelo YOLOv8 treinado para isso.',
    description:
      'Detecção e rastreamento de veículos e pessoas por câmera com um modelo YOLOv8 treinado para o caso, contagem de cruzamentos por uma linha definida pelo usuário (com direção), estimativa de cor e tipo de veículo e um painel web em tempo real.',
    category: 'Desenvolvimento',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Flask + SocketIO', 'SQLite'],
    period: '2026',
    challenges:
      'Treinar um modelo próprio, a partir do YOLOv8 genérico, para o caso específico de tráfego, e manter o painel em tempo real estável no Windows.',
    results:
      'Modelo customizado treinado e painel com veículos por hora, pico e gráficos por tipo e cor, aceitando câmera, vídeo enviado e transmissão ao vivo do YouTube.',
    gradient: 'from-cyan-600 via-blue-500 to-indigo-600',
  },
  {
    id: 'gestos',
    group: 'desenvolvimento',
    subgroup: 'visao',
    image: imgGestos,
    illustrativeImage: true,
    title: 'Gestos — Windows por Gestos de Mão',
    summary: 'Controla o Windows com a mão no ar: a pinça clica, o polegar ajusta o volume.',
    description:
      'App em Python que lê os 21 pontos da mão pela webcam (MediaPipe) e transforma gestos em comandos do Windows: arrastar a mão aberta avança ou volta (slides, abas, músicas), o polegar para cima ou para baixo muda o volume, o indicador move o mouse e a pinça clica e arrasta.',
    category: 'Desenvolvimento',
    tags: ['Python', 'MediaPipe', 'OpenCV'],
    period: '2026',
    challenges:
      'Deixar o cursor firme quando a mão está parada e sem atraso quando ela se move (filtro One Euro), evitando cliques acidentais.',
    results:
      '8 gestos com 5 modos de navegação, modo de simulação que só mostra o que faria e testes automatizados com mãos sintéticas.',
    gradient: 'from-zinc-700 via-neutral-600 to-zinc-500',
  },

  // --- IA e produtos para negócios ---------------------------------------------
  {
    id: 'radar-ia',
    group: 'desenvolvimento',
    subgroup: 'negocios',
    image: imgRadarIa,
    title: 'Radar IA',
    summary: 'Minha consultoria de IA para PMEs: um diagnóstico de 3 minutos mostra onde a IA entra primeiro.',
    description:
      'Site da minha consultoria em IA aplicada para pequenas e médias empresas. O centro é um diagnóstico de 12 perguntas que mede o potencial de uso de IA em seis frentes da operação (rotinas, atendimento, documentos, operação, dados e pessoas), compara a empresa com outras do mesmo porte e gera um resultado que pode ser compartilhado por link.',
    category: 'Desenvolvimento',
    tags: ['React 19', 'TypeScript', 'Tailwind 4', 'Vitest'],
    period: '2026',
    challenges:
      'Transformar a oferta de consultoria em algo que a empresa testa sozinha em 3 minutos, com recomendações práticas e dados de mercado conferidos na fonte (Cetic, IBGE, Sebrae, Eurostat).',
    results:
      'Site no ar com deploy automático, pontuação coberta por testes, resultado compartilhável e contato pelo WhatsApp já com o resumo do diagnóstico.',
    gradient: 'from-emerald-700 via-teal-600 to-emerald-500',
    link: 'https://gabrielseibel.github.io/radar-ia/',
    githubLink: 'https://github.com/gabrielseibel/radar-ia',
  },
  {
    id: 'jurisdoc-ai',
    group: 'desenvolvimento',
    subgroup: 'negocios',
    image: imgJurisdocAi,
    title: 'JurisDoc AI',
    summary: 'IA que lê o processo jurídico inteiro e responde sempre citando a página de origem.',
    description:
      'Plataforma para advogados e pequenos escritórios: envio de processos em PDF com resumo estruturado automático (partes, pedidos, cronologia, fatos, riscos e prazos) e chat com IA que responde só com base no conteúdo do próprio processo (RAG), sempre citando a página.',
    category: 'Desenvolvimento',
    tags: ['React', 'Node.js', 'PostgreSQL + pgvector', 'RAG', 'LangChain'],
    period: '2026',
    challenges:
      'Ancorar cada resposta da IA no processo real do cliente, sem inventar nada, mantendo custo e tempo de resposta baixos mesmo em documentos com milhares de páginas.',
    results:
      'Pipeline completo de upload, extração, divisão em trechos, embeddings, indexação vetorial e resumo automático, com autenticação, auditoria e arquitetura pronta para plano pago.',
    gradient: 'from-slate-600 via-blue-600 to-cyan-500',
  },
  {
    id: 'jozenir-camargo-site',
    group: 'desenvolvimento',
    subgroup: 'negocios',
    image: imgJozenirSite,
    title: 'Site & Painel — Jozenir Camargo & Associados',
    summary: 'Site de escritório de advocacia com painel próprio: o cliente edita tudo sem tocar em código.',
    description:
      'Site institucional responsivo e otimizado para SEO de um escritório especializado em Direito do Trabalho, com um painel administrativo completo (14 telas) que permite editar todo o conteúdo e as imagens do site sem tocar em código.',
    category: 'Desenvolvimento',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'JWT'],
    period: '2026',
    challenges:
      'Dar autonomia total de edição ao escritório, sem inventar nenhuma informação (OAB, endereços, depoimentos) que ainda não tivesse sido fornecida.',
    results:
      'Painel administrativo com autenticação, exportação de configuração e site público que reflete as edições na hora.',
    gradient: 'from-amber-600 via-orange-500 to-rose-500',
  },

  // --- Jogos e experiências ---------------------------------------------------
  {
    id: 'roda-de-bobo',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgRodaDeBobo,
    title: 'Roda de Bobo — Jogos de Auditório Online',
    summary: '36 minigames de auditório para jogar com os amigos, numa mesa com avatares que falam.',
    description:
      'Site multiplayer inspirado nos quadros do programa Roda de Bobo (CazéTV): alguém cria a sala, manda o link e todos sentam numa mesa virtual com avatares que mexem a boca quando a pessoa fala. São 36 jogos (quiz, palpites, blefe, mímica, desenho ao vivo, futebol) com milhares de perguntas e desafios.',
    category: 'Desenvolvimento',
    tags: ['Node.js', 'WebSocket', 'JavaScript'],
    period: '2026',
    challenges:
      'Servidor que guarda os segredos de cada jogo e manda para cada jogador só o que ele pode ver, sem repetir conteúdo dentro da mesma sala.',
    results:
      'Publicado na nuvem com deploy a cada atualização, Modo Programa com placar da noite, robôs para testar sem amigos e mais de 80 testes automatizados de regras e conteúdo.',
    gradient: 'from-indigo-700 via-purple-600 to-amber-400',
  },
  {
    id: 'portal-ar',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgPortalAr,
    title: 'PORTAL — Realidade Aumentada',
    summary: 'O celular vira uma janela para mundos 3D em miniatura, direto no navegador.',
    description:
      'Experiência de realidade aumentada feita com Three.js: o celular abre um portal para mundos em miniatura que dá para explorar, com descobertas escondidas. O mundo mais recente, Fazenda da Duda, é um vale inteiro (fazenda, vila com praça, rio, praia e montanhas) com texturas pintadas geradas por código, em volta do modelo 3D de uma casa de fazenda.',
    category: 'Desenvolvimento',
    tags: ['Three.js', 'WebXR', 'TypeScript', 'Blender'],
    period: '2026',
    challenges:
      'Funcionar em qualquer celular: com WebXR onde ele existe e, nos outros aparelhos, com câmera e giroscópio, sem precisar de marcador impresso.',
    results:
      'No ar no GitHub Pages, com três mundos (Fantasia, Vale Alecrim e Fazenda da Duda) e 41 testes ponta a ponta cobrindo abertura, exploração e descobertas.',
    gradient: 'from-sky-600 via-emerald-500 to-amber-400',
    link: 'https://gabrielseibel.github.io/portal-ar/',
    githubLink: 'https://github.com/gabrielseibel/portal-ar',
  },
  {
    id: 'shotgun-nightmare',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgShotgunNightmare,
    title: 'Shotgun Nightmare',
    summary: 'FPS de terror sem nenhum asset pronto: modelos, texturas e sons saem do código.',
    description:
      'Jogo de tiro em primeira pessoa num hospital abandonado, com uma escopeta cinematográfica (câmera lenta no tiro final) e três tipos de criatura. Não usa assets prontos: modelos, texturas e sons são gerados por código e a fase é montada em tempo de execução.',
    category: 'Desenvolvimento',
    tags: ['Unity 6 URP', 'C#', 'IA de inimigos'],
    period: '2026',
    challenges:
      'Fazer a lanterna e o clarão da arma iluminarem o ambiente sem estourar a própria arma de branco, e dar peso à escopeta (coice, recarga cartucho a cartucho, hitstop).',
    results:
      'Build para Windows com piloto automático que joga a fase inteira, testa pausa e reinício e tira prints de cada etapa (a imagem deste card saiu dele).',
    gradient: 'from-red-800 via-red-700 to-stone-800',
  },
  {
    id: 'na-varzea-unity',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgNaVarzeaUnity,
    title: 'Na Várzea — Unity',
    summary: 'Um bairro de futebol de várzea em 3D, com arte própria do Blender até o jogo.',
    description:
      'Jogo de futebol de várzea em Unity 6 (URP), com pipeline de arte própria: modelagem em Blender exportada para um kit de personagens e cenário customizado.',
    category: 'Desenvolvimento',
    tags: ['Unity 6 URP', 'C#', 'Blender'],
    period: '2026',
    challenges:
      'Criar do zero um pipeline de arte 3D original, do Blender até o kit de personagens usado no jogo.',
    results:
      'Campo de futebol e casas do bairro modelados e integrados ao jogo, com exportação Blender → Unity documentada e repetível.',
    gradient: 'from-green-600 via-lime-500 to-yellow-400',
  },
  {
    id: 'cat-quest',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgCatQuest,
    title: 'Cat Quest',
    summary: 'Jogo de cuidar de gatos dentro do navegador, 100% offline e sem coletar dados.',
    description:
      'Extensão para Chrome com 7 gatos e 6 ambientes para desbloquear, 3 minigames, nível e XP, missões diárias e progresso salvo localmente, sem servidor, sem cadastro e sem coleta de dados.',
    category: 'Desenvolvimento',
    tags: ['React', 'TypeScript', 'Vite', 'Chrome Extension'],
    period: '2026',
    challenges:
      'Manter toda a lógica do jogo isolada e testável, sem depender de React nem da API do Chrome, incluindo o progresso que acontece enquanto o jogo está fechado.',
    results:
      '62 testes automatizados cobrindo o motor do jogo e pacote final em torno de 6 MB após otimizar as imagens.',
    gradient: 'from-pink-500 via-rose-400 to-orange-300',
  },
  {
    id: 'stop-extension',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgStopExtension,
    title: 'STOP!',
    summary: 'STOP contra um bot, com um Desafio do Dia que é igual para todo mundo.',
    description:
      'Jogo completo de STOP (Adedonha) para um jogador, com 14 categorias, categorias personalizadas, modo Turbo, Desafio do Dia com semente fixa (igual para todo mundo no mesmo dia) e um bot local com 4 níveis de dificuldade.',
    category: 'Desenvolvimento',
    tags: ['JavaScript', 'ES Modules', 'Chrome Extension'],
    period: '2026',
    challenges:
      'Construir a validação automática das respostas (acentos, banco de palavras) e a pontuação sem nenhuma dependência externa.',
    results:
      '59 testes automatizados, 100% offline (nenhum dado sai do navegador) e lógica do jogo separada da interface.',
    gradient: 'from-lime-500 via-emerald-500 to-teal-500',
  },
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
