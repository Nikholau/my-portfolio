# Portfólio WSIS Minicurso

Bem-vindo ao minicurso de desenvolvimento de portfólio da WSIS! Este projeto é uma configuração inicial para criar seu próprio portfólio usando tecnologias modernas, como React, TypeScript e Vite. O ambiente de desenvolvimento inclui suporte a HMR (Hot Module Replacement) para uma experiência de desenvolvimento mais eficiente.

## Recursos Principais

- **React + TypeScript + Vite:** Desenvolva seu portfólio usando uma pilha de tecnologias modernas e eficientes.
- **HMR:** A atualização instantânea de módulos melhora significativamente o fluxo de trabalho de desenvolvimento.
- **ESLint:** Conjunto inicial de regras ESLint para garantir código limpo e consistente.
- **Plugins React Oficiais:** Escolha entre o uso do Babel ou SWC para Fast Refresh, dependendo das suas preferências.

## Configuração Adicional

Se estiver desenvolvendo uma aplicação de produção, considere expandir a configuração ESLint para habilitar regras cientes de tipos e melhorar a qualidade do código.

```js
parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: ['./tsconfig.json', './tsconfig.node.json'],
  tsconfigRootDir: __dirname,
},

Substitua plugin:@typescript-eslint/recommended por plugin:@typescript-eslint/recommended-type-checked ou plugin:@typescript-eslint/strict-type-checked. Adicione opcionalmente plugin:@typescript-eslint/stylistic-type-checked.

##  Como Usar

Clone este repositório.
Execute yarn install para instalar as dependências.
Personalize o conteúdo conforme suas necessidades.
Execute yarn dev para iniciar o servidor de desenvolvimento.
Acesse http://localhost:3000 para visualizar o portfólio.
Contribuindo
Este projeto é aberto para contribuições. Sinta-se à vontade para enviar pull requests, relatar problemas ou sugerir melhorias. Juntos, podemos aprimorar esta ferramenta para benefício de todos.

##  Aproveite o minicurso e a criação do seu incrível portfólio!


Este é um modelo básico para começar com as informações essenciais. Adapte conforme necessário e sinta-se à vontade para adicionar detalhes específicos do seu curso ou projeto.


