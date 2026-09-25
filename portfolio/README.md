# 💻 José Pedro Luna — Portfólio

Portfólio pessoal desenvolvido para apresentar minha trajetória, projetos e formação na transição
de carreira para o desenvolvimento de software — unindo minha bagagem em gestão empresarial com
o desenvolvimento Full Stack.

**🔗 Acesse:** [portfolio-one-dun-z71pggdpl8.vercel.app](https://portfolio-one-dun-z71pggdpl8.vercel.app)

![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![SSR](https://img.shields.io/badge/SSR-Habilitado-333333)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

---

## 📖 Sobre o projeto

O site é uma SPA construída em Angular, com foco em performance, responsividade e uma identidade
visual consistente (tema escuro com tokens de design reaproveitados em todos os componentes).
Apresenta minha formação, projetos práticos e áreas de estudo atuais.

## 🚀 Tecnologias

- **Angular 22** — componentes standalone, signals e roteamento
- **TypeScript**
- **CSS3 / SCSS** — CSS variables como design tokens, Grid e Flexbox
- **Angular SSR** (`@angular/ssr` + Express) — renderização no servidor
- **Font Awesome** e **Google Fonts** (Inter, Handjet)
- **Vercel** — deploy contínuo

## ✨ Funcionalidades

- Navegação por 4 seções: Início, Sobre, Projetos e Estudos
- Menu responsivo com painel mobile colapsável
- Cards de projetos com tecnologias, papel no projeto e link para o repositório
- Acompanhamento da grade curricular do curso (ADS) e das tecnologias em foco
- Download de currículo em PDF direto pela Home

## 📂 Estrutura de pastas

```
portfolio/
├─ public/              # Imagens, logo e CV (assets estáticos)
└─ src/app/
   ├─ pages/
   │  ├─ navbar/        # Cabeçalho e navegação
   │  ├─ home/           # Página inicial (hero, stack, CTAs)
   │  ├─ sobre/           # Formação e experiência
   │  ├─ projetos/        # Cards de projetos (data-driven)
   │  └─ estudos/         # Grade curricular e casos de estudo
   ├─ models/            # Interfaces TypeScript (Projeto, PeriodoAcademico...)
   └─ app.routes.ts       # Definição das rotas
```

## ⚙️ Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/Nphilin/Portfolio.git
cd Portfolio/portfolio

# Instalar dependências
npm install

# Rodar em modo desenvolvimento (http://localhost:4200)
npm start

# Build de produção
npm run build

# Rodar o build com SSR
npm run serve:ssr:portfolio
```

## 🗺️ Próximos passos

- [ ] Formulário de contato funcional
- [ ] Testes unitários dos componentes principais
- [ ] Blog / seção de artigos técnicos

## 📬 Contato

- **GitHub:** [@Nphilin](https://github.com/Nphilin)
- **LinkedIn:** [José Pedro Luna](https://linkedin.com/in/josé-pedro-b561ab185)
