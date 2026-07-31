# 📋 Guide du Portfolio Personnel - Thomas DE GUZMAN

## 🚀 Démarrage rapide

### Lancer le site avec Live Server
1. Ouvrez le dossier dans VS Code
2. Clic droit sur `index.html`
3. Sélectionnez **"Open with Live Server"**
4. Le site s'ouvrira automatiquement dans votre navigateur

### L'URL sera : `http://localhost:5500`

---

## 📁 Structure du projet

```
PorteFolio/
├── index.html              # Contenu principal du site
├── style.css               # Styles et design
├── script.js               # Interactions JavaScript
└── assets/
    ├── images/
    │   ├── profile.jpg     # Photo de profil
    │   ├── project-*.jpg   # Images des projets
    │   └── profile-placeholder.svg
    └── files/
        └── rapport-placeholder.pdf
```

---

## ✏️ Modifier votre contenu

### 1️⃣ Changer votre photo de profil
- **Fichier** : `assets/images/profile.jpg`
- **Dimension recommandée** : 600x700px minimum
- **Format** : JPG, PNG
- **Action** : Remplacez le fichier `profile.jpg` par votre vraie photo

💡 **Conseil** : Utilisez une photo professionnelle, claire, sur fond neutre.

---

### 2️⃣ Ajouter des images aux projets
Chaque projet a une image associée :

| Projet | Fichier |
|--------|---------|
| Profil LS-0417 | `project-ls0417.png` |
| NACA 4412 | `project-naca4412.jpg` |
| Amortisseur | `project-shock-absorber.jpg` |
| Chaleur 1D | `project-heat-eq-1d.jpg` |
| Chaleur 2D | `project-heat-eq-2d.jpg` |
| Stage Seagale | `project-seagale.jpg` |
| Drone MANTA | `project-manta.jpg` |
| NACA 2024 | `project-naca-2024.jpg` |
| AerOptAI | `project-aeroptai.jpg` |
| Portfolio | `project-portfolio.jpg` |

**Dimension recommandée** : 800x450px (format paysage)

---

### 3️⃣ Remplacer les liens des rapports PDF
Dans `index.html`, cherchez les lignes comme :
```html
<a class="btn btn-small" href="assets/files/rapport-placeholder.pdf" target="_blank">
  Consulter le rapport
</a>
```

Remplacez `rapport-placeholder.pdf` par le nom réel du PDF :
```html
<a class="btn btn-small" href="assets/files/simulation-ls0417.pdf" target="_blank">
  Consulter le rapport
</a>
```

---

### 4️⃣ Modifier les informations de contact
Cherchez dans `index.html` :
```html
<p><strong>Email :</strong> thomas.deguzman33@gmail.com</p>
<a href="https://www.linkedin.com/">LinkedIn</a>
<a href="https://github.com/">GitHub</a>
```

Remplacez par vos vrais liens LinkedIn et GitHub.

---

### 5️⃣ Ajouter/modifier des projets
Pour ajouter un nouveau projet, copiez-collez ce template dans la section appropriée :

```html
<article class="project-card">
  <div class="project-image">
    <img src="assets/images/project-votre-projet.jpg" alt="Description" />
  </div>
  <h4>Titre du projet</h4>
  <p class="project-meta">Auteurs</p>
  <p>Description courte du projet.</p>
  <div class="tags">
    <span><i class="fas fa-icon"></i> Technologie 1</span>
    <span><i class="fas fa-icon"></i> Technologie 2</span>
  </div>
  <a class="btn btn-small" href="assets/files/rapport.pdf" target="_blank">
    Consulter le rapport
  </a>
</article>
```

**Icônes disponibles** : Utilisez Font Awesome (déjà intégré)
- `fa-flask-vial` → CFD
- `fa-python` → Python
- `fa-code` → Code
- `fa-brain` → IA
- `fa-globe` → Web
- etc.

---

### 6️⃣ Modifier le texte d'introduction
Cherchez dans `index.html` :
```html
<p class="hero-intro">
  Passionné par la simulation numérique, l'aérodynamique et la programmation scientifique...
</p>
```

Modifiez librement le texte.

---

## 🎨 Personnaliser le design

### Couleurs principales (dans `style.css`)
```css
:root {
  --primary: #123c7c;        /* Bleu foncé */
  --primary-dark: #0d2a5a;   /* Bleu plus foncé */
  --text: #111111;            /* Noir */
  --muted: #5e6470;           /* Gris */
  --light: #f5f7fa;           /* Gris clair */
  --white: #ffffff;           /* Blanc */
}
```

Changez ces valeurs pour modifier l'apparence globale.

---

### Police de caractères
La police **Inter** est utilisée par défaut (de Google Fonts).
Pour changer :
```css
font-family: "VotrePolice", Arial, sans-serif;
```

---

### Espacements et dimensions
- **Largeur max du contenu** : 1120px (modifiable dans `.container`)
- **Padding des sections** : 5.5rem (modifiable dans `.section`)
- **Écart entre les cartes** : 1.25rem (modifiable dans `.project-grid`)

---

## 🔍 Optimisations recommandées

### Avant de déployer :
1. ✅ Remplacez toutes les images placeholder
2. ✅ Ajoutez vos vrais PDF dans `assets/files/`
3. ✅ Vérifiez tous les liens (LinkedIn, GitHub, etc.)
4. ✅ Testez sur mobile (ouvrez DevTools : F12 → Toggle device toolbar)
5. ✅ Vérifiez que les icônes s'affichent correctement

---

## 📱 Responsive & Mobile
Le site est **entièrement responsive** :
- ✅ Sur desktop : grille 2 colonnes pour les projets
- ✅ Sur tablette : grille 1 colonne
- ✅ Sur mobile : menu burger automatique

**Testez** en appuyant sur **F12** dans le navigateur, puis sur l'icône d'appareil.

---

## 🚀 Déploiement

Pour mettre en ligne votre portfolio :
1. **Netlify** (gratuit) : Drag & drop le dossier
2. **GitHub Pages** : Push le dossier sur GitHub
3. **Votre serveur personnel** : FTP le dossier

Le site ne nécessite **aucun backend**, c'est du pur HTML/CSS/JS.

---

## ⚡ Astuces rapides

- Modifier la vitesse des animations : cherchez `transition: 0.2s ease` dans `style.css`
- Agrandir/réduire les images : modifiez `width` et `height` des `.project-image`
- Ajouter plus de domaines d'intérêt : copiez-collez un badge dans la section "Domaines d'intérêt"
- Agrandir le texte : cherchez `font-size` dans `style.css` et augmentez les valeurs

---

## 💡 Questions ?

**Erreurs courantes :**
- Les images ne s'affichent pas ? → Vérifiez le chemin : `assets/images/nom-fichier.jpg`
- Les PDF ne téléchargent pas ? → Vérifiez qu'ils sont bien dans `assets/files/`
- Le menu burger ne fonctionne pas ? → Vérifiez que `script.js` est chargé
- Les icônes s'affichent mal ? → Attendez que Font Awesome charge (rafraîchissez F5)

---

**Bon courage pour votre portfolio ! 🎓**
