# DMN Tech — site institucional

Projeto local independente com React, TypeScript, Vite, Tailwind CSS e Lucide. Pode ser copiado para um repositório novo e integrado depois.

## Rodar localmente

1. Instale o Node.js (versão 18 ou superior).
2. Na pasta deste projeto, execute `npm install`.
3. Execute `npm run dev` e abra o endereço local exibido pelo Vite.

Para gerar a versão de produção, execute `npm run build`; a saída ficará em `dist/`.

## Configurar canais e formulário

O WhatsApp e o endereço `dmntech.solucoes@gmail.com` estão configurados em `src/config.ts`. Sem `contactEndpoint`, o formulário valida os campos e abre um rascunho no Gmail, endereçado a esse e-mail, com os dados preenchidos; a pessoa deve revisar e clicar em Enviar no Gmail. Para envio automático pelo site, configure um endpoint HTTPS seguro em `contactEndpoint` e mantenha as credenciais no servidor, nunca no frontend. O Instagram pode ser preenchido quando o perfil oficial estiver definido.

## Conteúdo demonstrativo

Os exemplos da seção Projetos são identificados no texto da seção. A lista de tecnologias é uma sugestão para projetos e deve ser ajustada às tecnologias confirmadas pela DMN Tech.

## Equipe

A seção da equipe usa os retratos da imagem fornecida e apresenta nomes, funções e responsabilidades como texto responsivo para evitar cortes, incluindo o título completo de Nathália Rodrigues.
