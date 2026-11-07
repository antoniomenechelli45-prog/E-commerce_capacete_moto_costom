import { Product } from '../types';

import HERO_BIKER_IMAGE from '../assets/images/hero_custom_biker_1794058979726.jpg';
import HELMET_FULLFACE_BLACK from '../assets/images/helmet_fullface_black_1794058979560.jpg';
import HELMET_OPENFACE_CREAM from '../assets/images/helmet_openface_cream_1794058982054.jpg';
import HELMET_CAFERACER_RED from '../assets/images/helmet_caferacer_red_1794058981844.jpg';
import BIKER_GANG_IMAGE from '../assets/images/biker_gang_cinematic_1794058982283.jpg';

export {
  HERO_BIKER_IMAGE,
  HELMET_FULLFACE_BLACK,
  HELMET_OPENFACE_CREAM,
  HELMET_CAFERACER_RED,
  BIKER_GANG_IMAGE,
};

export const PRODUCTS: Product[] = [
  {
    id: 'vanguard-black',
    code: 'ATM-VNG-01',
    name: 'Vanguard Vintage Black',
    subtitle: 'Full-Face Tri-Composto com Pinstriping Dourado Manual',
    category: 'full-face',
    categoryLabel: 'Full-Face Clássico',
    price: 2490,
    originalPrice: 2890,
    rating: 4.95,
    reviewsCount: 128,
    featured: true,
    badge: 'Edição Numerada',
    primaryImage: HELMET_FULLFACE_BLACK,
    gallery: [
      {
        id: 'vng-1',
        label: 'Visão 3/4 Frontal',
        image: HELMET_FULLFACE_BLACK,
        type: 'three-quarter'
      },
      {
        id: 'vng-2',
        label: 'Perfil com Viseira Bolha',
        image: HELMET_FULLFACE_BLACK,
        type: 'side'
      },
      {
        id: 'vng-3',
        label: 'Interior Couro Acolchoado',
        image: HELMET_OPENFACE_CREAM,
        type: 'interior'
      },
      {
        id: 'vng-4',
        label: 'Em Ação na Estrada',
        image: HERO_BIKER_IMAGE,
        type: 'action'
      }
    ],
    description: 'O Vanguard Vintage sintetiza a era dourada do motociclismo custom americano com engenharia de absorção contemporânea. Casco tri-composto de fibra de carbono, vidro e aramida com linhas douradas traçadas à mão por artesãos especializados.',
    story: 'Inspirado nos capacetes de corrida em ovais de terra dos anos 60 e reconfigurado para longas viagens no asfalto em cruisers e choppers de alta cilindrada. Cada exemplar da série Vanguard recebe numeração gravada a laser na fivela de titânio.',
    highlights: [
      'Pinstriping manual dourado sobre laca preta piano de alto brilho',
      'Forração interna em couro bovino legítimo com tratamento anti-mofo e suede',
      'Viseira de policarbonato óptico grau 1 com proteção UV400 e tratamento anti-risco',
      'Entradas de ventilação frontais cortadas a laser com telas em malha de inox',
      'Homologação dupla internacional: ECE 22.06 e DOT FMVSS 218'
    ],
    specs: {
      shell: 'Fibra Tri-Composta (Carbono aeroespacial, Kevlar® e Fibra de Vidro multi-axial)',
      liner: 'Couro nobre perfurado costurado à mão, removível e lavável',
      closure: 'Fecho Duplo D em aço inox 316L forjado com acabamento acetinado',
      certification: 'ECE 22.06 / DOT FMVSS No. 218 / NBR 7471',
      weight: '1.290g (± 50g dependendo do tamanho)',
      visor: 'Viseira termoformada anti-distorção com botões de pressão em latão maciço'
    },
    sizes: [
      { size: 'XS', circumference: '53 - 54 cm', available: true },
      { size: 'S', circumference: '55 - 56 cm', available: true },
      { size: 'M', circumference: '57 - 58 cm', available: true },
      { size: 'L', circumference: '59 - 60 cm', available: true },
      { size: 'XL', circumference: '61 - 62 cm', available: true },
      { size: 'XXL', circumference: '63 - 64 cm', available: false }
    ],
    colors: [
      { name: 'Piano Black & Gold', hex: '#111111', borderHex: '#D4AF37', badge: 'Original' },
      { name: 'Raw Matte Carbon', hex: '#262626', borderHex: '#555555' },
      { name: 'Heritage Racing Red', hex: '#8B0000', borderHex: '#FFFFFF' }
    ],
    inStock: true,
    reviews: [
      {
        id: 'rev-1',
        author: 'Rodrigo Mendonça',
        motorcycle: 'Harley-Davidson Softail Slim 2021',
        rating: 5,
        date: '14 de Outubro, 2026',
        title: 'Acabamento surreal, vale cada centavo',
        comment: 'O forro de couro acolchoado é o mais confortável que já experimentei. Não vibra em velocidades de rodovia (120-130 km/h) e o isolamento acústico superou minhas expectativas para um casco clássico.',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Guilherme Sampaio',
        motorcycle: 'Triumph Thruxton RS 1200',
        rating: 5,
        date: '28 de Setembro, 2026',
        title: 'Design Café Racer autêntico',
        comment: 'A viseira bolha tem um clique super firme nos botões de latão. O pinstriping dourado brilha na medida certa sob o sol. Embalagem de madeira e capa de lona muito bem feitas.',
        verified: true
      }
    ]
  },
  {
    id: 'desert-sand-retro',
    code: 'ATM-SND-02',
    name: 'Desert Sand 3/4 Retro',
    subtitle: 'Open-Face Clássico com Interior em Couro Conhaque',
    category: 'open-face',
    categoryLabel: 'Open-Face 3/4 Retro',
    price: 1890,
    originalPrice: 2190,
    rating: 4.9,
    reviewsCount: 94,
    featured: true,
    badge: 'Best Seller Cruiser',
    primaryImage: HELMET_OPENFACE_CREAM,
    gallery: [
      {
        id: 'snd-1',
        label: 'Visão Frontal Angulada',
        image: HELMET_OPENFACE_CREAM,
        type: 'three-quarter'
      },
      {
        id: 'snd-2',
        label: 'Detalhe Forro & Fivela Dourada',
        image: HELMET_OPENFACE_CREAM,
        type: 'interior'
      },
      {
        id: 'snd-3',
        label: 'Na Rota Costeira',
        image: HERO_BIKER_IMAGE,
        type: 'action'
      },
      {
        id: 'snd-4',
        label: 'Comboio Cruiser',
        image: BIKER_GANG_IMAGE,
        type: 'action'
      }
    ],
    description: 'Criado para quem aprecia a sensação pura do vento no rosto sem abrir mão de proteção de elite. O Desert Sand 3/4 combina acabamento fosco aveludado na cor areia desértica com rebordo cromado fino e interiores de couro conhaque pespontado.',
    story: 'Homenagem às travessias épicas do Deserto do Mojave e da Rota 66. Uma estrutura leve e compacta desenvolvida para eliminar o efeito "cabeça de cogumelo" comum em capacetes abertos convencionais.',
    highlights: [
      'Perfil super slim ultra compacto com 3 tamanhos de casco dedicados',
      'Acabamento acetinado mate resistente a impressões digitais e riscos de poeira',
      'Forração premium antialérgica em couro conhaque envelhecido naturalmente',
      'Suporte traseiro em couro com botão de pressão para prender óculos goggle',
      '3 botões frontais universais compatíveis com palas e viseiras bubble'
    ],
    specs: {
      shell: 'Fibra de Vidro Orgânica prensada a vácuo com reforço estrutural em Kevlar',
      liner: 'Couro bovino conhaque curtido vegetal com acolchoamento ergonômico',
      closure: 'Argolas Duplo D banhadas em latão antigo com passador de queixo',
      certification: 'ECE 22.06 e DOT aprovado',
      weight: '980g (± 30g)',
      visor: 'Compatível com viseiras bolha de 3 pontos ou óculos estilo aviador'
    },
    sizes: [
      { size: 'XS', circumference: '53 - 54 cm', available: true },
      { size: 'S', circumference: '55 - 56 cm', available: true },
      { size: 'M', circumference: '57 - 58 cm', available: true },
      { size: 'L', circumference: '59 - 60 cm', available: true },
      { size: 'XL', circumference: '61 - 62 cm', available: true },
      { size: 'XXL', circumference: '63 - 64 cm', available: true }
    ],
    colors: [
      { name: 'Desert Matte Sand', hex: '#D7C4A5', borderHex: '#6F4E37', badge: 'Original' },
      { name: 'Vintage Off-White', hex: '#F0ECE1', borderHex: '#333333' },
      { name: 'Gunmetal Gray', hex: '#4A4A4A', borderHex: '#B8860B' }
    ],
    inStock: true,
    reviews: [
      {
        id: 'rev-3',
        author: 'Eduardo Fontes',
        motorcycle: 'Indian Scout Bobber Twenty',
        rating: 5,
        date: '02 de Novembro, 2026',
        title: 'O mais bonito que já tive em 15 anos de moto',
        comment: 'Combina perfeitamente com a Indian Scout. O couro interno é macio demais e o acabamento das costuras é impecável.',
        verified: true
      }
    ]
  },
  {
    id: 'apex-caferacer-ruby',
    code: 'ATM-APX-03',
    name: 'Apex Café Racer Ruby',
    subtitle: 'Full-Face Aerodinâmico em Vermelho Rubi Metálico',
    category: 'cafe-racer',
    categoryLabel: 'Café Racer Performance',
    price: 2650,
    originalPrice: 3100,
    rating: 4.98,
    reviewsCount: 76,
    featured: true,
    badge: 'Alta Performance',
    primaryImage: HELMET_CAFERACER_RED,
    gallery: [
      {
        id: 'apx-1',
        label: 'Visão 3/4 com Viseira Fumê',
        image: HELMET_CAFERACER_RED,
        type: 'three-quarter'
      },
      {
        id: 'apx-2',
        label: 'Mecanismo em Titânio Escovado',
        image: HELMET_CAFERACER_RED,
        type: 'side'
      },
      {
        id: 'apx-3',
        label: 'Pilotagem em Alta Velocidade',
        image: HERO_BIKER_IMAGE,
        type: 'action'
      },
      {
        id: 'apx-4',
        label: 'Casco Preto Irmão (Vanguard)',
        image: HELMET_FULLFACE_BLACK,
        type: 'three-quarter'
      }
    ],
    description: 'Projetado para os amantes de velocidade e postura agressiva das Café Racers. O Apex combina um perfil aerodinâmico afiado com dutos de ar esculpidos em alumínio escovado e uma pintura automotiva profunda em camadas de verniz cerâmico.',
    story: 'Desenvolvido nos túneis de vento para reduzir o arrasto da cabeça quando inclinado sobre semi-guidões clip-on. A cor Vermelho Carmim Metálico traz reflexos que mudam do rubi intenso à sombra grafite sob a luz.',
    highlights: [
      'Pintura automotiva de 5 camadas com pigmentos metálicos reflexivos',
      'Mecanismo de abertura de viseira usinado em titânio aeronáutico CNC',
      'Campo visual panorâmico de 190 graus para maior percepção periférica',
      'Sistema EPS de densidade quádrupla para máxima dissipação de energia',
      'Acompanha 2 viseiras: Cristal Óptico e Dark Smoke 80%'
    ],
    specs: {
      shell: '100% Fibra de Carbono 3K com entrelaçamento diagonal e resina epóxi premium',
      liner: 'Tecido técnico Coolmax® respirável com detalhes em couro nobuck',
      closure: 'Fivela magnética com trava de segurança Duplo D em liga de titânio',
      certification: 'ECE 22.06 / DOT FMVSS 218',
      weight: '1.240g (± 40g)',
      visor: 'Viseira termoformada anti-embaçante com pinlock preparado'
    },
    sizes: [
      { size: 'XS', circumference: '53 - 54 cm', available: false },
      { size: 'S', circumference: '55 - 56 cm', available: true },
      { size: 'M', circumference: '57 - 58 cm', available: true },
      { size: 'L', circumference: '59 - 60 cm', available: true },
      { size: 'XL', circumference: '61 - 62 cm', available: true },
      { size: 'XXL', circumference: '63 - 64 cm', available: true }
    ],
    colors: [
      { name: 'Metallic Ruby Red', hex: '#8B1E22', borderHex: '#D4AF37', badge: 'Destaque' },
      { name: 'Monza Racing Silver', hex: '#A8A9AD', borderHex: '#333333' },
      { name: 'Gloss British Green', hex: '#1C352D', borderHex: '#D4AF37' }
    ],
    inStock: true,
    reviews: [
      {
        id: 'rev-4',
        author: 'Marcos Vinicius Maia',
        motorcycle: 'Ducati Scrambler Café Racer',
        rating: 5,
        date: '20 de Outubro, 2026',
        title: 'Aerodinâmica incrível no vento',
        comment: 'A cabeça não chacoalha nada na estrada. A pintura em vermelho rubi é de cair o queixo, chama atenção em qualquer posto ou encontro de moto.',
        verified: true
      }
    ]
  },
  {
    id: 'ghost-rider-carbon',
    code: 'ATM-GHR-04',
    name: 'Ghost Carbon Chopper Edition',
    subtitle: 'Casco Full Carbon Aparente com Grafismo Minimalista',
    category: 'custom-cruiser',
    categoryLabel: 'Custom & Chopper',
    price: 3190,
    originalPrice: 3600,
    rating: 4.96,
    reviewsCount: 42,
    badge: 'Fibra de Carbono Pura',
    primaryImage: HELMET_FULLFACE_BLACK,
    gallery: [
      {
        id: 'ghr-1',
        label: 'Trama de Carbono Aparente',
        image: HELMET_FULLFACE_BLACK,
        type: 'three-quarter'
      },
      {
        id: 'ghr-2',
        label: 'Viseira Fume com Trava',
        image: HELMET_CAFERACER_RED,
        type: 'side'
      },
      {
        id: 'ghr-3',
        label: 'Chopper na Autoestrada',
        image: HERO_BIKER_IMAGE,
        type: 'action'
      }
    ],
    description: 'O Ghost Carbon é o ápice da exclusividade para proprietários de choppers e bobbers personalizadas. Trama de carbono 12K aparente sob verniz transparente com proteção UV reforçada.',
    story: 'Construído artesanalmente em tiragens limitadas de apenas 50 peças por semestre. Cada unidade acompanha certificado assinado pelo mestre artesão responsável pela laminação.',
    highlights: [
      'Peso ultra-leve de apenas 1.180 gramas',
      'Forração térmica em microfibra italiana com memória anatômica',
      'Grelha de queixo em aço usinado com filtro de partículas de carvão ativado',
      'Fivela anatômica de encaixe rápido milimétrico e opção Duplo D'
    ],
    specs: {
      shell: 'Fibra de Carbono 12K Toray® Japão',
      liner: 'Camurça Alcantara® preta com costuras duplas em fio de Kevlar',
      closure: 'Duplo D forjado em alumínio aeronáutico 7075-T6',
      certification: 'ECE 22.06 / DOT FMVSS 218',
      weight: '1.180g (± 30g)',
      visor: 'Policarbonato 3mm com tratamento fotocromático opcional'
    },
    sizes: [
      { size: 'S', circumference: '55 - 56 cm', available: true },
      { size: 'M', circumference: '57 - 58 cm', available: true },
      { size: 'L', circumference: '59 - 60 cm', available: true },
      { size: 'XL', circumference: '61 - 62 cm', available: true }
    ],
    colors: [
      { name: 'Matte Raw Carbon', hex: '#1C1C1C', borderHex: '#444444' },
      { name: 'Gloss Deep Carbon', hex: '#0A0A0A', borderHex: '#888888' }
    ],
    inStock: true,
    reviews: [
      {
        id: 'rev-5',
        author: 'Felipe Alcantara',
        motorcycle: 'Harley-Davidson Breakout 117',
        rating: 5,
        date: '11 de Outubro, 2026',
        title: 'Leve como pena, lindo demais',
        comment: 'Depois de rodar 600km em um único dia você entende a diferença que faz um capacete de 1.180g. O pescoço chega zerado.',
        verified: true
      }
    ]
  },
  {
    id: 'bonneville-ivory',
    code: 'ATM-BNV-05',
    name: 'Bonneville Ivory & Cognac',
    subtitle: 'Open-Face Heritage Inspirado nas Provas de Velocidade',
    category: 'open-face',
    categoryLabel: 'Open-Face 3/4 Retro',
    price: 1980,
    originalPrice: 2250,
    rating: 4.88,
    reviewsCount: 51,
    badge: 'Heritage 1959',
    primaryImage: HELMET_OPENFACE_CREAM,
    gallery: [
      {
        id: 'bnv-1',
        label: 'Casco Marfim Acetinado',
        image: HELMET_OPENFACE_CREAM,
        type: 'three-quarter'
      },
      {
        id: 'bnv-2',
        label: 'Interior Couro Conhaque',
        image: HELMET_OPENFACE_CREAM,
        type: 'interior'
      },
      {
        id: 'bnv-3',
        label: 'Na Estrada com Comboio',
        image: BIKER_GANG_IMAGE,
        type: 'action'
      }
    ],
    description: 'Inspirado nos pilotos pioneiros das salinas de Bonneville. Apresenta casco na cor marfim clássico com faixa central em couro marrom gravado em relevo.',
    story: 'Um tributo aos recordistas de velocidade dos anos 50. Une elegância atemporal a materiais resistentes ao clima tropical.',
    highlights: [
      'Faixa central de couro natural pespontado',
      'Forro respirável com canais de ventilação ocultos',
      'Botões de latão maciço com encaixe preciso para viseiras clássicas'
    ],
    specs: {
      shell: 'Composto de fibra de vidro multiaxial',
      liner: 'Couro nobre conhaque respirável',
      closure: 'Duplo D em latão maciço',
      certification: 'ECE 22.06 / DOT',
      weight: '1.020g (± 30g)',
      visor: 'Compatível com pala vintage e viseiras bolha'
    },
    sizes: [
      { size: 'XS', circumference: '53 - 54 cm', available: true },
      { size: 'S', circumference: '55 - 56 cm', available: true },
      { size: 'M', circumference: '57 - 58 cm', available: true },
      { size: 'L', circumference: '59 - 60 cm', available: true },
      { size: 'XL', circumference: '61 - 62 cm', available: false }
    ],
    colors: [
      { name: 'Heritage Ivory', hex: '#EAE6DC', borderHex: '#8B4513' },
      { name: 'Classic British Green', hex: '#1E3329', borderHex: '#D4AF37' }
    ],
    inStock: true,
    reviews: [
      {
        id: 'rev-6',
        author: 'Carlos Alberto Leite',
        motorcycle: 'Royal Enfield Continental GT 650',
        rating: 5,
        date: '19 de Setembro, 2026',
        title: 'Combinação perfeita com a Royal Enfield',
        comment: 'O tom marfim com couro conhaque casa perfeitamente com motos vintage. Super bem embalado.',
        verified: true
      }
    ]
  },
  {
    id: 'rebel-scrambler-iron',
    code: 'ATM-RBL-06',
    name: 'Rebel Scrambler Iron',
    subtitle: 'Full-Face Agressivo com Queixeira Ventilada em Malha Metálica',
    category: 'full-face',
    categoryLabel: 'Custom & Chopper',
    price: 2750,
    originalPrice: 3200,
    rating: 4.93,
    reviewsCount: 68,
    badge: 'Scrambler & Custom',
    primaryImage: HELMET_FULLFACE_BLACK,
    gallery: [
      {
        id: 'rbl-1',
        label: 'Perfil Queixeira Ventilada',
        image: HELMET_FULLFACE_BLACK,
        type: 'three-quarter'
      },
      {
        id: 'rbl-2',
        label: 'Ação na Terra e Asfalto',
        image: HERO_BIKER_IMAGE,
        type: 'action'
      },
      {
        id: 'rbl-3',
        label: 'Casco Ruby Red',
        image: HELMET_CAFERACER_RED,
        type: 'side'
      }
    ],
    description: 'Projetado para quem desbrava tanto o asfalto quanto estradas de terra com choppers, scramblers e trackers. Queixeira pronunciada com fendas de ventilação inspiradas no motocross dos anos 70.',
    story: 'Um capacete agressivo, imponente e seguro. Garante fluxo de ar abundante em dias quentes mantendo a pureza das linhas custom.',
    highlights: [
      'Grelhas frontais em aço escovado com tela interna removível contra insetos',
      'Pala removível em fibra de vidro combinando com o casco',
      'Forro com tratamento antimicrobiano e absorção ultra-rápida de suor'
    ],
    specs: {
      shell: 'Fibra Tri-composta com reforço de impacto na queixeira',
      liner: 'Microfibra térmica e couro perfurado',
      closure: 'Fecho Duplo D em aço inoxidável',
      certification: 'ECE 22.06 / DOT FMVSS 218',
      weight: '1.340g (± 40g)',
      visor: 'Compatível com óculos cross/custom ou viseira bolha'
    },
    sizes: [
      { size: 'S', circumference: '55 - 56 cm', available: true },
      { size: 'M', circumference: '57 - 58 cm', available: true },
      { size: 'L', circumference: '59 - 60 cm', available: true },
      { size: 'XL', circumference: '61 - 62 cm', available: true }
    ],
    colors: [
      { name: 'Matte Asphalt Gray', hex: '#373A3C', borderHex: '#C82020' },
      { name: 'Gloss Raven Black', hex: '#111111', borderHex: '#D4AF37' }
    ],
    inStock: true,
    reviews: [
      {
        id: 'rev-7',
        author: 'Danilo Prado',
        motorcycle: 'Triumph Scrambler 1200 XE',
        rating: 5,
        date: '04 de Outubro, 2026',
        title: 'Estilo intimidador e ventilação nota 10',
        comment: 'O fluxo de ar é impressionante. Muito confortável para viagens de final de semana.',
        verified: true
      }
    ]
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'full-face',
    title: 'Full-Face Vintage',
    subtitle: 'Proteção integral com o espírito dos anos 60 e 70',
    image: HELMET_FULLFACE_BLACK,
    count: '6 Modelos',
    tag: 'Clássico Imbatível'
  },
  {
    id: 'open-face',
    title: 'Open-Face 3/4 Retro',
    subtitle: 'Liberdade total e perfil compacto sem volume excessivo',
    image: HELMET_OPENFACE_CREAM,
    count: '8 Modelos',
    tag: 'Sensação Pura'
  },
  {
    id: 'cafe-racer',
    title: 'Café Racer & Speed',
    subtitle: 'Aerodinâmica apurada para curvas rápidas e clip-ons',
    image: HELMET_CAFERACER_RED,
    count: '5 Modelos',
    tag: 'Alta Performance'
  },
  {
    id: 'custom-cruiser',
    title: 'Custom, Chopper & Bobber',
    subtitle: 'Trama de carbono e pinturas personalizadas exclusivas',
    image: HERO_BIKER_IMAGE,
    count: '7 Modelos',
    tag: 'Exclusividade'
  }
];
