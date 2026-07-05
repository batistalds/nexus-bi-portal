# Nexus BI — Portal Institucional

Landing page e portal de acesso de uma plataforma fictícia de Business Intelligence
para operações industriais, construída como peça de portfólio.

## Sobre o projeto

O Nexus BI é apresentado como uma empresa que constrói painéis de BI sob medida para
indústrias (o exemplo usado é um cliente fictício do setor de rochas ornamentais).
Este repositório contém apenas o **site institucional**: Home, Soluções, Sobre,
Contato e um portal de login que simula o acesso de um cliente ao seu dashboard.

## Stack

- React + Vite
- React Router
- Tailwind CSS
- Lucide Icons

## Páginas

- **Home** — hero, apresentação dos módulos (Vendas, Processos, Estoque, Financeiro), case de cliente em destaque e CTA
- **Soluções** — detalhamento de cada módulo e o processo de implantação
- **Sobre** — missão, valores e forma de trabalho
- **Contato** — formulário de contato (client-side, sem backend)
- **Portal do cliente** — tela de login simulada com seleção de empresa, que redireciona ao dashboard do cliente

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5174`.

## Build de produção

```bash
npm run build
npm run preview
```

---

Projeto de demonstração — os dados de clientes, planos e depoimentos são fictícios.
