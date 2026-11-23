export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
};

export type MenuSection = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export type GalleryImage = {
  src?: string;
  alt: string;
};

export type StandSocial = {
  instagram?: string;
  facebook?: string;
};

export type Stand = {
  slug: string;
  cuisine: string;
  brandName?: string;
  title: string;
  position: string;
  subtitle: string;
  social?: StandSocial;
  phone?: string;
  phoneDisplay?: string;
  heroImage: string;
  heroImageAlt: string;
  heroObjectPosition?: string;
  cardImage?: string;
  cardImageAlt?: string;
  logoImage?: string;
  logoImageAlt?: string;
  paragraph: string[];
  whyTitle: string;
  why: string;
  openingNote?: string;
  openingDate?: string;
  gallery: GalleryImage[];
  menu: MenuSection[];
  menuNote?: string;
};

export const stands: Stand[] = [
  {
    slug: "grillades",
    cuisine: "Grillades",
    brandName: "Grillades sur le pouce",
    title: "Grillades",
    position: "Tout à gauche du demi-cercle",
    subtitle: "Saucisses, noix d'entrecôte, ribs et gambas à la plancha, tout juste grillés",
    heroImage: "/images/stands/grillades/hero-flamme.jpg",
    heroImageAlt: "Pièces de viande grillées à la flamme sur le barbecue",
    cardImage: "/images/stands/grillades/ribs-plancha.jpg",
    cardImageAlt: "Travers de porc grillés, pommes de terre rôties et sauce barbecue",
    logoImage: "/images/stands/grillades/logo.jpg",
    logoImageAlt: "Logo Grillades sur le pouce, bonheur partagé",
    openingNote: "Nouveau stand aux Halles, ouverture en octobre 2026",
    openingDate: "2026-10-01T11:30:00+02:00",
    paragraph: [
      "Un nouveau stand rejoint les Halles : de la grillade simple et généreuse, pensée pour les envies de viande juste cuite, sans chichi.",
      "Saucisses, noix d'entrecôte, ribs et gambas passent à la plancha, servis avec des frites fraîches maison ou des légumes de saison.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce qu'il manquait une grillade simple aux Halles. Des pièces de viande choisies, cuites à la plancha, servies sans artifice.",
    gallery: [
      {
        src: "/images/stands/grillades/plancha-viandes-legumes.jpg",
        alt: "Assortiment de viandes et légumes grillés sur planche de bois",
      },
      {
        src: "/images/stands/grillades/ribs-plancha.jpg",
        alt: "Travers de porc grillés, pommes de terre rôties et sauce barbecue",
      },
      {
        src: "/images/stands/grillades/cotelettes-flamme.jpg",
        alt: "Pièces de viande grillées à la flamme",
      },
      {
        src: "/images/stands/grillades/legumes-grilles.jpg",
        alt: "Légumes grillés en accompagnement",
      },
    ],
    menu: [
      {
        title: "Viande au choix",
        note: "Toutes les viandes sont servies avec des frites fraîches maison ou des légumes de saison.",
        items: [
          { name: "Merguez", price: "11 EUR" },
          { name: "Chipolatas", price: "11 EUR" },
          { name: "Chorizo", price: "12 EUR" },
          { name: "Mixte saucisses", price: "14 EUR", description: "Merguez, chorizo, chipolata" },
          { name: "Noix d'entrecôte", price: "17 EUR" },
          { name: "Ribs", price: "17 EUR" },
          { name: "Gambas", price: "18 EUR" },
          { name: "Mixte viandes", price: "28 EUR", description: "Merguez, chipolata, chorizo, ribs" },
        ],
      },
    ],
    menuNote: "Nouveau stand aux Halles, ouverture en octobre 2026.",
  },
  {
    slug: "thailandaise",
    cuisine: "Thaïlandaise",
    brandName: "Thai Food Moon",
    title: "Thaïlandaise",
    position: "Diagonale gauche du demi-cercle",
    subtitle: "Currys parfumés, nouilles sautées et saveurs de Bangkok",
    phone: "+33609644394",
    phoneDisplay: "06 09 64 43 94",
    heroImage: "/images/stands/thailandaise/carte-comptoir.jpg",
    heroImageAlt: "Comptoir du stand Thai Food Moon avec lanternes et bouddhas porte-bonheur",
    heroObjectPosition: "object-[50%_62%]",
    cardImage: "/images/stands/thailandaise/nouilles-sautees.jpg",
    cardImageAlt: "Nouilles sautées thaïlandaises, poulet, cacahuètes et coriandre",
    logoImage: "/images/stands/thailandaise/logo.jpg",
    logoImageAlt: "Logo Thai Food Moon",
    social: {
      facebook: "https://www.facebook.com/moonthaifood.2023/photos",
    },
    paragraph: [
      "Sous l'enseigne Thai Food Moon, la cuisine thaïlandaise s'installe aux Halles avec ses currys verts et jaunes, ses soupes tom yam relevées et ses pad thaï sautés minute.",
      "Les bols voyagent entre le sucre du riz gluant à la mangue et le piquant du pad kra pao. Une cuisine vive, généreuse, pensée pour être partagée à plusieurs.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce que la cuisine thaïlandaise ne se résume pas au pad thaï. Chaque plat est préparé à la demande, avec des herbes fraîches et un vrai sens du dosage entre sucré, salé, acide et pimenté.",
    gallery: [
      {
        src: "/images/stands/thailandaise/stand-facade.jpg",
        alt: "Façade du stand Thai Food Moon aux Halles de Coustellet",
      },
      {
        src: "/images/stands/thailandaise/pad-thai.jpg",
        alt: "Pad thaï aux crevettes, cacahuètes concassées",
      },
      {
        src: "/images/stands/thailandaise/tom-yam-kung.jpg",
        alt: "Tom Yam Kung, soupe de crevettes et champignons",
      },
      {
        src: "/images/stands/thailandaise/tom-kha-gai.jpg",
        alt: "Tom Kha Gai, soupe de poulet au lait de coco",
      },
      {
        src: "/images/stands/thailandaise/curry-vert-poulet.jpg",
        alt: "Curry vert au poulet, basilic thaï et piment",
      },
      {
        src: "/images/stands/thailandaise/som-tam.jpg",
        alt: "Som Tam, salade de papaye verte aux cacahuètes",
      },
      {
        src: "/images/stands/thailandaise/kung-pad-legumes.jpg",
        alt: "Kung Pad, crevettes et légumes sautés, riz",
      },
      {
        src: "/images/stands/thailandaise/plats-a-emporter.jpg",
        alt: "Plats du stand Thai Food Moon prêts à emporter",
      },
      { alt: "Riz gluant à la mangue, dessert thaïlandais" },
    ],
    menu: [
      {
        title: "Soupes",
        items: [
          { name: "Tom Kha Gai", price: "15 EUR", description: "Soupe de poulet, citronnelle, lait de coco" },
          { name: "Tom Yam Kung", price: "16 EUR", description: "Soupe de crevettes, citronnelle, lait de coco" },
        ],
      },
      {
        title: "Riz et nouilles",
        items: [
          { name: "Nasi Goreng", description: "Riz frit à la balinaise", price: "16 EUR (crevettes ou poulet)" },
          { name: "Khao Pad Sapparod", price: "18 EUR", description: "Riz frit à l'ananas, crevettes ou poulet" },
          { name: "Curry vert ou curry jaune", price: "15 à 16 EUR", description: "Poulet ou crevettes" },
          { name: "Pad Thaï", description: "Nouilles de riz, sauce tamarin", price: "15 à 17 EUR (poulet, crevettes, bœuf, végétarien)" },
          { name: "Pad Kra Pao", description: "Basilic thaï, riz, œuf", price: "16 EUR (poulet, porc ou bœuf)" },
        ],
      },
      {
        title: "Salades et desserts",
        items: [
          { name: "Laab Moo", price: "17 EUR", description: "Salade de porc" },
          { name: "Som Tam", price: "18 EUR", description: "Salade de papaye verte" },
          { name: "Kung Pad", price: "16 EUR", description: "Crevettes, légumes, sauce aigre-douce, riz" },
          { name: "Gai Pad", price: "16 EUR", description: "Poulet, légumes, sauce aigre-douce, riz" },
          { name: "Mango Sticky Rice", price: "10 EUR", description: "Mangue, riz gluant, lait de coco, cacahuètes" },
        ],
      },
    ],
    menuNote: "Ouvert du mardi au samedi, 11h30-14h et 18h30-21h, sur place ou à emporter.",
  },
  {
    slug: "libanaise",
    cuisine: "Libanaise",
    brandName: "Les Délices du Liban",
    title: "Libanaise",
    position: "Haut gauche du demi-cercle",
    subtitle: "Mezze, houmous maison et chawarma",
    phone: "+33778737157",
    phoneDisplay: "07 78 73 71 57",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61556463201306",
      instagram: "https://www.instagram.com/lesdelicesduliban_coustellet",
    },
    heroImage: "/images/stands/libanaise/banniere.jpg",
    heroImageAlt: "Assortiment de mezze libanais : houmous, feuilles de vigne, falafels et olives",
    heroObjectPosition: "object-[78%_45%]",
    cardImage: "/images/stands/libanaise/plateau-mezze.jpg",
    cardImageAlt: "Plateau de mezze libanais avec houmous, falafels et kefta grillée",
    logoImage: "/images/stands/libanaise/logo.jpg",
    logoImageAlt: "Logo Les Délices du Liban",
    paragraph: [
      "Les Délices du Liban ouvrent leur comptoir avec les classiques libanais : houmous, baba ghanouj, feuilles de vigne farcies au riz et tzatziki au makdous, servis avec du pain libanais.",
      "Côté plats, l'Assiette des Saveurs, L'Hivernale ou La Tradition, et une carte de sandwichs généreux, du chawarma au Nocturne, tous servis avec frites et leur sauce.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce que la cuisine libanaise se partage. Les entrées sont pensées pour être posées au centre de la table, à picorer à plusieurs, comme au Liban.",
    gallery: [
      {
        src: "/images/stands/libanaise/stand-facade.jpg",
        alt: "Façade du stand Les Délices du Liban aux Halles de Coustellet",
      },
      {
        src: "/images/stands/libanaise/plateau-mixte-1.jpg",
        alt: "Plateau mixte : brochettes, houmous, patatas et fattoush",
      },
      {
        src: "/images/stands/libanaise/table-partagee-mezze.jpg",
        alt: "Table partagée de mezze libanais, vue du dessus",
      },
      {
        src: "/images/stands/libanaise/chawarma-frites.jpg",
        alt: "Chawarma roulé, servi avec frites maison",
      },
      {
        src: "/images/stands/libanaise/plateau-mixte-2.jpg",
        alt: "Plateau mixte : falafels, boereks, chawarma et houmous",
      },
    ],
    menu: [
      {
        title: "Entrées",
        note: "Servies avec du pain libanais.",
        items: [
          { name: "Houmous", price: "7 EUR", description: "Purée de pois chiches avec crème de sésame" },
          { name: "Baba Ghanouj", price: "7 EUR", description: "Caviar d'aubergine avec crème de sésame" },
          { name: "Feuilles de vigne", price: "7 EUR", description: "6 feuilles de vigne farcies au riz" },
          { name: "Tzatziki au makdous", price: "7 EUR", description: "Fromage blanc aux herbes et concombre, makdous (petites aubergines marinées farcies aux noix et poivrons)" },
          { name: "Houmous Royal", price: "11 EUR", description: "Houmous, sauce à l'ail, mélange de bœuf et d'agneau hachés grillés, mélasse de grenade, oignons frits" },
        ],
      },
      {
        title: "Plats",
        items: [
          { name: "Assiette des Saveurs", price: "20 EUR", description: "Houmous, kafta (bœuf et agneau hachés), lamelles de poulet, sujuk avec tomate et oignon grillés, pain grillé à l'ail et fromage, sauce chili mayo, pain libanais" },
          { name: "L'Hivernale", price: "16 EUR", description: "Kafta (bœuf et agneau hachés) grillée dans le pain libanais, sauce chili mayo, aubergine au sésame, légumes grillés et soupe du moment" },
          { name: "La Tradition", price: "18 EUR", description: "Falafels, tzatziki, roquette, houmous, pain grillé à l'ail et au fromage, soupe du moment et pain libanais" },
        ],
      },
      {
        title: "Sandwichs et frites",
        note: "Tous les sandwichs sont servis avec frites et leur sauce.",
        items: [
          { name: "Chawarma", price: "15 EUR", description: "Pain libanais, sauce à l'ail, salade, cornichon, lamelles de poulet" },
          { name: "Kebab", price: "15 EUR", description: "Pain kebab, sauce smoky lemon mayo, salade, oignon rouge, chou rouge, tomate, lamelles de poulet" },
          { name: "The Spartan", price: "16 EUR", description: "Pain kebab, tzatziki, concombre, oignon rouge, tomate, kafta (bœuf et agneau hachés)" },
          { name: "La Signature", price: "16 EUR", description: "Pain libanais, sauce chili mayo, mélange de fromage, salami de porc, oignon caramélisé, roquette, kafta (bœuf et agneau hachés)" },
          { name: "Le Nocturne", price: "16 EUR", description: "Pain kebab, sauce à l'ail noir, pistaches concassées, salami de porc, lamelles de poulet, oignon rouge, tomate, roquette grillés" },
          { name: "Le Volcan", price: "15 EUR", description: "Pain kebab, sauce smoky lemon mayo, mélange de fromage, noix concassées, sujuk (saucisse arménienne), poivron grillé, roquette" },
        ],
      },
      {
        title: "Dessert du moment",
        items: [
          { name: "Dessert du moment", description: "Demandez au comptoir, ou scannez le QR code sur place pour les nouveautés et les allergènes" },
        ],
      },
    ],
  },
  {
    slug: "plats-en-sauce",
    cuisine: "Plats en sauce",
    brandName: "Les petits plats en sauce",
    title: "Les petits plats en sauce",
    position: "Haut droit du demi-cercle",
    subtitle: "Plats mijotés à l'ancienne : pieds paquets, bœuf bourguignon, blanquette de veau",
    heroImage: "/images/stands/plats-en-sauce/pieds-paquets.jpg",
    heroImageAlt: "Pieds paquets marseillais en sauce tomate, pommes de terre vapeur persillées",
    heroObjectPosition: "object-[50%_65%]",
    cardImage: "/images/stands/plats-en-sauce/boeuf-bourguignon.jpg",
    cardImageAlt: "Bœuf bourguignon mijoté, carottes et pommes de terre",
    paragraph: [
      "Venez déguster la cuisine du terroir : des petits plats mijotés et réconfortants, profondément ancrés dans les traditions provençales.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce qu'un bon plat en sauce demande du temps. Ici, on laisse mijoter, et on sert chaud.",
    gallery: [
      {
        src: "/images/stands/plats-en-sauce/pieds-paquets.jpg",
        alt: "Pieds paquets marseillais, pommes de terre vapeur",
      },
      {
        src: "/images/stands/plats-en-sauce/boeuf-bourguignon.jpg",
        alt: "Bœuf bourguignon, pommes de terre et carottes",
      },
      {
        src: "/images/stands/plats-en-sauce/blanquette-veau.jpg",
        alt: "Blanquette de veau à l'ancienne, riz",
      },
    ],
    menu: [
      {
        title: "Les plats",
        items: [
          { name: "Pieds paquets marseillais", description: "Servis avec pommes de terre vapeur" },
          { name: "Bœuf bourguignon", description: "Servi avec pommes de terre rôties" },
          { name: "Blanquette de veau à l'ancienne", description: "Servie avec riz camarguais" },
        ],
      },
    ],
  },
  {
    slug: "burger-tacos",
    cuisine: "Burger et Tacos",
    title: "Burger & Tacos",
    position: "Diagonale droite du demi-cercle",
    subtitle: "Burgers maison, pain d'artisan et french tacos à composer",
    phone: "+33623602797",
    phoneDisplay: "06 23 60 27 97",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100028342705475",
      instagram: "https://www.instagram.com/food.story.truck",
    },
    heroImage: "/images/venue/disposition-2.jpg",
    heroImageAlt: "Client passant commande au stand burger des Halles de Coustellet, lumière du soir",
    heroObjectPosition: "object-[55%_45%]",
    cardImage: "/images/stands/burger-tacos/burger-fixings.jpg",
    cardImageAlt: "Burger maison bacon et cheddar, servi avec frites",
    logoImage: "/images/stands/burger-tacos/logo.jpg",
    logoImageAlt: "Logo Food Story Burger & Tacos",
    paragraph: [
      "Steaks hachés frais, pain burger façonné par un artisan boulanger, frites maison : ce stand joue la carte américaine sans jamais sacrifier la qualité.",
      "Du Classic Burger au Truffo, en passant par le french tacos à composer soi-même avec ses deux viandes et sa sauce, il y en a pour tous les appétits, petits et grands.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce qu'un bon burger se juge à la qualité de sa viande et de son pain. Tout est frais, fait maison, avec un vrai menu enfant pour les familles.",
    gallery: [
      {
        src: "/images/stands/burger-tacos/stand-facade.jpg",
        alt: "Façade du stand Food Story Burger & Tacos aux Halles de Coustellet",
      },
      {
        src: "/images/stands/burger-tacos/burger-en-main-1.jpg",
        alt: "Burger signature Food Story, tenu en main",
      },
      {
        src: "/images/stands/burger-tacos/burger-en-main-2.jpg",
        alt: "Burger Blue Cheese, bacon et oignons rouges caramélisés",
      },
      {
        src: "/images/stands/burger-tacos/crispy-chicken-terrasse.jpg",
        alt: "Crispy Chicken dégustée en terrasse",
      },
    ],
    menu: [
      {
        title: "Burgers",
        note: "Servis avec frites maison et une sauce au choix.",
        items: [
          { name: "Classic Burger", price: "13,5 EUR", description: "Steak haché frais 130g, salade, tomates, cheddar affiné, sauce tartare, pickles" },
          { name: "Double Chessy", price: "14,5 EUR", description: "2 steaks hachés frais 260g, double cheddar, ketchup, moutarde américaine, pickles" },
          { name: "Triple Cheese Bacon", price: "17 EUR", description: "3 steaks hachés frais 390g, triple cheddar, bacon grillé" },
          { name: "Crispy Chicken", price: "14 EUR", description: "Poulet pané, coleslaw, cheddar affiné et fondu, sauce maison" },
          { name: "Veggie", price: "13,5 EUR", description: "Steak végétal, cheddar, choux rouge mariné, légumes grillés, sauce tartare" },
          { name: "Raclette", price: "14,5 EUR", description: "Steak haché ou poulet pané, raclette, bacon ou grison, oignons caramélisés" },
          { name: "Blue Cheese", price: "14,5 EUR", description: "Steak haché, moutarde à l'ancienne, fromage bleu, oignons rouges caramélisés, poitrine fumée" },
          { name: "Croq Burger", price: "14,9 EUR", description: "Pain de mie toasté, steak haché ou poulet pané, bacon grillé, oignons caramélisés" },
          { name: "Truffo", price: "16,5 EUR", description: "Steak haché, roquette, mayonnaise à la truffe, brie de Meaux AOP, poitrine fumée" },
          { name: "Spicy BBQ", price: "14,5 EUR", description: "Steak haché ou poulet pané, poitrine fumée, jalapeños, sauce barbecue piquante" },
        ],
      },
      {
        title: "French tacos",
        items: [
          { name: "Compose ton tacos", price: "13,5 EUR", description: "2 viandes au choix, 1 sauce, 1 garniture, 1 fromage, sauce fromagère maison incluse" },
        ],
      },
      {
        title: "À côté et menu enfant",
        items: [
          { name: "Fresh Fries", price: "9,9 EUR", description: "Maxi barquette, cheddar fondu, bacon ou grison, jalapeños" },
          { name: "Poulet pané x4", price: "6,9 EUR", description: "Avec 2 sauces au choix" },
          { name: "Barquette de frites maison", price: "3,5 EUR" },
          { name: "Menu Kids", price: "7 EUR", description: "Cheese burger ou tenders, frites et Capri-Sun" },
        ],
      },
    ],
    menuNote: "Pain burger façonné par un artisan boulanger, produits frais.",
  },
  {
    slug: "oriental",
    cuisine: "Oriental",
    title: "Oriental",
    position: "Tout à droite du demi-cercle",
    subtitle: "Couscous et tajines",
    heroImage: "/images/stands/oriental/couscous-royal.jpg",
    heroImageAlt: "Couscous royal : poulet, agneau, merguez et légumes mijotés sur semoule",
    heroObjectPosition: "object-[50%_45%]",
    cardImage: "/images/stands/oriental/tajine-zitoun.jpg",
    cardImageAlt: "Tajine de poulet aux olives et carottes",
    openingNote: "Nouveau stand aux Halles, ouverture le 15 février 2027",
    openingDate: "2027-02-15T11:30:00+01:00",
    paragraph: [
      "Un stand oriental rejoint les Halles de Coustellet : couscous et tajines, mijotés et généreux.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce qu'un couscous ou un tajine se partage, à la terrasse commune, entre amis ou en famille.",
    gallery: [
      {
        src: "/images/stands/oriental/couscous-royal.jpg",
        alt: "Couscous royal aux trois viandes et légumes",
      },
      {
        src: "/images/stands/oriental/couscous-7-legumes.jpg",
        alt: "Couscous aux sept légumes et pois chiches",
      },
      {
        src: "/images/stands/oriental/tajine-zitoun.jpg",
        alt: "Tajine de poulet aux olives",
      },
    ],
    menu: [
      {
        title: "Au menu",
        note: "Carte détaillée et prix à venir.",
        items: [{ name: "Couscous" }, { name: "Tajines" }],
      },
    ],
    menuNote: "Nouveau stand aux Halles, ouverture le 15 février 2027.",
  },
];

export const bar: Stand = {
  slug: "bar",
  cuisine: "Bar",
  brandName: "Les Halles Bar",
  title: "Bar",
  position: "Au centre de la terrasse",
  subtitle: "Cocktails, vins, bières et softs, entre deux plats ou en fin de soirée",
  heroImage: "/images/venue/bar-terrasse.jpg",
  heroImageAlt: "Comptoir du bar Les Halles, ardoises de cocktails, bières et vins, guirlandes lumineuses",
  paragraph: [
    "Au centre de la terrasse, le bar des Halles sert cocktails, vins, bières et softs, entre deux plats ou pour prolonger la soirée.",
    "Mojito, Cuba Libre, Piña Colada, Americano ou Aperol Spritz en cocktail signature, une sélection de bières du monde en bouteille, et une carte de vins de Provence au verre ou à la bouteille.",
  ],
  whyTitle: "Le point de ralliement",
  why: "Parce qu'une soirée aux Halles passe toujours par le bar. C'est le point de passage commun à tous les stands, pour trinquer entre deux plats ou refaire le monde jusqu'à la fermeture.",
  gallery: [
    {
      src: "/images/venue/bar-terrasse.jpg",
      alt: "Comptoir du bar Les Halles avec ardoises de cocktails, bières et vins",
    },
    { alt: "Cocktails du bar, Mojito et Aperol Spritz" },
    { alt: "Sélection de vins de Provence au verre" },
  ],
  menu: [
    {
      title: "Cocktails",
      note: "10 EUR le cocktail.",
      items: [
        { name: "Mojito", description: "Rhum blanc, citron vert, menthe, sucre, soda" },
        { name: "Cuba Libre", description: "Rhum, Coca-Cola, citron" },
        { name: "Piña Colada", description: "Rhum, coco, ananas" },
        { name: "Americano" },
        { name: "Aperol Spritz" },
      ],
    },
    {
      title: "Bières",
      items: [
        { name: "Pression 25cl", price: "4,50 EUR" },
        { name: "Pression 50cl", price: "7 EUR" },
        { name: "Bouteille 33cl", price: "4,50 EUR", description: "Singha, Chang, Nastro Azzurro, Beyrouth, Desperados" },
        { name: "Corona", price: "5 EUR" },
        { name: "Bud", price: "4,90 EUR" },
      ],
    },
    {
      title: "Softs",
      items: [
        { name: "Coca-Cola 35cl", price: "3,50 EUR" },
        { name: "Orangina 33cl", price: "3,50 EUR" },
        { name: "Oasis 33cl", price: "3,50 EUR" },
        { name: "San Pellegrino", price: "2,50 à 3,50 EUR", description: "50cl ou 100cl" },
        { name: "Evian", price: "2 à 3 EUR", description: "50cl ou 100cl" },
        { name: "Mogu Mogu 25cl", price: "3,50 EUR" },
        { name: "Ice Tea 33cl", price: "3,50 EUR" },
        { name: "Jus Kookaburra", price: "4,50 EUR" },
      ],
    },
    {
      title: "Vins rouges",
      items: [
        { name: "Dom Chassin", price: "6 EUR le verre / 30 EUR la bouteille" },
        { name: "Château Thouarame", price: "4,50 EUR le verre / 25 EUR la bouteille" },
        { name: "La Couloubre", price: "4,50 EUR le verre / 25 EUR la bouteille" },
      ],
    },
    {
      title: "Vins blancs",
      items: [
        { name: "Dom Chassin", price: "6 EUR le verre / 25 EUR la bouteille" },
        { name: "Aubépine", price: "4,50 EUR le verre / 25 EUR la bouteille" },
        { name: "Angèle", price: "4,50 EUR le verre / 25 EUR la bouteille" },
      ],
    },
    {
      title: "Champagne",
      items: [{ name: "Champagne 1er Cru", price: "50 EUR la bouteille" }],
    },
  ],
  menuNote: "Carte et prix indicatifs peuvent varier.",
};

export function getStandBySlug(slug: string) {
  return stands.find((stand) => stand.slug === slug);
}
