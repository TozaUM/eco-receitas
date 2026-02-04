# Brainstorming de Design - EcoReceitas

## Visão Geral
O site deve comunicar sustentabilidade, criatividade culinária e conscientização ambiental de forma envolvente e inspiradora. Abaixo estão três abordagens de design distintas.

---

<response>
<text>

## Abordagem 1: Minimalismo Orgânico com Tipografia Assertiva
**Design Movement:** Organic Minimalism + Contemporary Sustainability Design

**Core Principles:**
- Simplicidade radical: apenas elementos essenciais, muito espaço em branco
- Tipografia como protagonista: fontes grandes, bold e legíveis
- Paleta reduzida: 3-4 cores principais, tons naturais
- Fluidez visual: formas orgânicas, sem ângulos retos

**Color Philosophy:**
- Fundo: Branco puro (#FFFFFF) ou off-white (#F8F8F6)
- Primária: Verde floresta profundo (#2D5016) - confiança e natureza
- Secundária: Laranja quente (#E8743B) - energia e ação
- Acentos: Bege natural (#D4C5B9) - terra e sustentabilidade
- Rationale: Cores naturais que evocam confiança ambiental sem parecer "corporativo"

**Layout Paradigm:**
- Seções em blocos verticais com transições suaves
- Imagens grandes (full-width) intercaladas com texto
- Tipografia em escala: títulos gigantes (4-5rem), corpo legível (1.1rem)
- Muito ar negativo entre seções

**Signature Elements:**
1. Formas orgânicas/blob shapes em backgrounds
2. Ícones hand-drawn minimalistas (não flat design genérico)
3. Linhas decorativas que sugerem crescimento/ciclos

**Interaction Philosophy:**
- Transições suaves ao scroll (fade-in, slide-up)
- Hover effects sutis: mudança de cor, leve elevação
- Micro-animações que não distraem

**Animation:**
- Scroll reveal: elementos aparecem com fade-in + slight translate-up
- Hover states: cor muda suavemente (0.3s ease), ícones ganham movimento sutil
- Loader/skeleton: linhas que "crescem" organicamente

**Typography System:**
- Display: Playfair Display (serif, bold) para títulos principais
- Body: Inter (sans-serif, regular 400/500) para conteúdo
- Hierarchy: 3.5rem (h1) → 2.5rem (h2) → 1.5rem (h3) → 1rem (body)

</text>
<probability>0.07</probability>
</response>

<response>
<text>

## Abordagem 2: Ilustração Narrativa com Cores Vibrantes
**Design Movement:** Illustrated Storytelling + Playful Sustainability

**Core Principles:**
- Ilustrações custom como linguagem visual principal
- Narrativa visual: cada seção conta uma história
- Cores vibrantes mas harmônicas (não caótico)
- Personificação: elementos ganham "personalidade"

**Color Philosophy:**
- Fundo: Cream suave (#FEF9F3)
- Primária: Verde vivo (#6BA547) - crescimento e vida
- Secundária: Amarelo quente (#F4D35E) - esperança e energia
- Terciária: Roxo suave (#9D7E8F) - criatividade
- Acentos: Coral (#F08080) - ação e entusiasmo
- Rationale: Paleta inspirada em jardins sustentáveis, alegre mas não infantil

**Layout Paradigm:**
- Seções com ilustrações grandes (left/right alternado)
- Texto envolvido ao redor de ilustrações
- Cards com sombras suaves para receitas
- Padrões decorativos sutis entre seções

**Signature Elements:**
1. Ilustrações hand-drawn de frutas/vegetais com "expressões"
2. Padrões geométricos suaves (folhas, ciclos)
3. Badges/stickers para categorias de receitas

**Interaction Philosophy:**
- Ilustrações reagem ao hover (mudança de cor, expressão)
- Cards de receita expandem ao clicar
- Parallax leve nas ilustrações ao scroll

**Animation:**
- Ilustrações ganham cor ao entrar em viewport (color-fill animation)
- Cards bounce suavemente ao hover
- Transições entre seções com fade + scale

**Typography System:**
- Display: Fredoka (rounded sans-serif, bold) para títulos - amigável mas profissional
- Body: Poppins (geometric sans-serif, regular) para conteúdo
- Hierarchy: 4rem (h1) → 2.8rem (h2) → 1.8rem (h3) → 1rem (body)

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Abordagem 3: Data-Driven Sustainability com Infografia Moderna
**Design Movement:** Information Design + Eco-Conscious Modernism

**Core Principles:**
- Dados visuais como protagonista (infográficos, gráficos)
- Hierarquia clara: informação > estética
- Design modular: componentes reutilizáveis
- Transparência: mostrar impacto ambiental em números

**Color Philosophy:**
- Fundo: Cinza muito claro (#F5F5F5)
- Primária: Azul sustentável (#1B7BA8) - confiança e profissionalismo
- Secundária: Verde eco (#52B788) - sustentabilidade
- Terciária: Laranja (#FF8C42) - ação e urgência
- Acentos: Cinza escuro (#2D3436) - texto
- Rationale: Paleta que inspira confiança e urgência ambiental

**Layout Paradigm:**
- Grid 12-colunas rigoroso
- Seções com infográficos lado-a-lado com texto
- Cards de receita em grid 3-colunas (desktop)
- Barras de progresso para ODS 12.3 (% redução de desperdício)

**Signature Elements:**
1. Infográficos circulares (ciclo de vida do alimento)
2. Ícones geométricos com stroke (não filled)
3. Gráficos de impacto (CO2 economizado, água poupada)

**Interaction Philosophy:**
- Hover em infográficos revela dados detalhados
- Filtros interativos para receitas (por tipo de ingrediente)
- Contadores que animam ao entrar em viewport

**Animation:**
- Contadores de impacto animam de 0 até o valor final
- Gráficos desenham-se ao entrar em viewport (stroke animation)
- Transições entre filtros com fade rápido (0.2s)

**Typography System:**
- Display: IBM Plex Sans (geometric, bold) para títulos - corporativo mas moderno
- Body: IBM Plex Sans (geometric, regular) para conteúdo - consistência
- Hierarchy: 3.8rem (h1) → 2.6rem (h2) → 1.6rem (h3) → 1rem (body)

</text>
<probability>0.06</probability>
</response>

---

## Decisão Final: Abordagem Escolhida

**Escolhida: Abordagem 2 - Ilustração Narrativa com Cores Vibrantes**

Esta abordagem foi selecionada porque:
1. **Engajamento:** Ilustrações custom tornam o conteúdo mais memorável e compartilhável
2. **Acessibilidade:** Cores vibrantes mas harmônicas funcionam bem para diversos tipos de visão
3. **Narrativa:** Cada seção conta uma história, tornando o aprendizado sobre sustentabilidade mais envolvente
4. **Diferenciação:** Ilustrações hand-drawn distinguem o site de outros recursos genéricos sobre sustentabilidade
5. **Escalabilidade:** O sistema de cores e tipografia é flexível para futuras expansões

### Detalhes de Implementação:
- **Tipografia:** Fredoka (títulos) + Poppins (corpo) - amigável mas profissional
- **Cores:** Verde vivo, amarelo quente, roxo suave, coral - paleta alegre e inspiradora
- **Ilustrações:** Já geradas com estilo flat/ilustrado, personificadas e expressivas
- **Layout:** Seções alternadas com ilustrações, muito espaço em branco, cards com sombras suaves
- **Animações:** Ilustrações ganham cor ao entrar em viewport, cards expandem ao hover, transições suaves

