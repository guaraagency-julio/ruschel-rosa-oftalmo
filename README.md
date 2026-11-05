# Dr. Guilherme Ruschel Rosa — Site institucional

Site responsivo multipágina para desktop e mobile. Navegação: Início, Sobre o médico, Áreas de atuação, Convênios, Avaliações e Contato.

## Rodar e publicar

- `npm run build` copia todas as páginas HTML, arquivos CSS/JS, imagens e configurações para `dist/`.
- `npx wrangler deploy` publica os arquivos estáticos pela Cloudflare Workers.
- Diretório de publicação: `dist/`. Configuração: `wrangler.jsonc`.

O site ainda depende de aprovação do médico para publicação definitiva de conteúdos, marcas e imagens. Mantida proteção `noindex` durante essa etapa.

## Organização

- `index.html` — página inicial curta
- `sobre.html` — biografia, formação, experiência de consulta, fotos e Instagram
- `especialidades.html` — catarata, cirurgia refrativa, córnea e perguntas frequentes
- `convenios.html` — operadoras e planos com pesquisa
- `avaliacoes.html` — depoimentos disponibilizados pelo usuário e referência ao Google
- `contato.html` — Novo Hamburgo e Nova Petrópolis, com Google Maps padrão
- `styles.css`, `script.js` — estilos e interações compartilhados
- `assets/medico-sobre.webp` — fotografia fornecida para a seção sobre o médico

A listagem de convênios representa dados divulgados pelo Centro Clínico Regina e deve ser confirmada para cada atendimento.
