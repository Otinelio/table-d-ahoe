━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROMPT LOVABLE — LA TABLE D'AHOÉ
Là où le charbon parle togolais · Lomé, Togo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Construis un site web React complet, mobile-first, pour "La Table d'Ahoé" — un rooftop bar & grill à Lomé au Togo. Pas de backend, pas de Supabase. Tout en localStorage avec envoi de commandes par WhatsApp. Le site doit dégager une identité nocturne, africaine et brûlante — comme si on avait confié le design à une agence de Lagos et la typographie à une maison parisienne. Aucun emoji dans l'interface. Toutes les icônes viennent de lucide-react.

— DONNÉES VÉRIFIÉES DU RESTAURANT —

Nom : La Table d'Ahoé
Tagline officielle : "Le RDV des amoureux de BBQ"
Signification : "Ahoé" = "qui vient de chez nous" en langue locale togolaise
Adresse : Hédzranawoé, Rue HDN 180, premier von à droite après la station Yatt & Co en venant de la foire Togo 2000, Lomé, Togo
WhatsApp / Téléphone : +22891016439
Horaires : Mercredi au Dimanche — à partir de 18h GMT
Devise : FCFA (Franc CFA)
Instagram : @la_table_dahoe
Facebook : /latabledahoe16
Spécialités : grillades épicées curry-coco, brochettes de poulet, fruits de mer, kanklo (beignets de banane), cocktails maison (ex : Bahia — rhum + ananas + lait de coco + menthe)
Fourchette de prix : 4 000–8 000 FCFA (grillades), 500–30 000 FCFA (boissons)
Services : Rooftop bar & grill + Service traiteur pour événements
Ambiance : chill, cosy, décor atypique aux couleurs d'Afrique, musique, soirées nocturnes
Position : #1 BBQ de Lomé selon les médias lifestyle locaux
Mot de passe admin : ahoe2025 (À CHANGER avant mise en ligne)

— ARCHITECTURE GLOBALE —

PAGES DE L'APPLICATION (même projet React, même codebase)

━ PUBLIC ━
/ → Home : hero cinématique, accroche, carte spécialités, témoignages, traiteur CTA
/menu → Menu : catalogue complet avec panier WhatsApp
/about → Notre histoire : ADN de la marque, Ahoé = chez nous, photos ambiance
/contact → Contact : adresse, horaires, carte, WhatsApp, réservation traiteur

━ RESTREINT (aucun lien dans la navigation) ━
/admin → Dashboard protégé mot de passe
/menu/scan → Menu sur place avec TableModal bloquant

NAVIGATION PUBLIQUE :
Mobile : bottom navigation bar fixe — icônes Home | UtensilsCrossed | Info | MapPin
Desktop : top navbar horizontale translucide
→ NE PAS créer de lien vers /admin ni /menu/scan dans la navigation publique

— VISION GLOBALE —

Le visiteur arrive sur le site et ressent quelque chose d'immédiat — la chaleur. Pas la chaleur tropicale de Lomé, mais celle du charbon qui rougeoie dans la nuit, de la braise qui crépite sous une brochette de poulet mariné au curry et au coco. L'écran est sombre comme le bois brûlé, traversé d'éclats cuivrés et de textures organiques qui évoquent les épices du marché. Chaque scroll est un pas de plus vers cette table en rooftop où la ville s'étend en bas, silencieuse, pendant que la musique monte et que les grillades parlent. Le site ne vend pas un restaurant — il invite à une expérience. Il murmure "Ahoé" : ici, tout vient de chez nous, pour toi.

— DIRECTION ESTHÉTIQUE —

Nom de la direction : "Charbon & Coco — Éditorial nocturne africain street-grill"

CE QUE LE SITE N'EST PAS :

1. Pas de restaurant template générique — aucune photo hero plein écran centrée avec bouton CTA flottant dessus. Jamais.
2. Pas de look "fast food africain" — aucune couleur rouge/jaune agressif, aucun fond blanc stérile.
3. Pas d'éditorial gastronomique parisien — pas de minimalisme froid, de grille symétrique rigide, de blanc cassé sur blanc cassé.

CE QUE LE SITE EST :

1. Magazine lifestyle nocturne de Lomé — typographie monumentale, espaces forts, compositions asymétriques qui cassent la grille en diagonale.
2. Un journal de feu — les images ont un grain chaud, un traitement ember qui rend chaque viande photographiée presque tactile.
3. Un objet éditorial qui appartient à l'Afrique de l'Ouest contemporaine — pas un tropisme exotique, mais une confiance tranquille dans son identité.

