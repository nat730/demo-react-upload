# Demo Uploader des fichiers avec React

## Exercice 

### Installation
1 - forkez ce dépôt

2 - clonez votre fork sur votre machine

3 - installez les dépendances ```npm install```

4 - vérifiez que tout fonctionne correctement : ```npm run dev```

### Étape 1 : Création du bouton pour déposer un fichier

Sur la page Contact, il y a un formulaire dans lequel nous allons ajouter une nouvelle entrée (une nouvelle balise <input>) entre le message et le boutton d'envoi.
```
<input id="image" type="file" name="image" />
```

Une fois que c'est fait, vous devriez voir apparaitre un bouton d'ajout de fichier qui permet de choisir d'uploader un fichier depuis votre machine.

### Étape 2 : Utilisation et stockage du fichier

Pour pouvoir manipuler notre fichier, nous allons faire un état  (state). Il faudra donc faire un apport de useState et ensuite créer notre variable

```
import { useState } from 'react';

[...]

const [file, setFile] = useState<File | undefined>();
```

## Sources et aides 

📝 Article: https://kdta.io/b0WwW

📺 YouTube: https://www.youtube.com/watch?v=8uChP5ivQ1Q

🚀 Demo: https://my-react-file-upload.vercel.app/
