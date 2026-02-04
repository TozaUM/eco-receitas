import { useState, useEffect } from 'react';
import { ChevronDown, Leaf, Droplet, Wind, Heart } from 'lucide-react';

/**
 * Design: Illustrated Storytelling + Playful Sustainability
 * 
 * Tipografia: Fredoka (títulos) + Poppins (corpo)
 * Cores: Verde vivo (#6BA547), Amarelo (#F4D35E), Roxo (#9D7E8F), Coral (#F08080)
 * Layout: Seções alternadas com ilustrações, muito espaço em branco, cards com sombras
 * Animações: Fade-in ao scroll, hover effects, transições suaves
 */

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: 'cascas' | 'talos' | 'folhas' | 'sementes';
  difficulty: 'fácil' | 'médio' | 'difícil';
  prepTime: string;
  servings: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Brigadeiro de Casca de Banana',
    description: 'Um doce delicioso e sustentável que aproveita as cascas de banana para criar um brigadeiro cremoso e irresistível.',
    ingredients: ['1 kg de casca de banana', '1 kg de açúcar', '1 colher (sopa) de caldo de limão', 'Chocolate em pó para finalizar'],
    instructions: ['Limpe bem as cascas de banana', 'Cozinhe com o açúcar até formar uma pasta', 'Deixe esfriar e enrole em bolinhas', 'Passe no chocolate em pó'],
    category: 'cascas',
    difficulty: 'fácil',
    prepTime: '30 min',
    servings: '20 unidades'
  },
  {
    id: 2,
    title: 'Caldo de Talo de Brócolis',
    description: 'Um caldo nutritivo e saboroso que aproveita os talos de brócolis, geralmente descartados, para criar uma bebida reconfortante.',
    ingredients: ['Talos de brócolis picados', '1 cebola', '2 dentes de alho', '1 litro de água', 'Sal e pimenta a gosto'],
    instructions: ['Refogue a cebola e alho', 'Adicione os talos de brócolis', 'Cubra com água e cozinhe por 20 minutos', 'Tempere e sirva quente'],
    category: 'talos',
    difficulty: 'fácil',
    prepTime: '30 min',
    servings: '4 porções'
  },
  {
    id: 3,
    title: 'Chips de Casca de Maçã',
    description: 'Snack crocante e saudável feito com cascas de maçã, perfeito para lanches entre refeições.',
    ingredients: ['Cascas de maçã', 'Azeite de oliva', 'Canela', 'Açúcar', 'Sal'],
    instructions: ['Limpe as cascas e seque bem', 'Tempere com azeite, canela, açúcar e sal', 'Asse a 180°C por 15-20 minutos', 'Deixe esfriar e aproveite'],
    category: 'cascas',
    difficulty: 'fácil',
    prepTime: '25 min',
    servings: '2 porções'
  },
  {
    id: 4,
    title: 'Refogado de Talo de Couve',
    description: 'Um acompanhamento delicioso que transforma talos de couve em um prato nutritivo e saboroso.',
    ingredients: ['Talos de couve picados', 'Cebola', 'Alho', 'Azeite', 'Sal e pimenta'],
    instructions: ['Refogue cebola e alho em azeite', 'Adicione os talos picados', 'Cozinhe até ficar macio', 'Tempere e sirva'],
    category: 'talos',
    difficulty: 'fácil',
    prepTime: '20 min',
    servings: '3 porções'
  },
  {
    id: 5,
    title: 'Sopa Verde de Folhas',
    description: 'Uma sopa nutritiva e reconfortante que aproveita folhas de cenoura, beterraba e outras hortaliças.',
    ingredients: ['Folhas de cenoura e beterraba', 'Batata', 'Cebola', 'Alho', '1 litro de caldo vegetal'],
    instructions: ['Refogue cebola e alho', 'Adicione folhas picadas e batata', 'Cubra com caldo e cozinhe 20 minutos', 'Bata e sirva'],
    category: 'folhas',
    difficulty: 'médio',
    prepTime: '35 min',
    servings: '4 porções'
  },
  {
    id: 6,
    title: 'Chá de Sementes de Melancia',
    description: 'Uma bebida refrescante e nutritiva feita com sementes de melancia, ricas em minerais e antioxidantes.',
    ingredients: ['Sementes de melancia', 'Água', 'Mel', 'Limão'],
    instructions: ['Seque as sementes ao sol', 'Ferva em água por 5 minutos', 'Coe e adicione mel e limão', 'Sirva quente ou gelado'],
    category: 'sementes',
    difficulty: 'fácil',
    prepTime: '15 min',
    servings: '2 porções'
  }
];