Grille : asymétrique, modulaire, cassures diagonales dans les transitions de section.
Fond général : sombre (#0D0A08), dense, habité par des textures grain très subtiles.
Caractère : animé mais jamais nerveux — tout est maîtrisé, chaleureux, habité.

— PALETTE —

Charbon nuit | Noir profond teinté brun, comme du bois carbonisé | #0D0A08 | Fond principal de toutes les pages
Braise cuivrée | Orange brûlé, chaleur du charbon en pleine combustion | #C45C1A | Couleur accent — uniquement sur : CTA principaux, prix, badge panier, séparateurs graphiques. Maximum 15% de l'interface.
Cendres chaudes | Gris-brun chaud, la cendre qui garde la mémoire du feu| #3D2F28 | Cartes, surfaces de contenu, nav mobile
Crème de coco | Blanc chaud presque beige, évoque le lait de coco | #F5EDE3 | Textes principaux, titres sur fond sombre
Épice dorée | Or pâle, safran togolais | #D4A853 | Éléments décoratifs, underlines, hover states — jamais utilisé en fond de surface large

— TYPOGRAPHIE —

FONT 1 — "Bebas Neue" (Google Fonts)
Pourquoi : monumentale, condensée, zéro empattement — elle impose. Évoque les enseignes de quartier de Lomé, pas les restaurants gastronomiques parisiens.

- Hero title : 96–140px (clamp responsive), weight 400 (la police n'a qu'un weight), tracking -0.02em, TOUT EN MAJUSCULES
- Titres section : 64px, tracking -0.01em, majuscules
- Labels catégorie menu : 20px, tracking 0.15em, majuscules
- Noms des plats : 24px, tracking 0.05em, majuscules

FONT 2 — "DM Sans" (Google Fonts)
Pourquoi : géométrique, lisible, discrète — elle laisse Bebas Neue dominer sans jamais disparaître.

- Corps de texte : 16px, weight 400, line-height 1.75, letter-spacing 0.01em
- Descriptions plats : 14px, weight 400, line-height 1.6, couleur #F5EDE3 à 70% opacité
- Prix : 18px, weight 700, couleur accent #C45C1A
- Boutons : 14px, weight 600, tracking 0.08em, majuscules
- Taglines : 13px, weight 400, tracking 0.12em, italic, couleur épice dorée #D4A853
- Navigation : 13px, weight 500, tracking 0.10em, majuscules

— ICÔNES — LUCIDE-REACT UNIQUEMENT —

Stroke width global : 1.5 (élégant, cohérent avec le caractère du brand)
Couleur par défaut : #F5EDE3 (crème de coco)
Couleur accent : #C45C1A sur les CTA et icônes d'action

Mapping complet — aucun emoji nulle part :

- Nav Home : Home (20px)
- Nav Menu : UtensilsCrossed (20px)
- Nav À propos : Info (20px)
- Nav Contact : MapPin (20px)
- Adresse : MapPin (18px)
- Horaires : Clock (18px)
- Téléphone WhatsApp : MessageCircle (18px, couleur #25D366)
- Instagram : Instagram (18px, hover → #C45C1A)
- Facebook : Facebook (18px, hover → #C45C1A)
- Panier FAB : ShoppingCart (24px)
- Badge panier : compteur chiffre uniquement (pas d'icône)
- Ajouter au panier : Plus (16px)
- Enlever quantité : Minus (16px)
- Supprimer article : Trash2 (16px)
- Envoyer commande : MessageCircle (18px, #25D366)
- Panier vide : ShoppingCart (48px, opacity 0.25)
- Numéro table : Hash (40px)
- Flèche scroll : ArrowDown (22px, animation oscillante verticale)
- Traiteur/event : CalendarCheck (24px)
- Admin login : Lock (24px)
- Admin save : Save (18px)
- Admin edit : Pencil (18px)
- Admin delete : Trash2 (18px)
- Admin logout : LogOut (18px)

— ÉCRAN DE CHARGEMENT — VRAIMENT DIFFÉRENT —

Concept : "L'Allumage" — L'écran ne fait pas apparaître un logo. Il allume une braise.

Séquence précise (durée totale : 2 400ms) :

Phase 0 — Silence (0ms → 200ms) :
L'écran est entièrement noir (#0D0A08). Rien. Pas de mouvement. Pas de spinner. Un vrai noir.

Phase 1 — Point de vie (200ms → 600ms) :
Un tout petit point de lumière cuivré (#C45C1A) apparaît au centre exact de l'écran — 4px de diamètre, opacity 0 → 1, easing: cubic-bezier(0.34, 1.56, 0.64, 1). Il pulse une fois très légèrement (scale 1 → 1.3 → 1, 250ms, ease-in-out). Ce point seul. Rien d'autre.

Phase 2 — L'embrasement (600ms → 1 100ms) :
À partir de ce point, une lueur radiale (#C45C1A → transparent) s'étend vers l'extérieur — comme une braise qu'on souffle. box-shadow ou radial-gradient animé de radius 4px → 180px, opacity 0.6 → 0.15, easing: ease-out, durée 500ms.

Phase 3 — Le nom (1 100ms → 1 750ms) :
Les mots "LA TABLE D'AHOÉ" en Bebas Neue 52px (ou clamp selon viewport) se révèlent lettre par lettre depuis le centre de l'écran — pas de slide, pas de fade global. Chaque lettre apparaît individuellement avec un stagger de 45ms, opacity 0 → 1, translateY 8px → 0px, easing: ease-out, durée par lettre: 300ms. La couleur des lettres : #F5EDE3. Sous le nom, "Lomé · Togo" en DM Sans 12px tracking 0.25em fade-in après 200ms de délai supplémentaire.

Phase 4 — Extinction élégante (1 750ms → 2 400ms) :
L'ensemble (braise + texte) fade-out ensemble, opacity 1 → 0, easing: ease-in, durée 650ms. Pendant que la page principale monte par-dessous (translateY 40px → 0px + opacity 0 → 1, même timing, cubic-bezier(0.22, 1, 0.36, 1)).

Ce qu'il ne faut JAMAIS sur cet écran de chargement :

- Pas de spinner circulaire, pas de barre de progression
- Pas de logo image importé — uniquement du texte et de la lumière
- Pas d'animation rebond (bounce) ou élastique sur le texte
- Pas de fond blanc intermédiaire
- Pas de gif de flamme réelle

— NAVIGATION —

DESKTOP :
Position : fixed top-0, pleine largeur
Fond initial : transparent (sur le hero) → rgba(13, 10, 8, 0.92) + backdrop-blur(20px) après 80px de scroll, transition 400ms ease
Hauteur : 72px
Logo : "LA TABLE D'AHOÉ" en Bebas Neue 22px, couleur #F5EDE3, à gauche
Liens : DM Sans 13px, tracking 0.10em, majuscules, couleur #F5EDE3 à 70% → 100% + underline épice dorée (width 0 → 100%, 250ms ease) au hover
CTA nav : bouton "RÉSERVER" — fond #C45C1A, padding 10px 22px, border-radius 4px, DM Sans 13px 600 majuscules, hover: brightness 1.1 + scale 1.03, 200ms ease

MOBILE :
Bottom navigation bar fixe — hauteur 64px, fond #0D0A08 + border-top 1px solid rgba(196, 92, 26, 0.25)
4 tabs : Home | Menu | Ahoé | Contact — icône (20px) + label (10px DM Sans tracking 0.08em)
Tab actif : icône + label couleur #C45C1A
Tab inactif : couleur #F5EDE3 à 50%
Transition active : scale 1.1 + couleur, 200ms cubic-bezier(0.34, 1.56, 0.64, 1)

— PAGE HOME (/) —

SECTION 1 — HERO CINÉMATIQUE :
Pas de fullscreen image basique. Composition en deux colonnes asymétriques 60/40 :

- Colonne gauche (60%) : fond #0D0A08 avec texture grain très subtile (pseudo-element SVG noise). En haut, tagline "Mercredi – Dimanche · 18h GMT" en DM Sans 12px italic tracking 0.15em, couleur #D4A853. Au centre, hero title en Bebas Neue : "LE RDV DES AMOUREUX" (ligne 1, taille clamp 64px–120px) + "DE BBQ" (ligne 2, même taille, couleur #C45C1A). Sous le titre, une ligne fine (#C45C1A, width 80px, height 1px) puis le texte "Lomé, Hédzranawoé" en DM Sans 14px, #F5EDE3 70%. Puis deux boutons : "VOIR LE MENU" (primaire, fond #C45C1A) et "RÉSERVER UN ÉVÉNEMENT" (secondaire, border 1px #F5EDE3 40%, fond transparent), gap 12px.
- Colonne droite (40%) : une image de grillades vibrantes, clippée en diagonal (clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%)) avec overlay gradient linéaire depuis #0D0A08 (gauche, 30%) → transparent (droite). Traitement CSS : saturate(1.2) contrast(1.1).
  En bas du hero, icône ArrowDown (22px, #C45C1A) en animation translateY 0 → 6px → 0, boucle 1.5s ease-in-out.

Élément signature hero : Au hover sur l'image de droite, un très subtil "heat haze" — animation CSS qui applique un très léger filter blur(0px) → blur(0.8px) → blur(0px) oscillant lentement (4s ease-in-out, boucle infinie), simulant la chaleur du grill.

SECTION 2 — MANIFESTE AHOÉ :
Fond #0D0A08. Une seule citation monumentale en Bebas Neue 80px (clamp), couleur #F5EDE3, centrée :
"AHOE — QUI VIENT DE CHEZ NOUS."
Dessous, en DM Sans 16px, 3 colonnes de 1 phrase chacune décrivant l'ADN : grillades épicées / cocktails artisanaux / ambiance chill rooftop. Chaque colonne précédée d'une ligne verticale en #C45C1A de 40px.
Scroll reveal : translateY 30px → 0, opacity 0 → 1, stagger 120ms par colonne, durée 600ms, easing: cubic-bezier(0.22, 1, 0.36, 1).

SECTION 3 — CARTE SIGNATURE (3 spécialités) :
Grille 3 colonnes (mobile : carrousel horizontal snap).
Chaque carte : fond #3D2F28, border-radius 16px, overflow hidden.
Image format 4:3 en haut, traitement CSS : saturate(1.15) contrast(1.05).
Bandeau catégorie en haut à gauche : Bebas Neue 11px, tracking 0.2em, fond #C45C1A, padding 4px 10px.
Nom en Bebas Neue 28px, couleur #F5EDE3. Description en DM Sans 13px. Prix en DM Sans 18px 700, couleur #C45C1A. Bouton "+" rond 36px fond #C45C1A → menu.
Hover carte : scale 1.02 + box-shadow 0 20px 50px rgba(196, 92, 26, 0.2), 300ms ease.
Spécialités à afficher : Brochettes Curry-Coco · Plateau Fruits de Mer · Cocktail Bahia.

Queries Unsplash pour cette section :

- "chicken skewer grill fire dark african night close"
- "seafood grilled plate dark moody restaurant"
- "tropical cocktail coconut pineapple dark bar night"

SECTION 4 — TRAITEUR & ÉVÉNEMENTS :
Fond #3D2F28 avec texture grain légère.
Disposition horizontale : texte à gauche (60%), image à droite (40%) en clip diagonal.
Titre : Bebas Neue 56px "VOTRE ÉVÉNEMENT, NOS BRAISES."
Sous-titre DM Sans 16px, description du service traiteur.
Icône CalendarCheck (32px, #C45C1A) avant le titre.
CTA : "DEMANDER UN DEVIS" → wa.me/22891016439?text=Bonjour%20La%20Table%20d'Ahoé%2C%20je%20voudrais%20un%20devis%20pour%20un%20service%20traiteur.

SECTION 5 — TÉMOIGNAGES :
Fond #0D0A08. Titre section "ILS EN PARLENT" Bebas Neue 48px.
3 témoignages en carrousel (swipe mobile) — fond #3D2F28, border-radius 12px, padding 28px.
Chaque card : citation DM Sans 15px italic, nom DM Sans 13px 600 couleur #D4A853, étoiles remplacées par 5 tirets fins en #C45C1A.
Texte des témoignages basé sur les vrais avis : "Hidden gem in Lomé! Great for nights out, great food, great service." / "Un rooftop au décor atypique — une ambiance chill dans tout Lomé." / "No electricity when I came but still experienced an electrified moment."

— PAGE MENU (/menu) —

Composant partagé : MenuPage(scanMode: boolean)
→ /menu donne MenuPage scanMode={false}
→ /menu/scan donne MenuPage scanMode={true}

En-tête de page : fond #0D0A08, Bebas Neue 64px "LA CARTE", sous-titre DM Sans 14px "Commande via WhatsApp — livraison sur place".

CATEGORYNAV (sticky sous la navbar) :
Fond #0D0A08 + border-bottom 1px solid rgba(196, 92, 26, 0.2). Scroll horizontal. Pills catégories : fond #3D2F28, border-radius 24px, padding 8px 20px, DM Sans 13px 500 tracking 0.08em majuscules. Pill active : fond #C45C1A, couleur #F5EDE3. Clic → smooth scroll vers la section.

Catégories suggérées (données DEFAULT_DATA) :

- GRILLADES : Brochettes Curry-Coco (6 500 FCFA) · Poulet Entier Épicé (8 000 FCFA) · Côtes d'Agneau (7 500 FCFA) · Crevettes Grillées (7 000 FCFA)
- FRUITS DE MER : Plateau Fruits de Mer (8 000 FCFA) · Poisson Braisé (6 000 FCFA) · Calamars Grillés (6 500 FCFA)
- ACCOMPAGNEMENTS : Kanklo — Beignets de Banane (1 500 FCFA) · Frites Maison (1 500 FCFA) · Riz Sauté (2 000 FCFA)
- COCKTAILS : Bahia (4 500 FCFA) · Mojito Tropical (4 000 FCFA) · Virgin Coco (2 500 FCFA)
- SOFTS & EXTRAS : Eau minérale (500 FCFA) · Jus de Fruits Naturel (2 000 FCFA) · Bière Pression (2 500 FCFA)

MENUITEMCARD :
Fond #3D2F28, border-radius 16px, overflow hidden.
Image 4:3, traitement CSS : saturate(1.1) contrast(1.08).
Nom : Bebas Neue 20px, #F5EDE3.
Description : DM Sans 13px, #F5EDE3 65%, 2 lignes max, text-overflow ellipsis.
Prix : DM Sans 18px 700, #C45C1A.
Bouton "+" : rond 36x36px, fond #C45C1A, icône Plus lucide-react 16px, hover : brightness 1.1 + scale 1.08, 200ms ease.
Si déjà dans panier : row [Minus 16px | nombre DM Sans 16px 700 | Plus 16px], fond #3D2F28, border 1px #C45C1A.
Animation ajout : scale 1 → 1.25 → 1, 300ms cubic-bezier(0.34, 1.56, 0.64, 1).

CARTFAB :
Fixed bottom-right : right 20px, bottom 80px (au-dessus de la bottom nav).
56x56px, border-radius 28px, fond #C45C1A.
Icône ShoppingCart 24px (#F5EDE3).
Badge count : fond #F5EDE3, couleur #C45C1A, 20x20px, DM Sans 12px 700, top-right du FAB. Animation scale 1 → 1.4 → 1 à chaque changement de chiffre, 300ms spring.
Visible uniquement si panier non vide.

CARTDRAWER :
Mobile : bottom sheet (translateY 100% → 0, 380ms cubic-bezier(0.32, 0.72, 0, 1)).
Desktop : drawer droit 400px (translateX 400px → 0, même timing).
En-tête du drawer : "MA COMMANDE" Bebas Neue 28px + icône X pour fermer (20px).
Liste articles : nom 16px 500, description 13px, prix 16px 700 #C45C1A, [Minus|count|Plus] + Trash2 pour supprimer.
Sous-total : DM Sans 20px 700, label "TOTAL" Bebas Neue 24px.
Champ note : input texte "Instructions spéciales..." fond #3D2F28, border 1px rgba(196,92,26,0.3), border-radius 8px, DM Sans 14px.
CTA WhatsApp : fond #25D366, icône MessageCircle 18px, texte "ENVOYER PAR WHATSAPP", DM Sans 14px 600 majuscules, pleine largeur, border-radius 8px, hover brightness 1.05.
État vide : ShoppingCart 48px opacity 0.25 centré + "Votre table est vide pour l'instant." DM Sans 15px #F5EDE3 50%.
Persistance : localStorage["cart_dahoe"].

Message WhatsApp (mode normal) :
const message = `Commande La Table d'Ahoé :\n${items.map(i => `- ${i.name} x${i.qty} → ${i.price * i.qty} FCFA`).join('\n')}\n\nTotal : ${total} FCFA${note ? '\nNote : ' + note : ''}`
window.open(`https://wa.me/22891016439?text=${encodeURIComponent(message)}`, '\_blank')

Données : lire depuis getRestaurantData() avec fallback DEFAULT_DATA.
Filtrer uniquement les articles available: true.

— PAGE ABOUT (/about) —

Hero : Bebas Neue 80px "AHOÉ — QUI VIENT DE CHEZ NOUS." sur fond #0D0A08.
Sous-titre DM Sans 16px : "Un rooftop. Des épices. Une promesse de convivialité africaine."

Section histoire : 2 colonnes. Texte gauche (60%) : 3 paragraphes DM Sans 16px. Image droite (40%) en clip diagonal. Texte basé sur la réalité : naissance de l'idée d'une "table ambulante" qui rassemble autour des saveurs d'ici, les épices de la gamme Condiments d'Ahoé, l'ouverture du rooftop à Hédzranawoé.

Section valeurs : 3 colonnes fond #3D2F28, icônes UtensilsCrossed / Coffee / CalendarCheck (32px, #C45C1A), titre Bebas Neue 28px, description DM Sans 14px.

Section La Maison d'Ahoé : encart fond #3D2F28 border-left 3px #C45C1A. Mentionner l'extension en maison d'hôtes inaugurée en mars 2022, 3 chambres, jardin tropical.

Élément signature : un scroll horizontal de 6 "mots-clés de l'ADN" en Bebas Neue 48px alternant #F5EDE3 et #C45C1A, séparés par une ligne fine — texte en défilement automatique très lent (marquee CSS), vitesse 30s linear infinite. Mots : GRILLADES · ÉPICES · CHILL · ROOFTOP · CONVIVIALITÉ · LOMÉ · AHOÉ.

— PAGE CONTACT (/contact) —

Hero minimaliste : "OÙ NOUS TROUVER" Bebas Neue 72px.

Grille 2 colonnes :
Gauche : infos pratiques avec icônes lucide-react.

- MapPin 20px : "Hédzranawoé, Rue HDN 180 — 1er von à droite après la station Yatt & Co, en venant de la foire Togo 2000, Lomé"
- Clock 20px : "Mercredi au Dimanche · À partir de 18h GMT"
- MessageCircle 20px (#25D366) : "+228 91 01 64 39" → lien wa.me
- Instagram 20px : "@la_table_dahoe" → lien Instagram
- Facebook 20px : "La Table d'Ahoé" → lien Facebook

CTA réservation traiteur : bouton "DEMANDER UN DEVIS TRAITEUR" → wa.me avec message pré-rédigé "Bonjour La Table d'Ahoé, je souhaite un devis pour un service traiteur."

Droite : embed Google Maps (iframe) de Hédzranawoé, Lomé, border-radius 16px, overflow hidden, height 360px.

Note sur l'accès : DM Sans 14px italic, fond #3D2F28, border-radius 8px, padding 16px :
"Premier von à droite juste après la station Yatt & Co en venant de la foire Togo 2000."

Élément signature : une ligne temporelle horizontale des horaires de la soirée — de 18h à 02h — avec des micro-labels DM Sans 12px indiquant les "moments" : "Ouverture · Apéro · Grillades · Chill & Cocktails · Late Night". Graphisme en tirets fins #C45C1A.

— VOLET 2 : DASHBOARD ADMIN (/admin) —

ADMIN_PASSWORD = "ahoe2025" (constante hardcodée — À CHANGER AVANT DÉPLOIEMENT)

Écran de login : fond #F8F9FA, logo "LA TABLE D'AHOÉ" Bebas Neue 32px centré, sous-titre DM Sans 14px "Accès réservé", input mot de passe (52px height, border 1px #DEE2E6, border-radius 8px), bouton "CONNEXION" fond #C45C1A, texte blanc. Icône Lock (24px, #C45C1A) au-dessus du formulaire.

Dashboard authentifié (4 tabs) :
Fond global #F8F9FA. Textes sombres (#1A1A1A). Look outil professionnel neutre — distinct totalement du site public.

1. MENU (défaut) :
   Groupé par catégorie. Par article : nom | prix | toggle disponible/indisponible | icônes Pencil + Trash2. Bouton "Ajouter un plat" → formulaire : nom, description, prix (FCFA), catégorie (select), image URL.

2. CATÉGORIES :
   Liste avec nombre de plats. Ajouter | Renommer | Supprimer | Réordonner (ChevronUp / ChevronDown).

3. PARAMÈTRES :
   Nom restaurant, tagline, WhatsApp, adresse, horaires, Instagram URL, Facebook URL. Bouton Save (icône Save).

4. EXPORT :
   Bouton "Copier la config JSON" → presse-papier (icône Copy). Bouton "Réinitialiser" avec confirmation. Note explicative : "Les modifications admin ne sont visibles que sur ce navigateur. Pour déployer : exportez le JSON et partagez-le avec votre développeur."

Bouton "Déconnexion" en haut à droite (icône LogOut, 18px).

getRestaurantData() : lire depuis localStorage["restaurant_config_dahoe"] → sinon retourner DEFAULT_DATA.

— VOLET 3 : MENU SUR PLACE (/menu/scan) —

Composant MenuPage(scanMode: true).

Au chargement : lire localStorage["tableNumber_dahoe"]. Si vide → afficher TableModal bloquant.

TABLEMODAL — RÈGLES STRICTES :

- Non-dismissable : pas de croix, overlay non-cliquable, pas d'Escape
- NE PAS lire de paramètre ?table= dans l'URL — saisie TOUJOURS manuelle
- Fond #0D0A08 avec overlay semi-transparent
- Centré verticalement et horizontalement
- Icône Hash (40px, #C45C1A) en haut
- Titre : Bebas Neue 40px "VOTRE TABLE ?"
- Sous-titre : DM Sans 14px "Entrez le numéro indiqué sur votre table"
- Input : height 56px, DM Sans 18px centré, border 2px #C45C1A, border-radius 8px, fond #3D2F28, placeholder "ex : 12"
- Bouton "CONFIRMER" : plein écran du modal, fond #C45C1A, Bebas Neue 20px, height 52px
- Stocker dans localStorage["tableNumber_dahoe"] → déverrouiller le menu

Message WhatsApp (mode scan) :
const message = `Commande La Table d'Ahoé — Table ${tableNumber} :\n${items.map(i => `- ${i.name} x${i.qty} → ${i.price * i.qty} FCFA`).join('\n')}\n\nTotal : ${total} FCFA${note ? '\nNote : ' + note : ''}`
window.open(`https://wa.me/22891016439?text=${encodeURIComponent(message)}`, '\_blank')

— ANIMATIONS SYSTÈME —

Scroll reveals (Intersection Observer, threshold 0.15) :

- Tous les blocs : translateY 24px → 0 + opacity 0 → 1
- Durée : 600ms, easing : cubic-bezier(0.22, 1, 0.36, 1)
- Stagger entre enfants : 80ms

Transitions de pages (React Router) :

- Sortie : opacity 1 → 0, durée 200ms, ease-in
- Entrée : opacity 0 → 1, durée 300ms, ease-out
- translateY 12px → 0 à l'entrée

Bottom sheet (CartDrawer mobile) :
translateY 100% → 0, durée 380ms, cubic-bezier(0.32, 0.72, 0, 1)
Overlay : fond rgba(0,0,0,0.6), opacity 0 → 1, 300ms ease. Clic overlay → ferme.

Micro-interactions boutons :
Tous les boutons principaux : hover scale 1.03 + brightness 1.08, 200ms ease.
Bouton CTA WhatsApp : hover scale 1.02 + box-shadow 0 4px 20px rgba(37, 211, 102, 0.25).

Badge panier :
Scale 1 → 1.5 → 1, durée 350ms, cubic-bezier(0.34, 1.56, 0.64, 1) — déclenché à chaque changement du compteur.

Marquee about :
animation: marquee 30s linear infinite — texte dupliqué pour boucle parfaite.

INTERDIT : bounce excessif, transform élastique, parallax lent qui rame, transitions lentes (> 700ms), animations en boucle sur des éléments de contenu (uniquement sur éléments décoratifs).

— IMAGES —

Traitement CSS global uniforme (appliquer en classe .img-ember sur toutes les images) :
filter: saturate(1.15) contrast(1.08) brightness(0.95)

Overlays : gradient linéaire de fond #0D0A08 à 0% opacity sur les images en header de section.

Format de clip :

- Hero et sections principales : clip-path diagonal polygon(8% 0, 100% 0, 100% 100%, 0 100%)
- Cartes menu : rectangles droits, border-radius 12px
- Section about : polygon(0 0, 100% 0, 92% 100%, 0 100%)

Queries Unsplash précises par section :

- Hero grill : "beef skewers charcoal grill fire dark night"
- Ambiance rooftop : "rooftop bar africa night city lights warm"
- Spécialité poulet : "chicken skewer spices curry dark plate close"
- Fruits de mer : "grilled seafood plate restaurant dark moody"
- Cocktails : "tropical cocktail coconut pineapple rum dark night"
- Traiteur : "outdoor catering event africa night table setting"
- About : "african restaurant terrace evening warm lights"

— FOOTER —

Fond : #060402 (plus sombre que le fond principal)
Border-top : 1px solid rgba(196, 92, 26, 0.2)
Padding : 64px 0 40px

Disposition 3 colonnes desktop (1 colonne mobile empilée) :

Colonne 1 — Identité :
"LA TABLE D'AHOÉ" Bebas Neue 28px, #F5EDE3.
Tagline DM Sans 13px italic #D4A853 : "Le RDV des amoureux de BBQ."
Icônes sociales Instagram + Facebook (18px, #F5EDE3 50% → hover #C45C1A, transition 200ms).

Colonne 2 — Informations :
"INFOS" Bebas Neue 16px tracking 0.15em. Liste DM Sans 14px #F5EDE3 70% :
MapPin 14px + "Hédzranawoé, Lomé, Togo"
Clock 14px + "Mer–Dim · 18h GMT"
MessageCircle 14px + "+228 91 01 64 39"

Colonne 3 — Navigation :
"NAVIGATION" Bebas Neue 16px. Liens DM Sans 14px vers Home / Menu / À propos / Contact.
Hover : couleur #C45C1A + translateX 4px, 200ms ease.

Ligne légale : DM Sans 12px #F5EDE3 30%, centré, séparée par un hr 1px rgba(196,92,26,0.15) :
"© 2025 La Table d'Ahoé — Hédzranawoé, Lomé, Togo. Tous droits réservés."

Scroll reveal footer : translateY 20px → 0, opacity 0 → 1, 500ms ease, déclenché à 80% de visibilité.

AUCUN EMOJI dans le footer. Toutes les icônes sont lucide-react.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ADDENDUM LOVABLE — LA TABLE D'AHOÉ Module Cuisine & Suivi Commandes en Temps Réel ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ajoute les fonctionnalités suivantes au projet existant. Aucun backend, aucun WebSocket. Toute la communication en temps réel se fait via BroadcastChannel API + localStorage. Les deux pages écoutent les événements en permanence et se synchronisent instantanément sur le même appareil ou réseau local (même navigateur ou onglets différents).

— ARCHITECTURE DES DONNÉES —

Clé localStorage principale : "orders_dahoe" Structure : tableau d'objets Order.

Type Order : { id: string, // uuid généré à la création (crypto.randomUUID()) tableNumber: string, // numéro de table saisi dans TableModal items: [{ name, qty, price }], total: number, note: string, status: "pending" | "preparing" | "ready" | "done", createdAt: number, // Date.now() updatedAt: number }

Canal BroadcastChannel : new BroadcastChannel("dahoe_orders") Messages émis : { type: "NEW_ORDER" | "STATUS_UPDATE", order: Order }

Fonction partagée saveOrder(order) :

Lire localStorage["orders_dahoe"] → parser → tableau

Upsert l'order par son id

Sauvegarder dans localStorage

Émettre sur BroadcastChannel : channel.postMessage({ type, order })

Fonction partagée getOrders() : retourne JSON.parse(localStorage["orders_dahoe"] || "[]")

Fonction clearTableOrders(tableNumber) : Supprimer tous les orders de cette table ayant status === "done" Effacer localStorage["tableNumber_dahoe"] Effacer localStorage["cart_dahoe"] Émettre { type: "TABLE_CLEARED", tableNumber }

— MODIFICATION DE /menu/scan —

ENVOI DE COMMANDE : Remplacer le bouton WhatsApp par un bouton "ENVOYER À LA CUISINE". Icône ChefHat (lucide-react, 18px, couleur #F5EDE3). Fond #C45C1A, DM Sans 14px 600 majuscules, pleine largeur, border-radius 8px.

Au clic :

Créer un objet Order avec status "pending", id = crypto.randomUUID(), tableNumber depuis localStorage

Appeler saveOrder(order) → écrit en localStorage + émet sur BroadcastChannel

Vider le panier localStorage["cart_dahoe"]

Afficher le composant OrderStatusTracker (voir ci-dessous)

COMPOSANT ORDERSTATUSTRACKER (affiché sous le menu après envoi) : Fond #3D2F28, border-radius 16px, padding 20px, border-left 4px solid [couleur du status].

Titre : Bebas Neue 24px "VOTRE COMMANDE" + numéro de table en #C45C1A.

Timeline visuelle horizontale (4 étapes) : pending → label "Reçue" → icône Clock (20px) preparing → label "En cours" → icône Flame (20px) ready → label "Prête" → icône BellRing (20px) done → label "Servie" → icône CheckCircle (20px)

Étape active : icône + label en #C45C1A, fond pill #C45C1A à 15% opacity. Étapes passées : couleur #D4A853. Étapes futures : #F5EDE3 à 30%. Connecteur entre étapes : ligne fine 1px, passées en #D4A853, futures en #F5EDE3 20%.

Si plusieurs commandes en cours pour la même table : afficher un bloc par commande, empilés verticalement avec stagger, chaque bloc avec son propre status.

Polling : useEffect qui appelle getOrders() toutes les 2 secondes + écoute BroadcastChannel. Au changement de status détecté → update de l'état React → re-render immédiat.

Animation changement de status : le pill actif fait scale 1 → 1.15 → 1, 400ms spring,

couleur de la border-left transite vers la nouvelle couleur, 500ms ease.

Quand status === "done" :

Afficher pendant 3 secondes un écran de confirmation : Fond #0D0A08, icône CheckCircle 64px #C45C1A centré, Bebas Neue 48px "BON APPÉTIT !", DM Sans 16px "Votre commande a été servie."

Après 3 secondes : appeler clearTableOrders(tableNumber)

Revenir au TableModal (afficher un nouveau modal vierge pour permettre à la prochaine table de commander)

— PAGE /cuisine — ACCÈS RESTREINT —

Aucun lien dans la navigation publique. Accessible uniquement en tapant l'URL. Pas de mot de passe sur cette page (c'est un outil interne, l'URL suffit comme sécurité).

DESIGN : sobre, fonctionnel, pensé pour un écran de cuisine (lumineux, contrasté). Fond #F0EDE8 (crème chaude), textes #1A1A1A, accents #C45C1A. Typographie : Bebas Neue pour les titres, DM Sans pour le contenu. Mobile-first : le cuisinier gère depuis une tablette ou un téléphone.

EN-TÊTE : Fond #0D0A08, hauteur 56px. Gauche : "CUISINE — LA TABLE D'AHOÉ" Bebas Neue 22px #F5EDE3. Droite : compteur "X commande(s) en attente" — badge rond fond #C45C1A, DM Sans 13px 700 blanc. Bouton icône Volume2 / VolumeX (lucide-react, 20px, #F5EDE3) pour couper/activer le son. État persisté en localStorage["cuisine_sound"].

SYSTÈME DE SONS (Web Audio API — zéro import externe) : Créer une fonction playBeep() utilisant AudioContext :

function playBeep() { const ctx = new (window.AudioContext || window.webkitAudioContext)() const oscillator = ctx.createOscillator() const gainNode = ctx.createGain() oscillator.connect(gainNode) gainNode.connect(ctx.destination) oscillator.frequency.value = 880 oscillator.type = "sine" gainNode.gain.setValueAtTime(0.4, ctx.currentTime) gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4) oscillator.start(ctx.currentTime) oscillator.stop(ctx.currentTime + 0.4) }

Comportement du bip :

Quand une nouvelle commande arrive (status "pending") : playBeep() en boucle toutes les 3 secondes TANT QUE la commande reste en "pending". Arrêter dès que le cuisinier change le status.

L'intervalle est propre à chaque commande (clearInterval quand status change).

Si localStorage["cuisine_sound"] === "off" → ne pas jouer les bips.

Première interaction utilisateur nécessaire pour activer AudioContext (afficher une bannière "Toucher l'écran pour activer le son" si AudioContext est suspendu).

COLONNES DE COMMANDES (Kanban) : 3 colonnes côte à côte (mobile : onglets ou scroll horizontal snap) :

Col 1 — "EN ATTENTE" (fond #FFF3E0, border-top 4px #FF8C00) Col 2 — "EN PRÉPARATION" (fond #E8F5E9, border-top 4px #2E7D32) Col 3 — "PRÊTE" (fond #E3F2FD, border-top 4px #1565C0)

Les commandes "done" disparaissent de l'affichage après 3 secondes.

ORDERCARD (carte de commande dans chaque colonne) : Fond blanc, border-radius 12px, box-shadow 0 2px 12px rgba(0,0,0,0.08), padding 16px. Border-left 4px solid [couleur de la colonne].

En-tête card : "TABLE [numéro]" Bebas Neue 22px + heure de commande DM Sans 12px #666 (format "18:42"). Si commande en "pending" depuis plus de 5 minutes : heure en rouge #D32F2F + icône AlertCircle 14px.

Liste des articles : DM Sans 14px — "[qty]x [nom]" par ligne. Note client (si présente) : fond #FFF9C4, border-radius 6px, padding 8px, DM Sans 13px italic. Total : DM Sans 16px 700 #C45C1A en bas à droite.

BOUTONS D'ACTION sur chaque card : Commande "pending" : → Bouton "PRENDRE EN CHARGE" (fond #2E7D32, icône ChefHat 16px, texte DM Sans 13px 600 blanc, pleine largeur, border-radius 8px) → Change status vers "preparing" → saveOrder() → carte se déplace vers colonne 2

Commande "preparing" : → Bouton "MARQUER PRÊTE" (fond #1565C0, icône BellRing 16px, texte blanc, pleine largeur) → Change status vers "ready" → saveOrder() → carte se déplace vers colonne 3

Commande "ready" : → Bouton "COMMANDE SERVIE" (fond #C45C1A, icône CheckCircle 16px, texte blanc, pleine largeur) → Change status vers "done" → saveOrder() → carte disparaît après 3s (fade-out opacity 0) → Déclenche le clearTableOrders côté /menu/scan via BroadcastChannel

ANIMATIONS des cartes : Nouvelle commande : la card entre depuis le haut (translateY -20px → 0, opacity 0 → 1, 400ms ease-out). Déplacement entre colonnes : card sort de la colonne avec translateX -20px + opacity 0 → réapparaît dans la colonne suivante (translateX 20px → 0 + opacity 0 → 1, 350ms ease). Suppression (done) : opacity 1 → 0 + scale 0.95, 300ms ease-in.

POLLING + BroadcastChannel : useEffect au montage : écouter BroadcastChannel("dahoe_orders"). Sur message NEW_ORDER : ajouter la commande → playBeep() → démarrer l'intervalle de bip. Sur message STATUS_UPDATE : mettre à jour la commande dans l'état local → re-render. Polling de sécurité : getOrders() toutes les 3 secondes (fallback si BroadcastChannel rate un message). Cleanup au unmount : fermer le channel, clearInterval tous les intervalles actifs.

ÉTAT VIDE (aucune commande active) : Centré dans la zone de colonnes : icône UtensilsCrossed 64px opacity 0.2, Bebas Neue 32px "AUCUNE COMMANDE EN COURS", DM Sans 14px #666 "Les commandes apparaîtront ici automatiquement."

— RÉSUMÉ DES FLUX —

[Client sur /menu/scan] → Remplit panier → clique "ENVOYER À LA CUISINE" → Order créée (status: pending) → localStorage + BroadcastChannel

[Cuisine sur /cuisine] → Reçoit la commande instantanément → BIP sonore en boucle → Clique "PRENDRE EN CHARGE" → status: preparing → BIP s'arrête → Clique "MARQUER PRÊTE" → status: ready → Clique "COMMANDE SERVIE" → status: done

[Client sur /menu/scan] → Voit la progression en temps réel sur le OrderStatusTracker → Quand status = done → écran "BON APPÉTIT" 3 secondes → Puis clearTableOrders() → TableModal réapparaît pour la prochaine commande de cette table
