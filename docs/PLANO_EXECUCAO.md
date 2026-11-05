# Plano de execução — site Dr. Guilherme Ruschel Rosa

## P0 — Prévia comercial (entregue nesta versão)
- [x] Definir uma direção visual coerente com a identidade existente.
- [x] Extrair símbolo e marca do material enviado; salvar em `assets/`.
- [x] Selecionar, comprimir e integrar fotografias reais de consultório, exame, fachada e centro cirúrgico.
- [x] Implementar página única completa, com CTAs WhatsApp e links de Instagram/Google Maps.
- [x] Incluir biografia fiel, formação UFRGS/HCPA, CRM/RQE, endereço, telefone e áreas de atuação.
- [x] Criar componentes mobile-first e navegação adaptativa.
- [x] Criar tabs acessíveis para catarata, cirurgia refrativa e córnea.
- [x] Criar FAQ, galeria horizontal e busca instantânea de convênios.
- [x] Exibir 25 opções de atendimento conforme lista de 24 convênios mais particular, com logotipos tipográficos provisórios, marca cromática e favicons quando possível.
- [x] Incluir `noindex` e informar no rodapé que se trata de prévia.
- [x] Executar inspeção em Chromium em 320, 360, 768, 780 e 1440 CSS px; verificar que `scrollWidth == innerWidth`.
- [x] Testar menu móvel, tab de córnea, busca de convênio e avanço de galeria.
- [x] Preservar HTML/CSS/JS simples, sem build e adequado ao Cloudflare Pages.

## P1 — Pendências antes da publicação oficial
- [ ] Aprovação formal do médico para uso de nome, identidade e fotos, incluindo a imagem de terceiro.
- [ ] Validar telefone, clínica, local, convênios efetivamente aceitos e CEP.
- [ ] Substituir os tratamentos tipográficos de convênios pelas artes de **logo oficiais de cada operadora** autorizadas e armazenadas localmente.
- [ ] Validar linguagem de serviços, termos clínicos e textos de FAQ com o médico.
- [ ] Confirmar horário de atendimento, estacionamentos, contatos e instruções de consulta, se desejado.
- [ ] Substituir prévia/noindex por conteúdo aprovado e indexável.
- [ ] Criar repositório remoto `guaraagency-julio/ruschel-rosa-oftalmo` (não foi possível usar o conector disponível para criá-lo; a ação exposta só escreve em repositórios já existentes).
- [ ] Conectar novo repositório ao Cloudflare Pages (deploy via Git); criar o domínio de preview e validar no S23 físico.

## P2 — Acabamento de produção / SEO posterior
- [ ] Logotipos oficiais, formatos WEBP com art direction alternativo e material fotográfico de alta qualidade fornecido pelo médico.
- [ ] Auditoria de Core Web Vitals em rede real; correções de LCP e CLS conforme métricas.
- [ ] SEO de produção: URL canônica, Open Graph absoluto, robots liberado, sitemap e Search Console.
- [ ] Política de privacidade / LGPD conforme coleta futura de dados.
- [ ] Considerar páginas próprias para catarata, refrativa e córnea, se aprovadas.
- [ ] Validar Safari/iOS e gestos em telefone real.
- [ ] Integrar eventual CMS somente se houver necessidade real de editar conteúdo frequentemente.

## Critérios de aceite P0
- Sem rolagem horizontal em viewport de 320 e 360 px.
- Nome, especialidade, CRM e RQE presentes e legíveis.
- Fotografia principal sem sobreposição do CTA flutuante na primeira apresentação.
- Fluxo de agendamento pelo WhatsApp com texto predefinido e link externo válido.
- Menu acessível e fechado após a navegação; tabs e pesquisa funcionais.
- Fallback de texto para convênios caso o ícone remoto não apareça.
- Site abre sem npm, com `index.html` na raiz do projeto.
