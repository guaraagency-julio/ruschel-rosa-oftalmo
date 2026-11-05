# Dr. Guilherme Ruschel Rosa — Oftalmologia

Prévia institucional responsiva desenvolvida pela **Guará Agency** para apresentação comercial ao Dr. Guilherme Ruschel Rosa.

## Estado do projeto
- **Código publicado no GitHub:** `guaraagency-julio/ruschel-rosa-oftalmo`, branch `main`.
- **Hospedagem Cloudflare Pages:** configuração pendente.
- **Revisão médica, publicidade e direitos de imagem:** pendentes de aprovação.
- **Logos dos convênios:** representações tipográficas provisórias; substituir por arquivos oficiais autorizados antes do lançamento definitivo.

## Visualizar localmente
O projeto é estático (HTML, CSS e JavaScript), sem dependências de instalação.

Abra `index.html` em um navegador ou execute:
```bash
python -m http.server 8000
```
E acesse `http://localhost:8000`.

## Publicar no Cloudflare Pages
1. Abra o painel Cloudflare e escolha **Workers & Pages → Create → Pages → Connect to Git**.
2. Autorize a integração com o GitHub, se necessário, e selecione `guaraagency-julio/ruschel-rosa-oftalmo`.
3. Configure **Production branch**: `main`.
4. Escolha **Framework preset**: `None`; deixe **Build command** vazio e escolha **Build output directory**: `/` ou `.`, conforme o formulário.
5. Inicie o deploy e teste o domínio `*.pages.dev` no celular. Confira o menu, os botões WhatsApp, as fotografias, as abas de especialidades e a busca de convênios.

## Estrutura
- `index.html` — conteúdo, metadados, semântica e dados estruturados
- `styles.css` — identidade visual, layout responsivo e movimento
- `script.js` — navegação, galeria, abas e pesquisa de convênios
- `assets/` — fotografias otimizadas e elementos gráficos
- `docs/` — PRODUCT.md, DESIGN.md, prompt mestre e plano de execução
- `robots.txt` e `_headers` — proteção provisória contra indexação; remover quando aprovado

## Conteúdo e conformidade
- Os dados profissionais foram extraídos das informações e fontes públicas fornecidas durante o briefing.
- A marca foi isolada de material de referência; solicitar versão vetorial oficial para a publicação final.
- O uso público das fotos precisa de autorização do profissional e dos demais retratados.
- A relação de convênios deve ser confirmada com a clínica; exibição de um convênio não assegura cobertura.
- O CEP foi omitido devido a divergências entre as fontes.
- Verificar conformidade com a Resolução CFM 2.336/2023 e manual oficial de publicidade médica antes da publicação institucional.
- Os links de contato direcionam a serviços externos; o site não hospeda formulário de dados pessoais.

Fontes: [Centro Clínico Regina](https://www.centroclinicoregina.com.br/medico/guilherme-ruschel-rosa), [SOMEHR](https://www.somehr.com.br/corpo-clinico/355), [Publicidade Médica — CFM](https://publicidademedica.cfm.org.br/).
