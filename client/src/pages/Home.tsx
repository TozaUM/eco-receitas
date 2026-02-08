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
  },
  {
    id: 7,
    title: 'Geleia de Casca de Laranja',
    description: 'Uma geleia caseira deliciosa feita com cascas de laranja, perfeita para acompanhar pães e bolos.',
    ingredients: ['Cascas de laranja', 'Açúcar', 'Água', 'Suco de limão'],
    instructions: ['Corte as cascas em tiras finas', 'Cozinhe com água por 10 minutos', 'Adicione açúcar e suco de limão', 'Cozinhe até engrossar', 'Coloque em potes esterilizados'],
    category: 'cascas',
    difficulty: 'médio',
    prepTime: '45 min',
    servings: '6 potes'
  },
  {
    id: 8,
    title: 'Caldo de Talo de Cenoura',
    description: 'Um caldo nutritivo que aproveita os talos de cenoura, rico em vitaminas e minerais.',
    ingredients: ['Talos de cenoura', 'Cebola', 'Alho', 'Gengibre', '1 litro de água', 'Sal e pimenta'],
    instructions: ['Refogue cebola, alho e gengibre', 'Adicione talos de cenoura picados', 'Cubra com água e cozinhe 25 minutos', 'Coe e tempere', 'Sirva quente'],
    category: 'talos',
    difficulty: 'fácil',
    prepTime: '30 min',
    servings: '4 porções'
  },
  {
    id: 9,
    title: 'Pesto de Folhas de Beterraba',
    description: 'Um pesto vibrante e nutritivo feito com folhas de beterraba, perfeito para massas e saladas.',
    ingredients: ['Folhas de beterraba', 'Alho', 'Nozes', 'Queijo parmesão', 'Azeite', 'Sal'],
    instructions: ['Bata folhas de beterraba com alho', 'Adicione nozes e queijo', 'Despeje azeite gradualmente', 'Tempere com sal', 'Use em massas ou saladas'],
    category: 'folhas',
    difficulty: 'fácil',
    prepTime: '10 min',
    servings: '4 porções'
  },
  {
    id: 10,
    title: 'Farinha de Sementes de Abóbora',
    description: 'Uma farinha nutritiva e versátil feita com sementes de abóbora, ótima para bolos e pães.',
    ingredients: ['Sementes de abóbora', 'Sal'],
    instructions: ['Lave e seque bem as sementes', 'Asse a 150°C por 20 minutos', 'Deixe esfriar completamente', 'Triture em processador', 'Armazene em pote fechado'],
    category: 'sementes',
    difficulty: 'fácil',
    prepTime: '30 min',
    servings: '2 xícaras'
  },
  {
    id: 11,
    title: 'Chips de Casca de Pera',
    description: 'Snack crocante e adocicado feito com cascas de pera, uma alternativa saudável a doces.',
    ingredients: ['Cascas de pera', 'Azeite', 'Canela', 'Açúcar mascavo', 'Sal'],
    instructions: ['Limpe e seque as cascas', 'Tempere com azeite, canela e açúcar', 'Asse a 180°C por 20 minutos', 'Deixe esfriar até ficar crocante'],
    category: 'cascas',
    difficulty: 'fácil',
    prepTime: '30 min',
    servings: '3 porções'
  },
  {
    id: 12,
    title: 'Caldo de Talo de Espinafre',
    description: 'Um caldo reconfortante que aproveita os talos de espinafre, rico em ferro e nutrientes.',
    ingredients: ['Talos de espinafre', 'Batata', 'Cebola', 'Alho', '1 litro de caldo vegetal', 'Noz-moscada'],
    instructions: ['Refogue cebola e alho', 'Adicione talos e batata picados', 'Cubra com caldo e cozinhe 20 minutos', 'Bata até ficar cremoso', 'Tempere com noz-moscada'],
    category: 'talos',
    difficulty: 'médio',
    prepTime: '35 min',
    servings: '4 porções'
  },
  {
    id: 13,
    title: 'Chá de Folhas de Morango',
    description: 'Uma bebida aromática e antioxidante feita com folhas de morango, frequentemente descartadas.',
    ingredients: ['Folhas de morango', 'Água', 'Mel', 'Limão'],
    instructions: ['Lave bem as folhas', 'Ferva água e adicione as folhas', 'Deixe em infusão por 5 minutos', 'Coe e adicione mel e limão', 'Sirva quente ou gelado'],
    category: 'folhas',
    difficulty: 'fácil',
    prepTime: '10 min',
    servings: '2 porções'
  },
  {
    id: 14,
    title: 'Granola com Sementes de Melão',
    description: 'Uma granola crocante e nutritiva que incorpora sementes de melão secas e torradas.',
    ingredients: ['Aveia', 'Sementes de melão', 'Mel', 'Azeite', 'Canela', 'Sal'],
    instructions: ['Misture aveia, sementes e especiarias', 'Adicione mel e azeite', 'Espalhe em assadeira', 'Asse a 160°C por 25 minutos', 'Deixe esfriar e armazene'],
    category: 'sementes',
    difficulty: 'fácil',
    prepTime: '35 min',
    servings: '8 porções'
  },
  {
    id: 15,
    title: 'Sopa Cremosa de Talo de Brócolis',
    description: 'Uma sopa cremosa e elegante que transforma talos de brócolis em um prato sofisticado.',
    ingredients: ['Talos de brócolis', 'Batata', 'Cebola', 'Alho', 'Caldo vegetal', 'Leite de coco'],
    instructions: ['Refogue cebola e alho', 'Adicione talos e batata picados', 'Cubra com caldo e cozinhe 20 minutos', 'Bata com leite de coco', 'Tempere e sirva com croutons'],
    category: 'talos',
    difficulty: 'médio',
    prepTime: '40 min',
    servings: '4 porções'
  },
  {
    id: 16,
    title: 'Compota de Casca de Maçã',
    description: 'Uma compota doce e natural feita com cascas de maçã, perfeita para acompanhar iogurte.',
    ingredients: ['Cascas de maçã', 'Açúcar', 'Água', 'Canela', 'Cravo'],
    instructions: ['Corte as cascas em pequenos pedaços', 'Cozinhe com água e açúcar', 'Adicione canela e cravo', 'Cozinhe até engrossar', 'Coloque em potes esterilizados'],
    category: 'cascas',
    difficulty: 'médio',
    prepTime: '45 min',
    servings: '5 potes'
  },
  {
    id: 17,
    title: 'Suco de Talo de Abacaxi',
    description: 'Uma bebida refrescante e desintoxicante feita com talos de abacaxi, rico em enzimas digestivas.',
    ingredients: ['Talos de abacaxi picados', 'Água', 'Gengibre', 'Limão', 'Mel'],
    instructions: ['Pique os talos de abacaxi', 'Ferva em água com gengibre por 15 minutos', 'Coe bem', 'Adicione suco de limão e mel', 'Sirva gelado'],
    category: 'talos',
    difficulty: 'fácil',
    prepTime: '20 min',
    servings: '3 porções'
  },
  {
    id: 18,
    title: 'Biscoito de Sementes de Tomate',
    description: 'Um biscoito salgado e crocante feito com sementes de tomate, perfeito para acompanhar sopas.',
    ingredients: ['Sementes de tomate secas', 'Farinha de trigo', 'Azeite', 'Sal', 'Orégano'],
    instructions: ['Seque bem as sementes de tomate', 'Misture com farinha, azeite, sal e orégano', 'Forme biscoitos pequenos', 'Asse a 180°C por 15 minutos', 'Deixe esfriar e armazene em pote fechado'],
    category: 'sementes',
    difficulty: 'médio',
    prepTime: '40 min',
    servings: '24 biscoitos'
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
            <div className="animate-fade-in-up">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029692787/fSSDKRYABwmXhCfL.png"
                alt="Reaproveitamento de alimentos"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cascas de Frutas Section */}
      <section className="py-16 md:py-24 bg-yellow-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029692787/FdpZPUGQJZMAnlqW.png"
                alt="Cascas de frutas"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Cascas de Frutas</h2>
              <p className="text-foreground/80">
                Bananas, maçãs, peras e laranjas têm cascas ricas em nutrientes e fibras. Em vez de descartar, transforme-as em:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Brigadeiros e doces</strong> - cascas de banana ganham consistência perfeita</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Chips crocantes</strong> - maçã, pera e banana viram snacks saudáveis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Chás e bebidas</strong> - casca de limão e laranja para infusões aromáticas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Compotas e geleias</strong> - aproveitamento integral com sabor intenso</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Talos de Vegetais Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Talos de Vegetais</h2>
              <p className="text-foreground/80">
                Couve, brócolis, espinafre e cenoura têm talos e folhas comestíveis frequentemente descartados. Descubra como aproveitá-los:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Caldos e sopas</strong> - talos criam bases nutritivas e saborosas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Refogados</strong> - talos de couve e brócolis ficam macios e deliciosos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Smoothies verdes</strong> - folhas de cenoura e beterraba adicionam nutrientes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Farofas crocantes</strong> - talos picados e refogados ganham textura especial</span>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029692787/BLTzzWgDaFneYXQA.png"
                alt="Talos de vegetais"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Receitas Section */}
      <section id="receitas" className="py-16 md:py-24 bg-gradient-to-b from-background to-yellow-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Receitas Sustentáveis</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Explore nossas receitas criativas que transformam cascas, talos e folhas em pratos deliciosos e nutritivos.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {(['todos', 'cascas', 'talos', 'folhas', 'sementes'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white border-2 border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Recipes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe, idx) => (
              <div
                key={recipe.id}
                className="eco-card bg-white rounded-xl border-2 border-dashed border-primary p-6 cursor-pointer hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${idx * 50}ms` }}
                onClick={() => setExpandedRecipe(expandedRecipe === recipe.id ? null : recipe.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary flex-1">{recipe.title}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform ${expandedRecipe === recipe.id ? 'rotate-180' : ''}`}
                  />
                </div>
                <p className="text-sm text-foreground/70 mb-4">{recipe.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{recipe.prepTime}</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">{recipe.difficulty}</span>
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">{recipe.servings}</span>
                </div>

                {expandedRecipe === recipe.id && (
                  <div className="mt-4 pt-4 border-t border-primary/20 space-y-3 animate-fade-in">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Ingredientes:</h4>
                      <ul className="text-sm space-y-1">
                        {recipe.ingredients.map((ing, i) => (
                          <li key={i} className="text-foreground/80">• {ing}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Modo de Preparo:</h4>
                      <ol className="text-sm space-y-1">
                        {recipe.instructions.map((inst, i) => (
                          <li key={i} className="text-foreground/80">{i + 1}. {inst}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#receitas" className="eco-button-primary inline-block">
              Explorar Receitas
            </a>
          </div>
        </div>
      </section>

      {/* ODS 12.3 Section */}
      <section id="ods" className="py-16 md:py-24 bg-gradient-accent">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Meta 12.3 dos ODS</h2>
              <div className="bg-white/90 rounded-lg p-6 space-y-4">
                <p className="font-bold text-foreground">
                  Objetivo do Desenvolvimento Sustentável 12.3 da ONU: "Até 2030, reduzir pela metade o desperdício de alimentos per capita mundial, nos níveis de varejo e do consumidor, e reduzir as perdas de alimentos ao longo das cadeias de produção e abastecimento, incluindo as perdas pós-colheita."
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/90 rounded-lg p-4 border-l-4 border-primary">
                  <h4 className="font-bold text-primary mb-2">Por que isso importa?</h4>
                  <p className="text-sm text-foreground/80">
                    Aproximadamente 1,05 bilhão de toneladas de alimento são desperdiçadas anualmente no mundo, enquanto 735 milhões de pessoas sofrem de fome. O desperdício de alimentos também contribui significativamente para as mudanças climáticas.
                  </p>
                </div>

                <div className="bg-white/90 rounded-lg p-4 border-l-4 border-accent">
                  <h4 className="font-bold text-accent mb-2">Como você pode contribuir?</h4>
                  <p className="text-sm text-foreground/80">
                    Ao aproveitar cascas, talos e folhas em suas receitas, você reduz desperdício, economiza dinheiro e cria pratos deliciosos. Cada pequena ação conta!
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029692787/sWkRzxUoUMCBglZY.png"
                alt="ODS 12.3"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impacto" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">Impacto Global</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-accent">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Comece Agora!</h2>
          <p className="text-lg max-w-2xl mx-auto text-primary">
            Escolha uma receita, reúna seus ingredientes e transforme o que seria desperdício em algo delicioso. Cada prato é um passo em direção a um planeta mais sustentável.  
          </p>
          <a href="#receitas" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow hover:bg-primary hover:text-white">
            Explorar Receitas
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/10 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">EcoReceitas</h3>
              </div>
              <p className="text-sm text-foreground/70">
                Transformando desperdício em delícias sustentáveis.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#receitas" className="text-foreground/70 hover:text-primary transition-colors">Receitas</a></li>
                <li><a href="#ods" className="text-foreground/70 hover:text-primary transition-colors">ODS 12.3</a></li>
                <li><a href="#impacto" className="text-foreground/70 hover:text-primary transition-colors">Impacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-4">Sobre</h4>
              <p className="text-sm text-foreground/70">
                EcoReceitas é uma plataforma dedicada à conscientização sobre desperdício de alimentos e à promoção de práticas sustentáveis no prato. Desenvolvida, pelo discente Felipe Feitoza Bezerra, como Atividade Extensionista do 4º período do curso de tecnólogo em Análise e Desenvolvimento de Sistemas (ADS) na Gran Faculdade.
              </p>
            </div>
          </div>

          <div className="border-t border-foreground/20 pt-8 text-center text-sm text-foreground/70">
            <p>© 2026 EcoReceitas. Todos os direitos reservados. Desenvolvido com 🌱 para um planeta melhor.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
