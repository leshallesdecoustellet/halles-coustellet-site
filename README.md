# Les Halles de Coustellet - site vitrine

Site Next.js 14 (App Router) + Tailwind CSS + Framer Motion pour le foodcourt Les Halles de Coustellet (Oppede, Luberon).

## Demarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

Site en 4 pages (forfait client 5 pages, 1 page en reserve), hors pages legales offertes :

- `/` - Accueil (`src/app/page.tsx`)
- `/cuisines` - Les 6 cuisines, chacune en section ancree sur une seule page (`src/app/cuisines/page.tsx`), remplace les anciennes pages individuelles `/stands/[slug]`.
- `/infos-pratiques` - Horaires et adresse (`src/app/infos-pratiques/page.tsx`).
- `/contact` - Formulaire et coordonnees (`src/app/contact/page.tsx`).
- `src/content/stands.ts` - contenu editorial des 6 cuisines (cartes reelles transcrites, textes narratifs provisoires).
- `src/lib/site.ts` - informations NAP (nom, adresse, telephone, horaires) utilisees pour le schema.org et les pages infos/contact.
- `src/components` - composants partages (nav, footer, cartes, placeholders photo, etc).
- `public/images` - photos et logos reels fournis, organises par stand. `source-assets/` (racine du projet) contient les fichiers originaux bruts.

## A confirmer avant mise en production

- Horaires : confirmes par la signaletique officielle du client. Cas particuliers (traiteur, jours feries, periode hivernale) a verifier avec l'exploitant.
- Adresse : le brief indique "1 Rue du Grenache", confirmee "1 Rue de la Syrah" par l'enseigne sur place et une photo du client.
- Photos manquantes : ambiance en soiree et concerts/evenements affichent encore un placeholder "Photo a venir", en attente des visuels definitifs. La crêperie n'a pas de logo fourni par le client.
- Numeros de telephone par stand : ajoutes sur `/cuisines`, a partir d'une affiche fournie par le client - a faire valider avant publication.
- Formulaire de contact (`/contact`) : l'UI est fonctionnelle mais la soumission n'est pas encore branchee a un service d'envoi d'email (voir commentaire dans `src/components/ContactForm.tsx`). Le client doit encore valider s'il le garde.
- Coordonnees GPS dans `src/lib/site.ts` (`geo`) sont approximatives.
