# Gabriel Seibel — Portfólio Pessoal

Site de apresentação pessoal moderno, interativo e responsivo, construído com
React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide React.

## ✨ Stack

- **React 19** + **TypeScript**
- **Vite** (build e dev server)
- **Tailwind CSS v4** (`@tailwindcss/vite`, tema em `src/index.css`)
- **Framer Motion** (`framer-motion`) para animações e microinterações
- **Lucide React** para ícones

## 📁 Estrutura

```
src/
├── config/
│   └── profile.ts        ← TODO o conteúdo editável (nome, bio, experiências,
│                            habilidades, projetos, contatos) fica aqui.
├── components/            ← Componentes visuais (não precisam ser editados
│                            para trocar o conteúdo).
├── hooks/                  ← Hooks utilitários (tema, seção ativa, etc.)
└── index.css               ← Design tokens (cores, fontes, animações) e
                              utilitários globais (glass, glow, grid, cursor).
```

## ✏️ Como editar o conteúdo

Abra **`src/config/profile.ts`** e altere os dados: nome, cargo, biografia,
localização, e-mail, redes sociais, estatísticas, formação, experiências
profissionais, habilidades e projetos. Os componentes leem tudo desse arquivo
— não é necessário tocar em nenhum componente visual para atualizar o
conteúdo.

Para trocar as cores/gradiente principal do site, edite o bloco `@theme` no
topo de `src/index.css` (variáveis `--color-violet-glow`, `--color-cyan-glow`,
`--color-amber-glow`).

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## 📦 Build de produção

```bash
npm run build
npm run preview   # para testar o build localmente
```

## 🌐 Deploy no GitHub Pages

Este projeto já vem pronto para publicar no GitHub Pages via GitHub Actions:

1. Crie um repositório no GitHub e suba este projeto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
2. No GitHub, vá em **Settings → Pages** e, em "Build and deployment",
   selecione **Source: GitHub Actions**.
3. O workflow em `.github/workflows/deploy.yml` fará o build e publicará
   automaticamente a cada push na branch `main`. Acompanhe em **Actions**.
4. O site ficará disponível em
   `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`.

> O `vite.config.ts` usa `base: './'` (caminhos relativos), então o build
> funciona tanto em páginas de projeto (`usuario.github.io/repo/`) quanto em
> páginas de usuário (`usuario.github.io/`) ou domínio próprio — não é
> necessário ajustar `base` manualmente.

## ♿ Acessibilidade e performance

- Suporte a `prefers-reduced-motion` (desativa animações para quem prefere).
- Cursor customizado desativado automaticamente em touch/mobile.
- Navegação por teclado com foco visível.
- HTML semântico e `aria-label`s nos controles interativos.
- Tema dark/light com preferência salva em `localStorage` e respeito à
  preferência do sistema operacional na primeira visita.
