export const site = {
  name: "Les Halles de Coustellet",
  legalName: "Les Halles de Coustellet Foodcourt",
  shortName: "Les Halles de Coustellet",
  description:
    "Foodcourt en plein air au cœur du Luberon : 6 cuisines indépendantes, une terrasse commune, des concerts et des soirées à partager en famille ou entre amis.",
  url: "https://www.leshallesdecoustellet.fr",
  phone: "+33422912930",
  phoneDisplay: "04 22 91 29 30",
  email: "ladolcevita84@yahoo.fr",
  address: {
    street: "1 Rue de la Syrah",
    postalCode: "84580",
    city: "Oppède",
    cityDisplay: "Oppède (Coustellet)",
    region: "Provence-Alpes-Côte d'Azur",
    country: "FR",
  },
  geo: {
    // Approximate coordinates for Coustellet, Oppède, Luberon.
    // A CONFIRMER avec le client / relevé GPS exact avant mise en production.
    latitude: 43.8847,
    longitude: 5.1414,
  },
  hours: [
    { days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "11:30", closes: "14:00" },
    { days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:30", closes: "21:00" },
  ],
  hoursDisplay: [
    { label: "Mardi - Samedi", value: "11h30 - 14h00" },
    { label: "Mardi - Samedi (soir)", value: "18h30 - 21h00" },
    { label: "Dimanche & lundi", value: "Fermé" },
    { label: "Fermeture annuelle", value: "15 décembre - 15 février" },
  ],
  social: {
    instagram: "https://www.instagram.com/leshallesdecoustellet/",
    facebook: "https://www.facebook.com/leshallesdecoustellet/",
  },
  legal: {
    companyName: "MAXELISA",
    legalForm: "Société à responsabilité limitée (SARL)",
    shareCapital: "10 000,00 Euros",
    registeredOffice: "1 Rue de la Syrah, 84580 Oppède",
    rcs: "750 116 501 R.C.S. Avignon",
    // SIRET déduit du SIREN présent sur le KBIS (750 116 501) + code établissement 00019.
    // À faire confirmer par le client avant publication : le KBIS ne montre que le SIREN.
    siret: "750 116 501 00019",
    director: "M. Riccardo PALADINI",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/cuisines", label: "Nos cuisines" },
  { href: "/infos-pratiques", label: "Infos pratiques" },
  { href: "/contact", label: "Contact" },
] as const;
