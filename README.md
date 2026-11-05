# Ruschel Rosa — Oftalmologia | Prévia

Prévia institucional responsiva desenvolvida pela **Guará Agency** para apresentação ao médico Guilherme Ruschel Rosa. Design mobile-first com identidade visual original, fotos disponibilizadas, CRM/RQE, conteúdo de formação, áreas de atuação, convênios, localização e WhatsApp.

## Visualizar localmente
Basta abrir `index.html` no Chrome/Edge ou servir a pasta com `python -m http.server 8000` e visitar `http://localhost:8000`. Não há dependências de Node, npm ou build. As fontes web podem usar fallback do sistema se estiver sem internet.

## Publicar pelo GitHub + Cloudflare Pages
1. Na conta GitHub **guaraagency-julio**, criar um repositório chamado `ruschel-rosa-oftalmo` (recomendável **privado** até aprovar conteúdo e direitos das imagens).
2. Enviar todos os arquivos de produção da raiz deste projeto, inclusive `assets/`, `index.html`, `styles.css`, `script.js`, `robots.txt` e `_headers`.
3. No painel da Cloudflare: Workers & Pages → Create application → Pages → Import an existing Git repository; selecionar `guaraagency-julio/ruschel-rosa-oftalmo`.
4. Framework preset: **None**. Build command: **em branco**. Build output directory: `/` (raiz estática do repositório; se o painel exigir diretório explícito, utilizar `.`).
5. Publicar e abrir a URL `*.pages.dev` no Samsung S23, via Chrome e rede móvel. Confirmar fotos, convênios, menus e links.

> O GitHub connector acessível neste chat não disponibilizou uma ação de **criar repositório**, e o repositório solicitado retornou `404` na consulta. Portanto, nenhum commit remoto ou deploy Cloudflare foi executado. O ZIP está preparado para importar assim que o repositório existir.

## Conteúdo e licenças
- A **marca principal** foi isolada do screenshot entregue para demonstração. Uma versão vetorial oficial, quando disponível, deve substituí-la na versão pública.
- Fotografias enviadas pelo cliente durante o briefing. Sua exibição pública depende de autorização do titular e de terceiros eventualmente retratados.
- Logos de convênios: esta prévia exibe **wordmarks tipográficos de demonstração** e, para alguns, favicons remotos como detalhe visual. Ainda falta a substituição por todos os logos oficiais. O fallback textual funciona sem rede.
- Relação de convênios baseada em fonte pública; planos e procedimentos devem ser confirmados no momento do agendamento.
- Endereço e CRM/RQE: referências em `docs/PRODUCT.md`. Nenhum CEP foi colocado devido a divergência entre fontes.
- A prévia inclui `noindex`, `robots.txt` e `X-Robots-Tag`, porque ainda precisa de aprovação do médico.

## Conformidade
Conferir a versão final com a Resolução CFM 2.336/2023 e o manual oficial de publicidade médica, incluindo identificação de profissional, especialidade, RQE e uso das imagens. Este projeto não coleta dados pessoais pelo site: o botão direciona ao WhatsApp externo.

## Estrutura
- `index.html` — conteúdo e semântica
- `styles.css` — sistema responsivo e motion
- `script.js` — menu, tabs, convênios, galeria, CTA móvel
- `assets/` — símbolo/marca e fotos do briefing
- `docs/` — prompt mestre, planejamento e sistema visual

## Referências técnicas
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://www.centroclinicoregina.com.br/medico/guilherme-ruschel-rosa
- https://www.somehr.com.br/corpo-clinico/355
- https://publicidademedica.cfm.org.br/
