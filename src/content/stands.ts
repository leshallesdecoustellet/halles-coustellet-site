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
  gallery: GalleryImage[];
  menu: MenuSection[];
  menuNote?: string;
};

export const stands: Stand[] = [
  {
    slug: "creperie",
    cuisine: "Creperie",
    title: "Creperie",
    position: "Tout a gauche du demi-cercle",
    subtitle: "Galettes de sarrasin et crepes gourmandes, entre Bretagne et Luberon",
    phone: "+33679572724",
    phoneDisplay: "06 79 57 27 24",
    heroImage: "/images/venue/disposition-1.jpg",
    heroImageAlt: "Le stand creperie des Halles de Coustellet a la tombee du jour, guirlandes lumineuses et tables en bois",
    heroObjectPosition: "object-[26%_48%]",
    cardImage: "/images/stands/creperie/galette-bretonne.jpg",
    cardImageAlt: "Galette de sarrasin traditionnelle, farine de ble noir et beurre",
    paragraph: [
      "Ici, la galette se fait au ble noir, la vraie, celle qui craque sous la dent et qui n'a besoin de rien d'autre qu'un bon jambon et un oeuf bien frais pour etre parfaite.",
      "La farine de sarrasin bio vient du Moulin Saint Joseph, a Grans, et la recette reste fidele a la tradition bretonne : cent pour cent sarrasin, sans gluten. Cote sucre, les crepes filent au beurre sale, au miel et aux amandes, ou tout simplement au sucre, pour les puristes.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce qu'une bonne galette ne triche pas. Une pate travaillee a la farine tracee jusqu'au moulin, et des garnitures pensees pour plaire aux enfants comme aux amateurs de saveurs plus franches, chevre-miel ou Belle de Morteau en tete.",
    gallery: [
      {
        src: "/images/stands/creperie/galette-jambon-oeuf.jpg",
        alt: "Galette de sarrasin garnie jambon et oeuf",
      },
      { alt: "Crepe sucree pliee, servie sur assiette en terrasse" },
      { alt: "Preparation d'une galette sur le billig du stand creperie" },
    ],
    menu: [
      {
        title: "Galettes de sarrasin (sans gluten)",
        items: [
          { name: "La Complete", price: "12 EUR", description: "Emmental, jambon superieur, oeuf bio" },
          { name: "La Complete Chevre", price: "13,5 EUR", description: "Emmental, jambon superieur, oeuf bio, chevre" },
          { name: "La Complete Champignons", price: "13,5 EUR", description: "Emmental, jambon superieur, oeuf bio, champignons" },
          { name: "La Veggie", price: "13,5 EUR", description: "2 oeufs bio, emmental, mozzarella, noix, tomates, huile d'olive, basilic" },
          { name: "La Belle de Morteau", price: "14 EUR", description: "Saucisse de Morteau grillee, oignons, champignons, emmental" },
          { name: "La Chevre-Miel", price: "12 EUR", description: "Emmental, chevre, miel et noix" },
          { name: "La Chef", price: "14,5 EUR", description: "Poulet, emmental, chorizo, tomates fraiches, basilic" },
          { name: "L'Andalouse", price: "13 EUR", description: "Emmental, chorizo, champignons sautes, tome de brebis" },
        ],
      },
      {
        title: "Crepes sucrees (farine de froment)",
        items: [
          { name: "Sucre", price: "3 EUR" },
          { name: "Sucre et citron frais", price: "3,5 EUR" },
          { name: "Beurre sale et sucre", price: "3,5 EUR" },
          { name: "Miel et amandes", price: "5 EUR" },
          { name: "Caramel beurre sale maison", price: "4 EUR" },
          { name: "Caramel beurre sale et amandes", price: "5 EUR" },
          { name: "Banane et caramel beurre sale", price: "5 EUR" },
          { name: "Nutella", price: "4 EUR" },
          { name: "Banane et Nutella", price: "5 EUR" },
          { name: "Creme de marron", price: "4 EUR" },
          { name: "Supplement chantilly", price: "1 EUR" },
        ],
      },
      {
        title: "A cote",
        items: [
          { name: "Bol de salade verte", price: "2 EUR" },
          { name: "Supplement oeuf bio", price: "1,5 EUR" },
          { name: "Ingredient supplementaire", price: "1,5 EUR" },
          { name: "Menu enfant", price: "12 EUR", description: "Galette jambon fromage, crepe au sucre (Nutella +2 EUR)" },
        ],
      },
    ],
  },
  {
    slug: "thailandaise",
    cuisine: "Thailandaise",
    brandName: "Thai Food Moon",
    title: "Thailandaise",
    position: "Diagonale gauche du demi-cercle",
    subtitle: "Currys parfumes, nouilles sautees et saveurs de Bangkok",
    phone: "+33609644394",
    phoneDisplay: "06 09 64 43 94",
    heroImage: "/images/stands/thailandaise/carte-comptoir.jpg",
    heroImageAlt: "Comptoir du stand Thai Food Moon avec lanternes et bouddhas porte-bonheur",
    heroObjectPosition: "object-[50%_62%]",
    cardImage: "/images/stands/thailandaise/nouilles-sautees.jpg",
    cardImageAlt: "Nouilles sautees thailandaises, poulet, cacahuetes et coriandre",
    logoImage: "/images/stands/thailandaise/logo.jpg",
    logoImageAlt: "Logo Thai Food Moon",
    social: {
      facebook: "https://www.facebook.com/moonthaifood.2023/photos",
    },
    paragraph: [
      "Sous l'enseigne Thai Food Moon, la cuisine thailandaise s'installe aux Halles avec ses currys verts et jaunes, ses soupes tom yam relevees et ses pad thai sautes minute.",
      "Les bols voyagent entre le sucre du riz gluant a la mangue et le piquant du pad kra pao. Une cuisine vive, genereuse, pensee pour etre partagee a plusieurs.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce que la cuisine thailandaise ne se resume pas au pad thai. Chaque plat est prepare a la demande, avec des herbes fraiches et un vrai sens du dosage entre sucre, sale, acide et pimente.",
    gallery: [
      {
        src: "/images/stands/thailandaise/stand-facade.jpg",
        alt: "Facade du stand Thai Food Moon aux Halles de Coustellet",
      },
      {
        src: "/images/stands/thailandaise/pad-thai.jpg",
        alt: "Pad thai aux crevettes, cacahuetes concassees",
      },
      { alt: "Riz gluant a la mangue, dessert thailandais" },
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
          { name: "Nasi Goreng", description: "Riz frit a la balinaise", price: "16 EUR (crevettes ou poulet)" },
          { name: "Khao Pad Sapparod", price: "18 EUR", description: "Riz frit a l'ananas, crevettes ou poulet" },
          { name: "Curry vert ou curry jaune", price: "15 a 16 EUR", description: "Poulet ou crevettes" },
          { name: "Pad Thai", description: "Nouilles de riz, sauce tamarin", price: "15 a 17 EUR (poulet, crevettes, boeuf, vegetarien)" },
          { name: "Pad Kra Pao", description: "Basilic thai, riz, oeuf", price: "16 EUR (poulet, porc ou boeuf)" },
        ],
      },
      {
        title: "Salades et desserts",
        items: [
          { name: "Laab Moo", price: "17 EUR", description: "Salade de porc" },
          { name: "Som Tam", price: "18 EUR", description: "Salade de papaye verte" },
          { name: "Kung Pad", price: "16 EUR", description: "Crevettes, legumes, sauce aigre-douce, riz" },
          { name: "Gai Pad", price: "16 EUR", description: "Poulet, legumes, sauce aigre-douce, riz" },
          { name: "Mango Sticky Rice", price: "10 EUR", description: "Mangue, riz gluant, lait de coco, cacahuetes" },
        ],
      },
    ],
    menuNote: "Ouvert du mardi au samedi, 11h30-14h et 18h30-21h30, sur place ou a emporter.",
  },
  {
    slug: "libanaise",
    cuisine: "Libanaise",
    brandName: "Les Delices du Liban",
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
    cardImageAlt: "Plateau de mezze libanais avec houmous, falafels et kefta grillee",
    logoImage: "/images/stands/libanaise/logo.jpg",
    logoImageAlt: "Logo Les Delices du Liban",
    paragraph: [
      "Les Delices du Liban ouvrent leur comptoir avec les classiques du mezze : houmous, baba ghanouj, falafels croustillants et feuilles de vigne farcies au riz.",
      "Les assiettes des saveurs rassemblent le meilleur de la table libanaise, du kefta grille au tzatziki maison, servis avec du pain libanais tout juste chaud.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce que le mezze se partage. Les assiettes sont pensees pour etre posees au centre de la table, a picorer a plusieurs, comme au Liban.",
    gallery: [
      {
        src: "/images/stands/libanaise/stand-facade.jpg",
        alt: "Facade du stand Les Delices du Liban aux Halles de Coustellet",
      },
      {
        src: "/images/stands/libanaise/plateau-mixte-1.jpg",
        alt: "Plateau mixte : brochettes, houmous, patatas et fattoush",
      },
      {
        src: "/images/stands/libanaise/table-partagee-mezze.jpg",
        alt: "Table partagee de mezze libanais, vue du dessus",
      },
      {
        src: "/images/stands/libanaise/chawarma-frites.jpg",
        alt: "Chawarma roule, servi avec frites maison",
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
          { name: "Houmous", price: "7 EUR", description: "Puree de pois chiches, creme de sesame" },
          { name: "Houmous au boeuf et agneau", price: "10 EUR" },
          { name: "Baba Ghanouj", price: "7 EUR", description: "Caviar d'aubergine, creme de sesame" },
          { name: "Tzatziki au makdous", price: "7 EUR", description: "Fromage blanc, herbes, ail, concombre, aubergine farcie" },
          { name: "Feuilles de vigne", price: "7 EUR", description: "6 feuilles de vigne farcies au riz" },
          { name: "Le Falafel (vegan)", price: "13 EUR", description: "Falafels, creme d'ail, salade, tomate, cornichon" },
        ],
      },
      {
        title: "Grillades et sandwichs",
        items: [
          { name: "Kebab a la grecque", price: "16 EUR", description: "Kefta boeuf et agneau, tzatziki, concombre, oignon rouge, frites, tomates" },
          { name: "Kebab au poulet", price: "15 EUR", description: "Lamelles de poulet, chou rouge, salade, tomates, oignon, sauce maison, frites" },
          { name: "Arayess Kafta", price: "15 EUR", description: "Kafta maison dans le pain libanais croustillant, frites, tomate, cornichon" },
          { name: "Chawarma", price: "15 EUR", description: "Lamelles de poulet, creme d'ail, salade, cornichon, frites" },
          { name: "Sujouk", price: "14 EUR", description: "Saucisse armenienne grillee, salade, tomate, cornichon, harissa, creme d'ail" },
        ],
      },
      {
        title: "Assiettes et desserts",
        items: [
          { name: "Assiette des saveurs", price: "20 EUR", description: "Kefta, poulet, soujouk, houmous, rouleaux de fromage, falafels, tzatziki, pain libanais" },
          { name: "Assiette vegetarien", price: "20 EUR", description: "Houmous, baba ghanouj, feuilles de vigne, falafels, rouleaux de fromage, tzatziki, aubergine farcie" },
          { name: "Lebanese Frozen Yogurt", price: "4 a 6 EUR", description: "Nature, miel et noix, fleur de pistache, rouge d'ete" },
        ],
      },
    ],
  },
  {
    slug: "gastronomique",
    cuisine: "Gastronomique",
    brandName: "Le Comptoir du Marche",
    title: "Gastronomique",
    position: "Haut droit du demi-cercle",
    subtitle: "Cuisine gastronomique, locale et equilibree, par Dorothee Flament",
    phone: "+33622701967",
    phoneDisplay: "06 22 70 19 67",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61573043373165",
    },
    heroImage: "/images/stands/gastronomique/assiette-signature.jpg",
    heroImageAlt: "Dressage soigne d'une assiette au Comptoir du Marche, cuisine gastronomique et locale",
    cardImage: "/images/stands/gastronomique/assiette-signature.jpg",
    cardImageAlt: "Dressage soigne d'une assiette au Comptoir du Marche",
    paragraph: [
      "Au Comptoir du Marche, la cheffe Dorothee Flament compose une carte qui change au fil du marche : magret de canard au miel de Provence, travers de porc de montagne, poke bowls frais au thon ou au poulet marine.",
      "Une cuisine soignee, sans chichi, qui reste fidele aux produits locaux et de saison.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce qu'un food court peut aussi etre gastronomique. Les assiettes sont dressees avec le meme soin qu'au restaurant, avec des produits sources localement et une carte qui suit les saisons.",
    logoImage: "/images/stands/gastronomique/logo.jpg",
    logoImageAlt: "Logo Le Comptoir du Marche, cuisine gastronomique locale et equilibree par Dorothee Flament",
    gallery: [
      {
        src: "/images/stands/gastronomique/stand-facade.jpg",
        alt: "Facade du stand Le Comptoir du Marche aux Halles de Coustellet",
      },
      {
        src: "/images/stands/gastronomique/assiette-canard-legumes.jpg",
        alt: "Assiette de canard grille, legumes de saison roties",
      },
      {
        src: "/images/stands/gastronomique/assiette-poisson-foam.jpg",
        alt: "Filet de poisson, ecume et legumes croquants",
      },
      {
        src: "/images/stands/gastronomique/souris-agneau-couscous.jpg",
        alt: "Souris d'agneau roti, couscous aux fruits secs et legumes",
      },
      {
        src: "/images/stands/gastronomique/poulpe-grille.jpg",
        alt: "Poulpe grille, ecume au beurre et agrumes",
      },
      {
        src: "/images/stands/gastronomique/bar-grille-foam.jpg",
        alt: "Bar grille, ecume et legumes de saison",
      },
      {
        src: "/images/stands/gastronomique/salade-cesar-poulet.jpg",
        alt: "Salade Cesar, poulet et oeuf parfait",
      },
      {
        src: "/images/stands/gastronomique/joue-boeuf-puree.jpg",
        alt: "Joue de boeuf confite, puree maison et legumes rotis",
      },
      {
        src: "/images/stands/gastronomique/magret-canard-cerises.jpg",
        alt: "Magret de canard, cerises fraiches et legumes rotis",
      },
    ],
    menu: [
      {
        title: "Plats du jour",
        note: "La carte change selon le marche et les saisons.",
        items: [
          { name: "Tranche de thon aller-retour", price: "19 EUR", description: "Pasteque brulee, puree, legumes" },
          { name: "Travers de porc de montagne", price: "17 EUR", description: "Pommes de terre grenailles, legumes rotis" },
          { name: "Magret de canard au miel de Provence", price: "19 EUR", description: "Gratin dauphinois, legumes rotis" },
          { name: "Dinde fermiere", price: "17 EUR", description: "Gratin dauphinois, legumes rotis" },
        ],
      },
      {
        title: "Poke bowl",
        note: "Riz a sushi, feves, quinoa, brunoise de legumes, wakame, crudites.",
        items: [
          { name: "Tataki de thon", price: "15 EUR", description: "Sweet chili, coriandre" },
          { name: "Poulet marine", price: "15 EUR", description: "Sweet chili, coriandre" },
          { name: "Vege / vegan", price: "13 EUR" },
        ],
      },
      {
        title: "Salade",
        items: [
          { name: "Salade Cesar", price: "15 EUR", description: "Filet de poulet, romaine, lardons, croutons, sauce cesar maison, oeuf parfait" },
        ],
      },
    ],
  },
  {
    slug: "burger-tacos",
    cuisine: "Burger et Tacos",
    title: "Burger & Tacos",
    position: "Diagonale droite du demi-cercle",
    subtitle: "Burgers maison, pain d'artisan et french tacos a composer",
    phone: "+33623602797",
    phoneDisplay: "06 23 60 27 97",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100028342705475",
      instagram: "https://www.instagram.com/food.story.truck",
    },
    heroImage: "/images/venue/disposition-2.jpg",
    heroImageAlt: "Client passant commande au stand burger des Halles de Coustellet, lumiere du soir",
    heroObjectPosition: "object-[55%_45%]",
    cardImage: "/images/stands/burger-tacos/burger-fixings.jpg",
    cardImageAlt: "Burger maison bacon et cheddar, servi avec frites",
    logoImage: "/images/stands/burger-tacos/logo.jpg",
    logoImageAlt: "Logo Food Story Burger & Tacos",
    paragraph: [
      "Steaks haches frais, pain burger faconne par un artisan boulanger, frites maison : ce stand joue la carte americaine sans jamais sacrifier la qualite.",
      "Du Classic Burger au Truffo, en passant par le french tacos a composer soi-meme avec ses deux viandes et sa sauce, il y en a pour tous les appetits, petits et grands.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce qu'un bon burger se juge a la qualite de sa viande et de son pain. Tout est frais, fait maison, avec un vrai menu enfant pour les familles.",
    gallery: [
      {
        src: "/images/stands/burger-tacos/stand-facade.jpg",
        alt: "Facade du stand Food Story Burger & Tacos aux Halles de Coustellet",
      },
      {
        src: "/images/stands/burger-tacos/burger-en-main-1.jpg",
        alt: "Burger signature Food Story, tenu en main",
      },
      {
        src: "/images/stands/burger-tacos/burger-en-main-2.jpg",
        alt: "Burger Blue Cheese, bacon et oignons rouges caramelises",
      },
      {
        src: "/images/stands/burger-tacos/crispy-chicken-terrasse.jpg",
        alt: "Crispy Chicken degustee en terrasse",
      },
    ],
    menu: [
      {
        title: "Burgers",
        note: "Servis avec frites maison et une sauce au choix.",
        items: [
          { name: "Classic Burger", price: "13,5 EUR", description: "Steak hache frais 130g, salade, tomates, cheddar affine, sauce tartare, pickles" },
          { name: "Double Chessy", price: "14,5 EUR", description: "2 steaks haches frais 260g, double cheddar, ketchup, moutarde americaine, pickles" },
          { name: "Triple Cheese Bacon", price: "17 EUR", description: "3 steaks haches frais 390g, triple cheddar, bacon grille" },
          { name: "Crispy Chicken", price: "14 EUR", description: "Poulet pane, coleslaw, cheddar affine et fondu, sauce maison" },
          { name: "Veggie", price: "13,5 EUR", description: "Steak vegetal, cheddar, choux rouge marine, legumes grilles, sauce tartare" },
          { name: "Raclette", price: "14,5 EUR", description: "Steak hache ou poulet pane, raclette, bacon ou grison, oignons caramelises" },
          { name: "Blue Cheese", price: "14,5 EUR", description: "Steak hache, moutarde a l'ancienne, fromage bleu, oignons rouges caramelises, poitrine fumee" },
          { name: "Croq Burger", price: "14,9 EUR", description: "Pain de mie toaste, steak hache ou poulet pane, bacon grille, oignons caramelises" },
          { name: "Truffo", price: "16,5 EUR", description: "Steak hache, roquette, mayonnaise a la truffe, brie de Meaux AOP, poitrine fumee" },
          { name: "Spicy BBQ", price: "14,5 EUR", description: "Steak hache ou poulet pane, poitrine fumee, jalapenos, sauce barbecue piquante" },
        ],
      },
      {
        title: "French tacos",
        items: [
          { name: "Compose ton tacos", price: "13,5 EUR", description: "2 viandes au choix, 1 sauce, 1 garniture, 1 fromage, sauce fromagere maison incluse" },
        ],
      },
      {
        title: "A cote et menu enfant",
        items: [
          { name: "Fresh Fries", price: "9,9 EUR", description: "Maxi barquette, cheddar fondu, bacon ou grison, jalapenos" },
          { name: "Poulet pane x4", price: "6,9 EUR", description: "Avec 2 sauces au choix" },
          { name: "Barquette de frites maison", price: "3,5 EUR" },
          { name: "Menu Kids", price: "7 EUR", description: "Cheese burger ou tenders, frites et Capri-Sun" },
        ],
      },
    ],
    menuNote: "Pain burger faconne par un artisan boulanger, produits frais.",
  },
  {
    slug: "espagnole",
    cuisine: "Espagnole",
    brandName: "O Tapas'Fin",
    title: "Espagnole",
    position: "Tout a droite du demi-cercle",
    subtitle: "O Tapas'Fin : planches, tapas et salades a partager",
    phone: "+33616185850",
    phoneDisplay: "06 16 18 58 50",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61583622446834",
      instagram: "https://www.instagram.com/otapasfin",
    },
    heroImage: "/images/stands/espagnole/carte.jpg",
    heroImageAlt: "Ardoise des tapas du stand O Tapas'Fin, en terrasse aux Halles de Coustellet",
    cardImage: "/images/stands/espagnole/tapas-pinchos.jpg",
    cardImageAlt: "Pinchos et tapas espagnoles a la charcuterie",
    logoImage: "/images/stands/espagnole/logo.jpg",
    logoImageAlt: "Logo O Tapas'Fin, authentique, simple et sincere",
    paragraph: [
      "Chez O Tapas'Fin, la devise est simple : authentique, simple et sincere. Croquettes maison, patatas bravas, planches de charcuterie et de fromage, salades a la burrata.",
      "La carte invite a grignoter longtemps, verre a la main, en terrasse, entre amis.",
    ],
    whyTitle: "Pourquoi ce food truck",
    why: "Parce que les tapas se degustent lentement, a plusieurs, avec le temps de la conversation. Tout est fait maison.",
    gallery: [
      {
        src: "/images/stands/espagnole/tapas-pinchos.jpg",
        alt: "Pinchos et tapas a la charcuterie, planche a partager",
      },
      {
        src: "/images/stands/espagnole/penne-burrata-pesto.jpg",
        alt: "Penne, tomates confites, burrata et pesto",
      },
      {
        src: "/images/stands/espagnole/bruschetta-fleur-1.jpg",
        alt: "Bruschetta de legumes grilles, fleur comestible",
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
          { name: "Peche rotie, mesclun, burrata, jambon cru", price: "14 EUR" },
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
          { name: "Patatas bravas, aioli", price: "6 EUR" },
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

export function getStandBySlug(slug: string) {
  return stands.find((stand) => stand.slug === slug);
}
