# DMN Tech — site institucional

Projeto local independente com React, TypeScript, Vite, Tailwind CSS e Lucide. Pode ser copiado para um repositório novo e integrado depois.

## Rodar localmente

1. Instale o Node.js (versão 18 ou superior).
2. Na pasta deste projeto, execute `npm install`.
3. Execute `npm run dev` e abra o endereço local exibido pelo Vite.

Para gerar a versão de produção, execute `npm run build`; a saída ficará em `dist/`.

## Configurar canais e formulário

O WhatsApp informado já está configurado em `src/config.ts`. Edite os campos `email` e `instagram` quando esses canais estiverem definidos. O formulário envia um POST JSON para `contactEndpoint`; configure-o com a URL HTTPS da integração escolhida. Sem endpoint configurado, o formulário informa claramente que ainda não está conectado e não simula um envio.

## Conteúdo demonstrativo

Os cartões da seção Projetos são explicitamente marcados como demonstrativos. A lista de tecnologias é uma sugestão para projetos e deve ser ajustada às tecnologias confirmadas pela DMN Tech.
