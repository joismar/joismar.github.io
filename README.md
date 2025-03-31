# joismar.github.io

Este é meu site pessoal desenvolvido com o framework Astro, combinando performance e flexibilidade para criar uma experiência web moderna e eficiente.

## 🚀 Sobre o Projeto

Este site pessoal serve como meu portfólio digital e blog, onde compartilho meus projetos, experiências e conhecimentos na área de desenvolvimento. Construído com Astro, o site oferece carregamento rápido e uma experiência fluida para os visitantes.

## 🛠️ Tecnologias Utilizadas

- [Astro](https://astro.build/) - Framework web que oferece renderização híbrida
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [tailwindcss](https://tailwindcss.com/) - Para estilização
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript

## ⚙️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16.x ou superior)
- npm ou yarn

### Passos para Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/joismar/joismar.github.io.git
   cd joismar.github.io
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse `http://localhost:3000` no seu navegador

## 🚀 Deployment

O site é automaticamente implantado no GitHub Pages quando alterações são enviadas para a branch principal.

Para fazer o build manual:

```bash
npm run build
# ou
yarn build
```

Os arquivos gerados estarão na pasta `dist/`.

## 📂 Estrutura do Projeto

```
joismar.github.io/
├── public/          # Arquivos estáticos
├── src/
│   ├── components/  # Componentes reutilizáveis
│   ├── layouts/     # Layouts de página
│   ├── pages/       # Páginas do site
│   └── styles/      # Arquivos CSS
├── astro.config.mjs # Configuração do Astro
├── package.json     # Dependências e scripts
└── tsconfig.json    # Configuração do TypeScript
```

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes. Com exceção das postagens que estão sob propriedade intelectual do autor.
