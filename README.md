# Assbane Therapy

Site vitrine pour **Assbane Therapy** — cabinet de kinésithérapie, ostéopathie et acupuncture.

Site statique en HTML/CSS/JavaScript pur, prêt à être hébergé sur **Hostinger** par simple upload FTP.

## Aperçu

- **4 pages** : Accueil, Services & Tarifs, Avis clients, Contact
- **Design** : palette terracotta / crème, typographies Cormorant Garamond + Lato
- **Responsive** : mobile-first (375px → 1440px+)
- **Accessibilité** : `prefers-reduced-motion`, focus visibles, sémantique HTML5
- **Animations** : reveal au scroll (IntersectionObserver), hover subtils, menu mobile animé
- **Aucune dépendance** : pas de framework, pas de build tool, pas de Node.js

## Structure des fichiers

```
assbane-therapy/
├── index.html          # Accueil — hero, équipe, services
├── services.html       # Détail des 3 services + tarifs
├── avis.html           # Témoignages patients (6 cartes)
├── contact.html        # Coordonnées + formulaire de réservation
├── style.css           # Feuille de style globale
├── main.js             # Menu mobile + animations scroll
├── assets/
│   └── logo.png        # Logo du cabinet (à déposer)
└── README.md
```

## Mise en ligne sur Hostinger

1. Connectez-vous au panneau d'administration **hPanel** Hostinger
2. Ouvrez le **gestionnaire de fichiers** (File Manager) ou utilisez un client FTP (FileZilla)
3. Naviguez jusqu'au dossier `public_html/` de votre domaine
4. Uploadez **tous les fichiers** du dossier `assbane-therapy/` à la racine de `public_html/`
5. Vérifiez que `assets/logo.png` est bien présent
6. Visitez votre nom de domaine — le site est en ligne

## Personnalisation

Champs à remplacer (recherche/remplacement dans les 4 fichiers HTML) :

| Placeholder | À remplacer par |
|---|---|
| `[Adresse du cabinet]` | Adresse complète |
| `[Numéro de téléphone]` | Téléphone du cabinet |
| `[Nom]` dans `Dr. Renard`, `Dr. Chen` | Noms réels des praticiens |
| Carte Google Maps placeholder | iframe Google Maps |

### Logo

Déposez le logo PNG dans `assets/logo.png`. Le code prévoit un fallback élégant si le fichier est absent.

### Couleurs

Toutes les couleurs sont définies en variables CSS au début de [style.css](style.css) (`:root { --color-primary: ... }`). Modifiez-les une seule fois pour rebrander tout le site.

### Formulaire de contact

Le formulaire de réservation utilise `mailto:contact@assbanetherapy.be` (méthode POST, type texte brut). À la soumission, il ouvre le client mail de l'utilisateur avec un brouillon pré-rempli.

> Pour un envoi serveur direct (sans dépendre du client mail), envisagez d'intégrer un service comme **Formspree** ou **Web3Forms** — il suffit de modifier l'attribut `action` du `<form>` dans [contact.html](contact.html).

## Développement local

Aucun build requis. Ouvrez simplement `index.html` dans un navigateur, ou utilisez un serveur local léger :

```bash
# Python 3
python -m http.server 8000

# Node (si installé)
npx serve .
```

Puis ouvrez `http://localhost:8000`.

## Crédits

- **Typographies** : [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) & [Lato](https://fonts.google.com/specimen/Lato) (Google Fonts)
- **Icônes** : SVG inline (Feather Icons inspirés)
- **Design & développement** : conçu sur mesure pour Assbane Therapy

## Licence

Code propriétaire — © 2026 Assbane Therapy. Tous droits réservés.
