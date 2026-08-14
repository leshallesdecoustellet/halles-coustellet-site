export const site = {
  name: "Les Halles de Coustellet",
  legalName: "Les Halles de Coustellet Foodcourt",
  shortName: "Les Halles de Coustellet",
  description:
    "Foodcourt en plein air au coeur du Luberon : 6 cuisines independantes, une terrasse commune, des concerts et des soirees a partager en famille ou entre amis.",
  url: "https://www.leshallesdecoustellet.fr",
  phone: "+33422912930",
  phoneDisplay: "04 22 91 29 30",
  address: {
    street: "1 Rue du Syrah",
    postalCode: "84580",
    city: "Oppede",
    cityDisplay: "Oppede (Coustellet)",
    region: "Provence-Alpes-Cote d'Azur",
    country: "FR",
  },
  geo: {
    // Approximate coordinates for Coustellet, Oppede, Luberon.
    // A CONFIRMER avec le client / releve GPS exact avant mise en production.
    latitude: 43.8847,
    longitude: 5.1414,
  },
  hours: [
    { days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "11:30", closes: "14:00" },
    { days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:30", closes: "21:30" },
  ],
  hoursDisplay: [
    { label: "Mardi - Samedi", value: "11h30 - 14h00" },
    { label: "Mardi - Samedi (soir)", value: "18h30 - 21h30" },
    { label: "Dimanche & lundi", value: "Ferme" },
  ],
  social: {
    instagram: "https://www.instagram.com/leshallesdecoustellet/",
    facebook: "https://www.facebook.com/leshallesdecoustellet/",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/cuisines", label: "Nos cuisines" },
  { href: "/infos-pratiques", label: "Infos pratiques" },
  { href: "/contact", label: "Contact" },
] as const;
