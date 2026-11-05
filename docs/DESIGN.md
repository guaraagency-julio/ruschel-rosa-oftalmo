# DESIGN — Sistema visual do projeto

## Direção
O universo visual parte da identidade original do médico: símbolo de olho derivado das iniciais G/R, azul-marinho e dourado. Linguagem editorial clínica, com composição fotográfica de alto impacto, luz natural, respiro, blocos tipográficos amplos e mobiliário gráfico contido.

## Paleta de tokens
| Token | Hex | Uso |
|---|---|---|
| `--navy` | `#102034` | header, hero, bloco de marca |
| `--navy-2` | `#172b40` | painéis de tratamentos |
| `--gold` | `#bd9669` | assinatura premium, CTAs |
| `--gold-light` | `#e0c19b` | destaques sobre fundo escuro |
| `--cream` | `#f5f2ed` | planos neutros |
| `--paper` | `#fcfaf7` | planos claros |
| `--ink` | `#182a3b` | texto principal |
| `--muted` | `#646e76` | texto secundário |

São cores aproximadas da referência enviada e refináveis a partir do arquivo original da identidade caso seja fornecido.

## Tipografia
- Títulos: Georgia, com contraste de estilo romano e itálico, como contraponto editorial à marca original.
- Corpo e UI: DM Sans / system fallback.
- Microtipografia: caixa alta com tracking positivo para seções e metadados.
- Alinhamento e respiro: títulos 40–90 px fluidos; largura de leitura com separações claras; nunca quebrar letras ou truncar textos-chave.

## Composição
- Desktop: hero 52/48, conteúdo e retrato, navegação horizontal, grids de duas a cinco colunas.
- Samsung S23 (360 px CSS): navegação drawer, hero textual seguido de retrato, sections empilhadas, tabela de formação em duas colunas, convênios em 2 colunas, galeria horizontal touch.
- CTA móvel permanece oculto durante o hero e aparece nas seções seguintes, sem cobrir o rosto no retrato principal.
- Marca preservada por recorte transparente do material original; sem recriação artística da identidade.

## Motion
- Momento central: revelação fotográfica da primeira dobra.
- Estados: tabs de especialidade, painel de menu, galeria, busca de convênios, FAQ nativa.
- Movimento contínuo limitado à faixa de nomes de convênios (pausável em hover); em reduced motion o movimento é desligado.
- Não esconder conteúdo se JS falhar.

## Conteúdo por seção
01 Início e agendamento; 02 credenciais; 03 sobre e formação; 04 áreas de atuação; 05 processo da consulta; 06 galeria; 07 convênios com filtro; 08 FAQ; 09 localização; 10 chamada final; 11 rodapé com CRM/RQE.

## Acessibilidade
- `lang="pt-BR"`, landmarks semânticos, texto alternativo, links discerníveis, focus-visible, tabs com ARIA e setas do teclado, menu com `aria-expanded`, `inert` e Escape, cards com texto legível, reduced motion.
- Alvos touch >= 44 px para ícones de menu e galeria; CTA persistente >= 52 px.
