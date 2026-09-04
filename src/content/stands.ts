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
    subtitle: "Saucisses, noix d'entrecôte et ribs à la plancha, tout juste grillés",
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
      "Saucisses, noix d'entrecôte et ribs passeront à la plancha, accompagnés de frites maison. La carte complète sera dévoilée à l'ouverture.",
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
        title: "Ce qui vous attend",
        note: "Carte complète et prix à confirmer avant l'ouverture.",
        items: [
          { name: "Saucisses grillées" },
          { name: "Noix d'entrecôte" },
          { name: "Ribs" },
          { name: "Frites maison" },
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
    subtitle: "Mezze, houmous maison et grillades du Liban",
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
      "Les Délices du Liban ouvrent leur comptoir avec les classiques du mezze : houmous, baba ghanouj, falafels croustillants et feuilles de vigne farcies au riz.",
      "Les assiettes des saveurs rassemblent le meilleur de la table libanaise, du kefta grillé au tzatziki maison, servis avec du pain libanais tout juste chaud.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce que le mezze se partage. Les assiettes sont pensées pour être posées au centre de la table, à picorer à plusieurs, comme au Liban.",
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
        title: "Mezze",
        items: [
          { name: "Houmous", price: "7 EUR", description: "Purée de pois chiches, crème de sésame" },
          { name: "Houmous au bœuf et agneau", price: "10 EUR" },
          { name: "Baba Ghanouj", price: "7 EUR", description: "Caviar d'aubergine, crème de sésame" },
          { name: "Tzatziki au makdous", price: "7 EUR", description: "Fromage blanc, herbes, ail, concombre, aubergine farcie" },
          { name: "Feuilles de vigne", price: "7 EUR", description: "6 feuilles de vigne farcies au riz" },
          { name: "Le Falafel (vegan)", price: "13 EUR", description: "Falafels, crème d'ail, salade, tomate, cornichon" },
        ],
      },
      {
        title: "Grillades et sandwichs",
        items: [
          { name: "Kebab à la grecque", price: "16 EUR", description: "Kefta bœuf et agneau, tzatziki, concombre, oignon rouge, frites, tomates" },
          { name: "Kebab au poulet", price: "15 EUR", description: "Lamelles de poulet, chou rouge, salade, tomates, oignon, sauce maison, frites" },
          { name: "Arayess Kafta", price: "15 EUR", description: "Kafta maison dans le pain libanais croustillant, frites, tomate, cornichon" },
          { name: "Chawarma", price: "15 EUR", description: "Lamelles de poulet, crème d'ail, salade, cornichon, frites" },
          { name: "Sujouk", price: "14 EUR", description: "Saucisse arménienne grillée, salade, tomate, cornichon, harissa, crème d'ail" },
        ],
      },
      {
        title: "Assiettes et desserts",
        items: [
          { name: "Assiette des saveurs", price: "20 EUR", description: "Kefta, poulet, soujouk, houmous, rouleaux de fromage, falafels, tzatziki, pain libanais" },
          { name: "Assiette végétarienne", price: "20 EUR", description: "Houmous, baba ghanouj, feuilles de vigne, falafels, rouleaux de fromage, tzatziki, aubergine farcie" },
          { name: "Lebanese Frozen Yogurt", price: "4 à 6 EUR", description: "Nature, miel et noix, fleur de pistache, rouge d'été" },
        ],
      },
    ],
  },
  {
    slug: "gastronomique",
    cuisine: "Gastronomique",
    brandName: "Le Comptoir du Marché",
    title: "Gastronomique",
    position: "Haut droit du demi-cercle",
    subtitle: "Cuisine gastronomique, locale et équilibrée, par Dorothée Flament",
    phone: "+33622701967",
    phoneDisplay: "06 22 70 19 67",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61573043373165",
    },
    heroImage: "/images/stands/gastronomique/assiette-signature.jpg",
    heroImageAlt: "Dressage soigné d'une assiette au Comptoir du Marché, cuisine gastronomique et locale",
    cardImage: "/images/stands/gastronomique/assiette-signature.jpg",
    cardImageAlt: "Dressage soigné d'une assiette au Comptoir du Marché",
    paragraph: [
      "Au Comptoir du Marché, la cheffe Dorothée Flament compose une carte qui change au fil du marché : magret de canard au miel de Provence, travers de porc de montagne, poke bowls frais au thon ou au poulet mariné.",
      "Une cuisine soignée, sans chichi, qui reste fidèle aux produits locaux et de saison.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce qu'un food court peut aussi être gastronomique. Les assiettes sont dressées avec le même soin qu'au restaurant, avec des produits sourcés localement et une carte qui suit les saisons.",
    logoImage: "/images/stands/gastronomique/logo.jpg",
    logoImageAlt: "Logo Le Comptoir du Marché, cuisine gastronomique locale et équilibrée par Dorothée Flament",
    gallery: [
      {
        src: "/images/stands/gastronomique/stand-facade.jpg",
        alt: "Façade du stand Le Comptoir du Marché aux Halles de Coustellet",
      },
      {
        src: "/images/stands/gastronomique/assiette-canard-legumes.jpg",
        alt: "Assiette de canard grillé, légumes de saison rôties",
      },
      {
        src: "/images/stands/gastronomique/assiette-poisson-foam.jpg",
        alt: "Filet de poisson, écume et légumes croquants",
      },
      {
        src: "/images/stands/gastronomique/souris-agneau-couscous.jpg",
        alt: "Souris d'agneau rôti, couscous aux fruits secs et légumes",
      },
      {
        src: "/images/stands/gastronomique/poulpe-grille.jpg",
        alt: "Poulpe grillé, écume au beurre et agrumes",
      },
      {
        src: "/images/stands/gastronomique/bar-grille-foam.jpg",
        alt: "Bar grillé, écume et légumes de saison",
      },
      {
        src: "/images/stands/gastronomique/salade-cesar-poulet.jpg",
        alt: "Salade César, poulet et œuf parfait",
      },
      {
        src: "/images/stands/gastronomique/joue-boeuf-puree.jpg",
        alt: "Joue de bœuf confite, purée maison et légumes rôtis",
      },
      {
        src: "/images/stands/gastronomique/magret-canard-cerises.jpg",
        alt: "Magret de canard, cerises fraîches et légumes rôtis",
      },
    ],
    menu: [
      {
        title: "Plats du jour",
        note: "La carte change selon le marché et les saisons.",
        items: [
          { name: "Tranche de thon aller-retour", price: "19 EUR", description: "Pastèque brûlée, purée, légumes" },
          { name: "Travers de porc de montagne", price: "17 EUR", description: "Pommes de terre grenailles, légumes rôtis" },
          { name: "Magret de canard au miel de Provence", price: "19 EUR", description: "Gratin dauphinois, légumes rôtis" },
          { name: "Dinde fermière", price: "17 EUR", description: "Gratin dauphinois, légumes rôtis" },
        ],
      },
      {
        title: "Poke bowl",
        note: "Riz à sushi, fèves, quinoa, brunoise de légumes, wakame, crudités.",
        items: [
          { name: "Tataki de thon", price: "15 EUR", description: "Sweet chili, coriandre" },
          { name: "Poulet mariné", price: "15 EUR", description: "Sweet chili, coriandre" },
          { name: "Végé / vegan", price: "13 EUR" },
        ],
      },
      {
        title: "Salade",
        items: [
          { name: "Salade César", price: "15 EUR", description: "Filet de poulet, romaine, lardons, croûtons, sauce César maison, œuf parfait" },
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
    slug: "espagnole",
    cuisine: "Espagnole",
    brandName: "O Tapas'Fin",
    title: "Espagnole",
    position: "Tout à droite du demi-cercle",
    subtitle: "O Tapas'Fin : planches, tapas et salades à partager",
    phone: "+33616185850",
    phoneDisplay: "06 16 18 58 50",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61583622446834",
      instagram: "https://www.instagram.com/otapasfin",
    },
    heroImage: "/images/stands/espagnole/tapas-pinchos.jpg",
    heroImageAlt: "Pinchos et tapas espagnoles à la charcuterie, présentées sur planche",
    cardImage: "/images/stands/espagnole/tapas-pinchos.jpg",
    cardImageAlt: "Pinchos et tapas espagnoles à la charcuterie",
    logoImage: "/images/stands/espagnole/logo.jpg",
    logoImageAlt: "Logo O Tapas'Fin, authentique, simple et sincère",
    paragraph: [
      "Chez O Tapas'Fin, la devise est simple : authentique, simple et sincère. Croquettes maison, patatas bravas, planches de charcuterie et de fromage, salades à la burrata.",
      "La carte invite à grignoter longtemps, verre à la main, en terrasse, entre amis.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce que les tapas se dégustent lentement, à plusieurs, avec le temps de la conversation. Tout est fait maison.",
    gallery: [
      {
        src: "/images/stands/espagnole/tapas-pinchos.jpg",
        alt: "Pinchos et tapas à la charcuterie, planche à partager",
      },
      {
        src: "/images/stands/espagnole/penne-burrata-pesto.jpg",
        alt: "Penne, tomates confites, burrata et pesto",
      },
      {
        src: "/images/stands/espagnole/bruschetta-fleur-1.jpg",
        alt: "Bruschetta de légumes grillés, fleur comestible",
      },
      {
        src: "/images/stands/espagnole/bruschetta-burrata.jpg",
        alt: "Bruschetta tomates confites et billes de burrata",
      },
      {
        src: "/images/stands/espagnole/tartare-patatas.jpg",
        alt: "Tartare de tomates et patatas, roquette",
      },
    ],
    menu: [
      {
        title: "Salades",
        items: [
          { name: "Burrata, tomate, pesto basilic, jambon cru", price: "14 EUR" },
          { name: "Pêche rôtie, mesclun, burrata, jambon cru", price: "14 EUR" },
          { name: "Penne, tomates confites, burrata, roquette, pesto", price: "14 EUR" },
          { name: "Melon, jambon cru, burrata, pesto", price: "14 EUR" },
        ],
      },
      {
        title: "Planches",
        items: [
          { name: "Charcuterie", price: "14 EUR / 24 EUR", description: "Petite ou grande" },
          { name: "Fromage", price: "15 EUR / 25 EUR", description: "Petite ou grande" },
          { name: "Mixte", price: "17 EUR / 27 EUR", description: "Petite ou grande" },
        ],
      },
      {
        title: "Tapas",
        items: [
          { name: "Croquette aligot truffe (x5)", price: "4,5 EUR" },
          { name: "Croquette jambon fromage", price: "4 EUR" },
          { name: "Stick mozza", price: "4 EUR" },
          { name: "Patatas bravas, aïoli", price: "6 EUR" },
          { name: "Chili cheese", price: "4 EUR" },
          { name: "Seiche persillade", price: "7 EUR" },
          { name: "Pan con tomate", price: "7 EUR" },
          { name: "Crevette espagnole", price: "7 EUR" },
          { name: "Calamars frits", price: "6 EUR" },
          { name: "Stracciatella, pesto", price: "7 EUR" },
          { name: "Pinsa mortadelle, burrata, pesto", price: "11 EUR" },
          { name: "Tex-Mex", price: "16 EUR", description: "Guacamole, salsa, chili cheese, stick mozza, nachos" },
          { name: "Assortiment Pinxos", price: "13 EUR", description: "4 pinxos au choix, avec salade" },
        ],
      },
    ],
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
  menuNote: "Carte photographiée sur place aux Halles ; noms des vins à reconfirmer avec l'exploitant avant publication.",
};

export function getStandBySlug(slug: string) {
  return stands.find((stand) => stand.slug === slug);
}
