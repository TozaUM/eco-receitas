# EcoReceitas - Sustentabilidade no Prato 🌱

Uma plataforma web interativa dedicada à conscientização sobre desperdício de alimentos e à promoção de receitas criativas que aproveitam cascas, talos e folhas de frutas e vegetais.

## 🎯 Objetivo

O EcoReceitas foi desenvolvido para apoiar a **Meta 12.3 dos Objetivos de Desenvolvimento Sustentável (ODS) da ONU**, que propõe: "Até 2030, reduzir pela metade o desperdício de alimentos per capita mundial, nos níveis de varejo e do consumidor, e reduzir as perdas de alimentos ao longo das cadeias de produção e abastecimento."

## ✨ Características

### Receitas Sustentáveis
- **6 receitas iniciais** que transformam cascas e talos em pratos deliciosos
- Categorias: Cascas de Frutas, Talos de Vegetais, Folhas, Sementes
- Informações detalhadas: tempo de preparo, dificuldade, número de porções
- Instruções passo a passo e lista de ingredientes

### Educação sobre ODS 12.3
- Explicação clara da Meta 12.3 da ONU
- Estatísticas sobre desperdício global de alimentos
- Impacto ambiental e social do reaproveitamento

### Design Moderno e Interativo
- Interface responsiva (mobile, tablet, desktop)
- Animações suaves e transições elegantes
- Filtros interativos de receitas
- Navegação intuitiva com âncoras

### Paleta de Cores Sustentável
- Verde vivo (#6BA547) - crescimento e vida
- Amarelo quente (#F4D35E) - esperança e energia
- Roxo suave (#9D7E8F) - criatividade
- Coral (#F08080) - ação e entusiasmo

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework frontend
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária
- **Vite** - Build tool e dev server
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **Wouter** - Roteamento client-side

## 📁 Estrutura do Projeto

```
eco-receitas/
├── client/
│   ├── public/                 # Arquivos estáticos
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx       # Página principal com todas as seções
│   │   │   └── NotFound.tsx   # Página 404
│   │   ├── components/         # Componentes reutilizáveis
│   │   ├── contexts/           # React contexts
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utilitários
│   │   ├── App.tsx             # Componente raiz
│   │   ├── main.tsx            # Ponto de entrada
│   │   ├── index.css           # Estilos globais
│   │   └── animations.css      # Animações customizadas
│   └── index.html              # HTML principal
├── server/                      # Placeholder (não usado em static)
├── shared/                      # Tipos compartilhados
├── package.json                # Dependências
├── README.md                   # Este arquivo
├── DEPLOY_GUIDE.md            # Guia de deploy
└── ideas.md                   # Brainstorming de design
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Setup Local

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/eco-receitas.git
cd eco-receitas

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:3000
```

### Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento

# Build
pnpm build            # Cria build para produção

# Preview
pnpm preview          # Visualiza build de produção localmente

# Type checking
pnpm check            # Verifica tipos TypeScript

# Formatação
pnpm format           # Formata código com Prettier
```

## 📝 Seções do Site

### 1. Hero Section
Apresentação principal com call-to-action para explorar receitas e aprender sobre sustentabilidade.

### 2. Cascas de Frutas
Educação sobre o reaproveitamento de cascas de banana, maçã, pera e laranja com exemplos de uso.

### 3. Talos de Vegetais
Informações sobre como aproveitar talos de couve, brócolis, espinafre e outros vegetais.

### 4. Receitas Sustentáveis
Grid interativo com 6 receitas iniciais, filtráveis por categoria. Cada receita pode ser expandida para ver ingredientes e modo de preparo.

### 5. Meta 12.3 dos ODS
Explicação detalhada da meta da ONU com contexto e estatísticas globais.

### 6. Impacto Global
Estatísticas sobre desperdício de alimentos e metas de sustentabilidade.

### 7. Call-to-Action
Seção final incentivando o usuário a começar a usar as receitas.

### 8. Footer
Informações sobre o projeto, links rápidos e créditos.

## 🎨 Customização

### Adicionar Novas Receitas

Edite o arquivo `client/src/pages/Home.tsx` e adicione novos objetos ao array `recipes`:

```typescript
{
  id: 7,
  title: 'Sua Receita',
  description: 'Descrição da receita',
  ingredients: ['Ingrediente 1', 'Ingrediente 2'],
  instructions: ['Passo 1', 'Passo 2'],
  category: 'cascas',
  difficulty: 'fácil',
  prepTime: '20 min',
  servings: '2 porções'
}
```

### Modificar Cores

Edite o arquivo `client/src/index.css` e altere as variáveis CSS no `:root`:

```css
:root {
  --primary: #6BA547;        /* Verde vivo */
  --secondary: #F4D35E;      /* Amarelo quente */
  --accent: #F08080;         /* Coral */
}
```

### Adicionar Imagens

As imagens já estão hospedadas em CDN. Para adicionar novas:

1. Prepare a imagem em alta qualidade
2. Obtenha a URL do CDN
3. Adicione ao componente com a URL completa

## 🚀 Deploy

Para fazer deploy no Vercel ou GitHub Pages, consulte o arquivo [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md).

### Deploy Rápido no Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel
```

## 📊 Estatísticas do Projeto

- **Single Page Application (SPA)** - Toda a navegação é client-side
- **6 Receitas** iniciais, facilmente expansível
- **4 Categorias** de reaproveitamento
- **Responsivo** - Funciona em todos os dispositivos
- **Acessível** - Segue padrões WCAG
- **Otimizado** - Imagens comprimidas, código minificado

## 🌍 Impacto Social

Ao usar o EcoReceitas, você contribui para:

- **Redução de desperdício** de alimentos em casa
- **Conscientização** sobre sustentabilidade
- **Economia** ao aproveitar alimentos integralmente
- **Saúde** ao consumir alimentos mais nutritivos
- **Planeta** ao reduzir emissões de gases de efeito estufa

## 📚 Referências

- [ODS 12 - Consumo e Produção Sustentáveis](https://www.un.org/sustainabledevelopment/sustainable-consumption-production/)
- [Meta 12.3 da ONU](https://champions123.org/target-123)
- [Aproveitamento Integral de Alimentos](https://www.fao.org/food-loss-and-food-waste/en)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com 🌱 para um planeta mais sustentável.

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório GitHub.

---

**Transforme cascas e talos em delícias sustentáveis! 🥗🍌🥦**
