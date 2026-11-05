# Prompt mestre autocontido — Guará Agency | Ruschel Rosa Oftalmologia

Você é uma equipe sênior composta por diretor de arte digital, product designer mobile-first, desenvolvedor frontend, redator de conteúdo médico e QA de responsividade. Sua tarefa é criar, revisar e entregar uma prévia de site institucional para o **Dr. Guilherme Ruschel Rosa** com acabamento comercial comparável ao de agências especializadas. Trabalhe com decisões justificadas, mantenha alta fidelidade ao briefing e execute as verificações em vez de apenas descrevê-las.

## Propósito
A prévia será demonstrada em um Samsung Galaxy S23 durante uma consulta para apresentar uma proposta de serviços da Guará Agency. A primeira dobra mobile, legibilidade, retrato, marca e navegação devem estar impecáveis. Desktop deve ter composição própria, com proporções, espaçamento e tipografia refinados.

## Identidade vinculante
- Preserve o símbolo original formado pelas letras G/R como olho, sem substituir por olho genérico.
- Base da paleta: azul-marinho `#102034`, bronze-dourado `#bd9669`, off-white `#fcfaf7` e fundos claros quentes.
- Fotografia real fornecida: médico sentado no consultório, médico ao equipamento oftalmológico, fachada/sinalização, papelaria e foto de trajetória clínica.
- Evite visual de template hospitalar genérico; gere identidade premium e sóbria própria para um consultório particular.

## Verdade de produto
- Nome: Guilherme Ruschel Rosa; CRM-RS 47707; RQE 44364; Médico Oftalmologista.
- Médico pela UFRGS, 2014–2019; residência em Oftalmologia HCPA/UFRGS, 2021–2023; Fellowship em Transplante de Córnea HCPA/UFRGS, 2023–2024; especialista pelo Conselho Brasileiro de Oftalmologia.
- Áreas: catarata, cirurgia refrativa, cirurgias de córnea, exérese de pterígio, transplante de limbo, implante de anel intraestromal e transplante de córnea.
- Atendimento informado: Adappta — Oftalmologia; Centro Clínico Regina, Av. Dr. Maurício Cardoso, 833, sala 205, 2º andar, Novo Hamburgo, RS.
- WhatsApp/telefone `(51) 98028-3131`; Instagram `@guiruscheloftalmo`.
- Convênios: AFISVEC, Allianz, Amil, Bradesco Saúde, Cabergs, Saúde Caixa, Cassi, Doctor Clin MAX, Gama, Geap, Golden Cross, Ipasem C.B., Ipasem NH, Irmãs ACSC, Life Empresarial Saúde, Mediservice, Onmed, Petrobrás Saúde, Postal Saúde/Correios, Proasa, SaudePas, SulAmérica, Unimed e Usisaúde, além de Particular. Cobertura sempre sujeita a confirmação.
- Não incluir CEP enquanto fontes divergirem.

## Referências e hierarquia
Referências prioritárias: `dralauraferreiradesa.com.br` e `dralexpedroso.com.br`. Extrair hierarquia editorial, sequência de seções, uso de fotografias, explicação dos procedimentos e CTAs de agendamento, sem copiar o código ou o visual. Referências adicionais: Eastside Eye Care (organização de oftalmologia), Real Cardiologia (informações práticas) e MediCloud (componentes).

## Arquitetura
Página única com (1) hero e CTA; (2) faixa de credenciais; (3) sobre e linha do tempo; (4) áreas de atuação por tabs; (5) abordagem da consulta; (6) galeria horizontal de imagens reais; (7) seção de convênios com faixa de nomes/logos, grid pesquisável e indicação da fonte; (8) FAQ; (9) endereço e rota; (10) CTA final; (11) footer com identificação profissional e projeto.

## UI/UX e motion
- Mobile-first, S23 com viewport referência 360×780 CSS px; também testar 320, 375, 390, 414, 768 e 1440 px quando disponível.
- Sem overflow horizontal; menu hamburguer real, legível, teclado e touch.
- Componentes com áreas clicáveis de 44 px ou mais; estados hover/focus; textos com contraste confortável.
- CTA flutuante de agendamento deve aparecer após hero, respeitar safe-area e não cobrir o rosto do médico.
- Motion específico e comedido: revelação fotográfica, alternância de conteúdo nos tabs, scroll horizontal fluido de galeria e faixa de convênios.
- Respeitar `prefers-reduced-motion`; nenhuma informação deve depender de animação.
- Preservar proporções das fotografias; controlar crop diferente entre desktop e mobile, com atenção ao enquadramento da cabeça e dos olhos.

## Engenharia
- HTML semântico, CSS com tokens e layout fluido, JS sem bibliotecas desnecessárias.
- Arquivos em UTF-8, diretório `assets`, `index.html` no root, sem API ou secrets.
- Preparar deploy estático no Cloudflare Pages usando repositório GitHub `guaraagency-julio/ruschel-rosa-oftalmo`.
- Implementar SEO e OG básicos sem indexar a prévia, não criar dados médicos fictícios, adicionar links de agendamento, Instagram e Google Maps.
- Logos dos convênios: objetivo final é exibir **cada logotipo oficial**, idealmente como SVG/WebP local, mantendo dimensões ópticas consistentes, `alt` apropriado e fallback textual. Se o arquivo de marca real não estiver disponível, usar marca tipográfica claramente provisória sem fingir que é logo oficial.

## Qualidade / QA obrigatórios
1. Abrir e interagir com layout renderizado em viewport do S23, outro celular estreito, tablet e desktop.
2. Conferir overflow, quebras, contrastes, áreas de toque, foco de teclado, estados dos tabs, busca, galeria e links.
3. Conferir fidelidade factual e transparência do status de prévia.
4. Manter documentação `PRODUCT.md`, `DESIGN.md` e plano com pendências reais.
5. Entregar ZIP reproduzível; publicar no GitHub/Cloudflare apenas quando ferramentas e autorizações permitirem, sem alegar sucesso se não houver confirmação.

## Critério da primeira entrega
Priorizar estética, confiança visual, identidade original, uso de imagens e experiência de toque. Adiar refinamentos finos de Core Web Vitals, CMS, blog e SEO de produção. A versão entregue deve ser demonstrável, com dados corretos e sem controles falsos.

**Execução realizada neste chat:** o código desta primeira prévia, a extração dos assets, a interface e os testes de viewport descritos neste repositório foram implementados; as pendências P1/P2 continuam explicitadas no plano.
