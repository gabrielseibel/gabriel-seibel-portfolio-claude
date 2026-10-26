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
import imgFc27 from '../assets/projects/fc27-manager-control.webp';
import imgStoreVision from '../assets/projects/store-vision-analytics.webp';
import imgPlantationVision from '../assets/projects/plantation-vision-analytics.webp';
import imgMeuPrimeiroWindows from '../assets/projects/meu-primeiro-windows.webp';
import imgClubeDeBolso from '../assets/projects/clube-de-bolso.webp';
import imgNaVarzeaUnity from '../assets/projects/na-varzea-unity.webp';
import imgMuddySundays from '../assets/projects/muddy-sundays.webp';
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
export type ProjectSubgroup = 'produtos' | 'jogos';

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
  {
    id: 'jurisdoc-ai',
    group: 'desenvolvimento',
    subgroup: 'produtos',
    image: imgJurisdocAi,
    title: 'JurisDoc AI',
    summary: 'Plataforma SaaS de IA jurídica para advogados e pequenos escritórios.',
    description:
      'Envio de processos em PDF com geração automática de resumo estruturado (partes, pedidos, cronologia, fatos, riscos e prazos) e chat com IA que responde exclusivamente com base no conteúdo do próprio processo (RAG), sempre citando a página de origem.',
    category: 'Desenvolvimento',
    tags: ['React', 'Node.js', 'PostgreSQL + pgvector', 'RAG', 'LangChain'],
    period: '2026',
    challenges:
      'Ancorar cada resposta da IA no processo real do cliente (nunca alucinar), mantendo custo e latência baixos mesmo para documentos com milhares de páginas.',
    results:
      'Pipeline completo de upload → extração → chunking → embeddings → indexação vetorial → resumo automático, com autenticação, auditoria e arquitetura pronta para plano pago.',
    gradient: 'from-slate-600 via-blue-600 to-cyan-500',
  },
  {
    id: 'jozenir-camargo-site',
    group: 'desenvolvimento',
    subgroup: 'produtos',
    image: imgJozenirSite,
    title: 'Site & Painel — Jozenir Camargo & Associados',
    summary: 'Site institucional para escritório de advocacia + painel administrativo próprio.',
    description:
      'Site institucional responsivo e otimizado para SEO de um escritório especializado em Direito do Trabalho, com um painel administrativo completo (14 telas) que permite editar todo o conteúdo e as imagens do site sem tocar em código.',
    category: 'Desenvolvimento',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'JWT'],
    period: '2026',
    challenges:
      'Dar autonomia total de edição de conteúdo ao escritório, sem inventar nenhuma informação (OAB, endereços, depoimentos) que ainda não havia sido fornecida.',
    results:
      'Painel administrativo funcional com autenticação, exportação de configuração e site público que reflete as edições imediatamente.',
    gradient: 'from-amber-600 via-orange-500 to-rose-500',
  },
  {
    id: 'cat-quest',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgCatQuest,
    title: 'Cat Quest',
    summary: 'Extensão de navegador — jogo casual de cuidar de gatos, 100% offline.',
    description:
      'Jogo para Chrome (Manifest V3) com 7 gatos e 6 ambientes desbloqueáveis, 3 minigames, sistema de nível/XP, missões diárias e progresso salvo localmente, sem backend, sem cadastro e sem coleta de dados.',
    category: 'Desenvolvimento',
    tags: ['React', 'TypeScript', 'Vite', 'Chrome Extension'],
    period: '2026',
    challenges:
      'Manter toda a lógica de jogo isolada e testável (sem depender de React ou da API do Chrome), incluindo o cálculo correto de progresso mesmo enquanto o jogo está fechado.',
    results:
      '62 testes automatizados cobrindo o motor do jogo, pacote final em torno de 6MB após otimização das imagens geradas por IA.',
    gradient: 'from-pink-500 via-rose-400 to-orange-300',
  },
  {
    id: 'stop-extension',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgStopExtension,
    title: 'STOP!',
    summary: 'Extensão de navegador — jogo de STOP/ADedonha contra um bot local.',
    description:
      'Jogo completo de STOP para um jogador, com 14 categorias nativas, categorias personalizadas, modo Turbo, Desafio do Dia com seed determinística (igual para todo mundo no mesmo dia) e um bot local com 4 níveis de dificuldade.',
    category: 'Desenvolvimento',
    tags: ['JavaScript', 'ES Modules', 'Chrome Extension'],
    period: '2026',
    challenges:
      'Construir a validação automática de respostas (normalização de acentos, checagem contra banco de palavras) e a pontuação sem nenhuma dependência externa.',
    results:
      '59 testes automatizados, 100% offline (nenhum dado sai do navegador), arquitetura que separa a lógica de jogo da interface para facilitar testes.',
    gradient: 'from-lime-500 via-emerald-500 to-teal-500',
  },
  {
    id: 'vehicle-analytics',
    group: 'desenvolvimento',
    subgroup: 'produtos',
    title: 'Análise de Tráfego — Contagem de Veículos',
    summary: 'Sistema de visão computacional para contagem e classificação de veículos em tempo real.',
    description:
      'Detecção e rastreamento de veículos e pessoas por câmera com um modelo YOLOv8 próprio treinado, contagem de cruzamentos por linha definida pelo usuário (com direção), estimativa de cor e tipo de veículo, e um dashboard web em tempo real.',
    category: 'Desenvolvimento',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Flask + SocketIO', 'SQLite'],
    period: '2026',
    challenges:
      'Treinar um modelo próprio (a partir do YOLOv8 genérico) para o caso específico de tráfego, e manter o dashboard em tempo real estável no Windows.',
    results:
      'Modelo customizado treinado, dashboard com KPIs (veículos/hora, pico), gráficos por hora e por tipo/cor, suporte a câmera, vídeo enviado e transmissão do YouTube ao vivo.',
    gradient: 'from-cyan-600 via-blue-500 to-indigo-600',
  },
  {
    id: 'fc27-manager-control',
    group: 'desenvolvimento',
    subgroup: 'produtos',
    image: imgFc27,
    title: 'FC27 Manager Control',
    summary: 'Painel de controle para o Modo Carreira do FC 27.',
    description:
      'Painel web que extrai dados ao vivo do Modo Carreira do FC 27 via um exportador Lua rodando dentro do jogo, e exibe elenco, contratos, desempenho, calendário, mercado de transferências e alertas — com modo de demonstração usando dados fictícios claramente identificados.',
    category: 'Desenvolvimento',
    tags: ['FastAPI', 'React', 'Lua'],
    period: '2026',
    challenges:
      'Extrair dados de dentro do jogo via script Lua sem acesso oficial à API, e deixar claro na interface quando os dados exibidos são reais ou de demonstração.',
    results:
      'Exportador Lua funcional testado em ambiente simulado, painel com 15 telas (elenco, contratos, tática, finanças, base, competições) e modo demo totalmente isolado dos dados reais.',
    gradient: 'from-emerald-600 via-green-500 to-lime-400',
  },
  {
    id: 'store-vision-analytics',
    group: 'desenvolvimento',
    subgroup: 'produtos',
    image: imgStoreVision,
    title: 'Store Vision Analytics',
    summary: 'Contagem de ocupação de loja em tempo real por câmera.',
    description:
      'Sistema de visão computacional para lojas físicas: detecta e rastreia pessoas por câmera, conta entradas e saídas por uma linha de referência e mostra a ocupação atual em um dashboard web atualizado ao vivo.',
    category: 'Desenvolvimento',
    tags: ['FastAPI', 'YOLO', 'WebSocket'],
    period: '2026',
    challenges:
      'Entregar uma Fase 1 funcional (ocupação em tempo real) rápido, com arquitetura pronta para evoluir para relatórios de tempo de permanência na Fase 2.',
    results:
      'Fase 1 (API, persistência e dashboard web básico de ocupação) em produção. Relatórios de dwell-time e tempo médio de permanência estão planejados para a Fase 2.',
    gradient: 'from-teal-600 via-cyan-500 to-sky-400',
  },
  {
    id: 'plantation-vision-analytics',
    group: 'desenvolvimento',
    subgroup: 'produtos',
    image: imgPlantationVision,
    title: 'Plantation Vision Analytics',
    summary: 'Detecção de plantas, pragas e doenças por câmera em lavoura.',
    description:
      'Sistema de visão computacional agrícola: conta plantas, identifica pragas e ervas daninhas por espécie, e estima doenças na planta em foco, usando modelos de detecção e classificação próprios, com dashboard web em tempo real.',
    category: 'Desenvolvimento',
    tags: ['FastAPI', 'YOLO', 'OpenCV'],
    period: '2026',
    challenges:
      'Treinar modelos de detecção e classificação específicos para soja e milho a partir de datasets próprios preparados internamente.',
    results:
      'Pipeline de captura, detecção e classificação funcionando com câmera ao vivo. Upload de vídeo gravado (além da câmera ao vivo) está no roadmap.',
    gradient: 'from-lime-600 via-green-500 to-emerald-400',
  },
  {
    id: 'meu-primeiro-windows',
    group: 'desenvolvimento',
    subgroup: 'produtos',
    image: imgMeuPrimeiroWindows,
    title: 'Meu Primeiro Windows',
    summary: 'Curso interativo de Windows 11 para iniciantes completos.',
    description:
      'Aplicativo desktop que ensina o uso básico do Windows 11 do zero, com narração por voz, passo a passo guiado e exercícios práticos — pensado para quem nunca usou um computador antes.',
    category: 'Desenvolvimento',
    tags: ['Tauri', 'React', 'TypeScript'],
    period: '2026',
    challenges:
      'Explicar conceitos de computador básico sem nenhum jargão técnico, com narração sincronizada e ritmo adequado para iniciantes completos.',
    results:
      'Aplicativo instalável funcional com narração por voz, testes automatizados (Playwright) e instalador próprio para Windows.',
    gradient: 'from-sky-500 via-blue-400 to-indigo-400',
  },
  {
    id: 'clube-de-bolso',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgClubeDeBolso,
    title: 'Clube de Bolso',
    summary: 'Jogo desktop de gestão de um clube de futebol amador.',
    description:
      'Jogo de gestão onde o jogador assume um pequeno clube de futebol de bairro — monta o elenco, cuida das finanças e tenta fazer o clube crescer, um domingo de cada vez.',
    category: 'Desenvolvimento',
    tags: ['Tauri', 'React', 'TypeScript'],
    period: '2026',
    challenges:
      'Simular uma temporada inteira de futebol amador de forma simples e divertida, com um instalador desktop de verdade.',
    results:
      'Jogo completo com instalador para Windows (Tauri), testes automatizados e fluxo de criação de personagem/clube funcional.',
    gradient: 'from-blue-600 via-indigo-500 to-violet-500',
  },
  {
    id: 'na-varzea-unity',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgNaVarzeaUnity,
    title: 'Na Várzea — Unity',
    summary: 'Porte em Unity 6 URP, com arte própria.',
    description:
      'Reconstrução de Na Várzea em Unity 6 (URP), com pipeline de arte própria — modelagem em Blender exportada para um kit de personagens e cenário customizado.',
    category: 'Desenvolvimento',
    tags: ['Unity 6 URP', 'C#', 'Blender'],
    period: '2026',
    challenges:
      'Criar um pipeline de arte 3D original (não genérica) do zero, do Blender até o kit de personagens usado no jogo.',
    results:
      'Campo de futebol e casas do bairro totalmente modelados e integrados ao jogo, com pipeline de exportação Blender → Unity documentado e repetível.',
    gradient: 'from-green-600 via-lime-500 to-yellow-400',
  },
  {
    id: 'muddy-sundays',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    image: imgMuddySundays,
    title: 'Muddy Sundays',
    summary: 'Sunday League inglês em pixel art: monte o time, suba de divisão.',
    description:
      'Jogo de gestão de futebol amador ambientado no interior da Inglaterra, em pixel art: o jogador assume um time de domingo (Sunday League) sem rede nos gols e tenta subir da Division Four até a Premier.',
    category: 'Desenvolvimento',
    tags: ['Tauri', 'React', 'Canvas'],
    period: '2026',
    challenges:
      'Simular o mundo do jogo continuamente (inclusive com o jogo fechado, via simulação de partidas de domingo) mantendo a sensação de um lugar vivo.',
    results:
      'Mundo em pixel art navegável, narrativa de abertura completa e instalador próprio para Windows.',
    gradient: 'from-emerald-700 via-green-600 to-lime-500',
  },
  {
    id: 'shotgun-nightmare',
    group: 'desenvolvimento',
    subgroup: 'jogos',
    title: 'Shotgun Nightmare',
    summary: 'FPS de terror procedural em Unity 6 URP.',
    description:
      'Jogo de tiro em primeira pessoa com geração procedural de ambientes de terror, construído em Unity 6 com o pipeline URP.',
    category: 'Desenvolvimento',
    tags: ['Unity 6 URP', 'C#'],
    period: '2026',
    challenges:
      'Gerar ambientes de terror proceduralmente mantendo iluminação e ritmo de jogo consistentes a cada execução.',
    results:
      'Build Windows funcional, com rotinas automatizadas de autoteste e teste de "sensação" (feel test) do jogo.',
    gradient: 'from-red-800 via-red-700 to-stone-800',
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