const stats = [
  { label: 'Toneladas de alimento desperdiçado por ano', value: '1.05 bilhões', icon: Droplet },
  { label: 'Refeições perdidas diariamente', value: '1 bilhão', icon: Heart },
  { label: 'Meta de redução até 2030', value: '50%', icon: Leaf },
  { label: 'Impacto na emissão de gases', value: 'Redução significativa', icon: Wind }
];

export default function Home() {
  const [expandedRecipe, setExpandedRecipe] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'cascas' | 'talos' | 'folhas' | 'sementes'>('todos');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredRecipes = selectedCategory === 'todos' 
    ? recipes 
    : recipes.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">EcoReceitas</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#receitas" className="text-foreground hover:text-primary transition-colors">Receitas</a>
            <a href="#ods" className="text-foreground hover:text-primary transition-colors">ODS 12.3</a>
            <a href="#impacto" className="text-foreground hover:text-primary transition-colors">Impacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Transforme Cascas e Talos em Delícias
              </h1>
              <p className="text-lg text-foreground/80">
                Descubra receitas criativas que aproveitam cada parte do alimento, reduzindo desperdício e criando pratos incríveis. Sustentabilidade nunca foi tão saborosa.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#receitas" className="eco-button-primary inline-block">
                  Explorar Receitas
                </a>
                <a href="#ods" className="eco-button-secondary inline-block">
                  Saiba Mais
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/mZ4e5wbGQhqiaM0H0iswiG/sandbox/65pGOc1OZXXmvGDExAF5XK-img-1_1770231579000_na1fn_aGVyby1yZWFwcm92ZWl0YW1lbnRv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbVo0ZTV3YkdRaHFpYU0wSDBpc3dpRy9zYW5kYm94LzY1cEdPYzFPWlhYbXZHREV4QUY1WEstaW1nLTFfMTc3MDIzMTU3OTAwMF9uYTFmbl9hR1Z5YnkxeVpXRndjbTkyWldsMFlXMWxiblJ2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=myURELnwqFrLe14TKzuYTn1KGgmHmr-bA9WdeLQXc8nt6x88U~NTCCXiUbTQ5JZj~0ifeelhx-lmA0HuwtYq5zlSn0hGptTHGB091fGkK5rPBbPhB10rTtYVnHNko5~fXxpEwiGubwxlreM643kGLUGYVeQBgGyevdkfKy24AVHmkv3-U0Ad3pxKmlRrhU2DOY62Pe5tRtyznrg985QxF0BcnG~HfFgtcAl4Eb0om8JI3JvH62HvEoxpUu615Z~HZMp6lh5NE0rWPK8FHHxHsHnfIswBvH8QlG16qh0PBai3R1kHCkVe81fV0M0~sWhkMYIGI2fKF2qaK01gSgVsjw__"
                alt="Reaproveitamento de alimentos"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cascas e Talos Section */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/mZ4e5wbGQhqiaM0H0iswiG/sandbox/65pGOc1OZXXmvGDExAF5XK-img-2_1770231569000_na1fn_Y2FzY2FzLWZydXRhcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbVo0ZTV3YkdRaHFpYU0wSDBpc3dpRy9zYW5kYm94LzY1cEdPYzFPWlhYbXZHREV4QUY1WEstaW1nLTJfMTc3MDIzMTU2OTAwMF9uYTFmbl9ZMkZ6WTJGekxXWnlkWFJoY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZlpGtpskaVWjSY4lFkUUA9ZDYoCZ15KTLvy-8VFTtr03ZNy6IL1hno7249Yl2pzRWhkKZE2me0ZaS4uOISVvXEQ4t~ETbrLhT3o8ipSGeU5D8dsOi5~A8ekNhLOp8UBnqq9mwWLTSmqfcQUUcVCC4AlVvjwSKQsdXv1S9aerkjO0HYAescLS1kgYAFmD~29AGDPhuqWLTR1pqLh8vB5st1h5yQdUYQnljeQrpznasNtQa504IugTcies9cbK6aTUVMS0NCqpEIZOxqK2WI0hiX28U2te1FJDD4EVVA~ZBety9iVOpP8QZhbvpE1lbSXUcvp2SY6hCLG6alds6asGpw__"
                alt="Cascas de frutas"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Cascas de Frutas</h2>
              <p className="text-lg text-foreground/80">
                Bananas, maçãs, peras e laranjas têm cascas ricas em nutrientes e fibras. Em vez de descartar, transforme-as em:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl mt-1">•</span>
                  <span><strong>Brigadeiros e doces</strong> - cascas de banana ganham consistência perfeita</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl mt-1">•</span>
                  <span><strong>Chips crocantes</strong> - maçã, pera e banana viram snacks saudáveis</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl mt-1">•</span>
                  <span><strong>Chás e bebidas</strong> - casca de limão e laranja para infusões aromáticas</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl mt-1">•</span>
                  <span><strong>Compotas e geleias</strong> - aproveitamento integral com sabor intenso</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Talos de Vegetais</h2>
              <p className="text-lg text-foreground/80">
                Couve, brócolis, espinafre e cenoura têm talos e folhas comestíveis frequentemente descartados. Descubra como aproveitá-los:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl mt-1">•</span>
                  <span><strong>Caldos e sopas</strong> - talos criam bases nutritivas e saborosas</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl mt-1">•</span>
                  <span><strong>Refogados</strong> - talos de couve e brócolis ficam macios e deliciosos</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl mt-1">•</span>
                  <span><strong>Smoothies verdes</strong> - folhas de cenoura e beterraba adicionam nutrientes</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl mt-1">•</span>
                  <span><strong>Farofas crocantes</strong> - talos picados e refogados ganham textura especial</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/mZ4e5wbGQhqiaM0H0iswiG/sandbox/65pGOc1OZXXmvGDExAF5XK-img-3_1770231563000_na1fn_dGFsb3MtdmVnZXRhaXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbVo0ZTV3YkdRaHFpYU0wSDBpc3dpRy9zYW5kYm94LzY1cEdPYzFPWlhYbXZHREV4QUY1WEstaW1nLTNfMTc3MDIzMTU2MzAwMF9uYTFmbl9kR0ZzYjNNdGRtVm5aWFJoYVhNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nha4EBBaH5EuYM6kaUMz3Ly6BMArOl-1S55rpkp-HPhfeN57OAu60Mnpn~F93-3~mNSB1shguoDlwuhf6mS-eKq6wHd--V-dg1qcLx8~4Q7jpEA-wUDQvJeMoZmD3t8cQ92ytmGvqdAMGz1m56iE~SCa7naHWHSWDW3~d5WtrIB7T5RZR9kpX1USmJj48J2HsiXBZO9UvH0EhJdr~Ua-JAKgPhKM1NbSXK1liTqp9IVrFNGAy935AZJjlEoeXjID3y6~t0R~XCxYFWOb2jNe4zzlUlmeYt3ohPBef86uKMIdwBZD~7Tt1Svqe97Mhxwh9rnvrWwPNFr2BKNdGDIjRw__"
                alt="Talos de vegetais"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Receitas Section */}
      <section id="receitas" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Receitas Sustentáveis</h2>
          <p className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Explore nossas receitas criativas que transformam cascas, talos e folhas em pratos deliciosos e nutritivos.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {(['todos', 'cascas', 'talos', 'folhas', 'sementes'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Recipes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="eco-card cursor-pointer group"
                onClick={() => setExpandedRecipe(expandedRecipe === recipe.id ? null : recipe.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors flex-1">
                    {recipe.title}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${
                      expandedRecipe === recipe.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <p className="text-sm text-foreground/70 mb-4">{recipe.description}</p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full">
                    {recipe.prepTime}
                  </span>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {recipe.difficulty}
                  </span>
                  <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                    {recipe.servings}
                  </span>
                </div>

                {expandedRecipe === recipe.id && (
                  <div className="mt-6 pt-6 border-t border-border space-y-4 animate-fade-in">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Ingredientes:</h4>
                      <ul className="text-sm space-y-1">
                        {recipe.ingredients.map((ing, idx) => (
                          <li key={idx} className="text-foreground/80">• {ing}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Modo de Preparo:</h4>
                      <ol className="text-sm space-y-1">
                        {recipe.instructions.map((inst, idx) => (
                          <li key={idx} className="text-foreground/80">{idx + 1}. {inst}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ODS 12.3 Section */}
      <section id="ods" className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Meta 12.3 dos ODS</h2>
              <p className="text-lg text-foreground/80">
                <strong>Objetivo do Desenvolvimento Sustentável 12.3 da ONU:</strong> "Até 2030, reduzir pela metade o desperdício de alimentos per capita mundial, nos níveis de varejo e do consumidor, e reduzir as perdas de alimentos ao longo das cadeias de produção e abastecimento, incluindo as perdas pós-colheita."
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-primary">
                  <h4 className="font-bold text-primary mb-2">Por que isso importa?</h4>
                  <p className="text-sm text-foreground/80">
                    Aproximadamente 1,05 bilhão de toneladas de alimento são desperdiçadas anualmente no mundo, enquanto 735 milhões de pessoas sofrem de fome. O desperdício de alimentos também contribui significativamente para as mudanças climáticas.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-accent">
                  <h4 className="font-bold text-accent mb-2">Como você pode contribuir?</h4>
                  <p className="text-sm text-foreground/80">
                    Ao aproveitar cascas, talos e folhas em suas receitas, você reduz desperdício, economiza dinheiro e cria pratos deliciosos. Cada pequena ação conta!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/mZ4e5wbGQhqiaM0H0iswiG/sandbox/65pGOc1OZXXmvGDExAF5XK-img-5_1770231563000_na1fn_b2RzLTEyLXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbVo0ZTV3YkdRaHFpYU0wSDBpc3dpRy9zYW5kYm94LzY1cEdPYzFPWlhYbXZHREV4QUY1WEstaW1nLTVfMTc3MDIzMTU2MzAwMF9uYTFmbl9iMlJ6TFRFeUxYWnBjM1ZoYkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jrmaHhftNIKQ8WyBuWn7Ufj6jGxF122MOZbF~0uYmJhuYgD9oQXvwL9cfESANLo68mukM2O2psEllrZGtskPSmlM6u1ghq0cycrs72m0jtb8NPa-H2ADQmmcRL2nxGroSWogLoAjX9smsvXGNpa3YLEwO6Kkb0HekSTcqxGkeQeG2i4cx-DkxAH7aIEJmBaPvNfDvR4EPZy8fyEXefb2sD7WP2s5GGCKiY0QElc~OZYqX-NDs4fk9w1wUWmFD5xoZ~5ymziLSkC~V0abKC4n6mAU7n-tPdt29IMFawES2oy1GglHE4YGmBWKaCHF4sQUPJXmxOb6YkWdu7eiN7JkKA__"
                alt="ODS 12.3"
                className="w-full max-w-md h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section id="impacto" className="py-16 md:py-24 bg-white/50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">Impacto Global</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="eco-card text-center">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-accent text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Comece Agora!</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Escolha uma receita, reúna seus ingredientes e transforme o que seria desperdício em algo delicioso. Cada prato é um passo em direção a um planeta mais sustentável.
          </p>
          <a href="#receitas" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
            Explorar Receitas
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white/80 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-white">EcoReceitas</h3>
              </div>
              <p className="text-sm">Transformando desperdício em delícias sustentáveis.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#receitas" className="hover:text-primary transition-colors">Receitas</a></li>
                <li><a href="#ods" className="hover:text-primary transition-colors">ODS 12.3</a></li>
                <li><a href="#impacto" className="hover:text-primary transition-colors">Impacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Sobre</h4>
              <p className="text-sm">
                EcoReceitas é uma plataforma dedicada à conscientização sobre desperdício de alimentos e à promoção de práticas sustentáveis na cozinha.
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm">
            <p>&copy; 2026 EcoReceitas. Todos os direitos reservados. Desenvolvido com 🌱 para um planeta melhor.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
