tache 8:

Pour organiser un serveur HTTP complexe utilisant Express comme décrit, suivez les étapes ci-dessous. La solution implique de créer plusieurs fichiers et répertoires, de définir les fonctions et classes nécessaires, et de configurer le routage et un serveur.

### 8.1 Organiser la structure du serveur
Créez les répertoires et fichiers suivants :
```
full_server/
├── controllers/
│   ├── AppController.js
│   └── StudentsController.js
├── routes/
│   └── index.js
├── utils.js
└── server.js
```

### 8.2 Créez `utils.js`

```javascript
// full_server/utils.js
import fs from 'fs';

export const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            const students = {};
            const lines = data.trim().split('\n');
            const fields = lines[0].split(',');
            const fieldIndex = fields.indexOf('field');
            const firstNameIndex = fields.indexOf('firstname');

            lines.slice(1).forEach(line => {
                const student = line.split(',');
                const field = student[fieldIndex];
                const firstName = student[firstNameIndex];

                if (!students[field]) {
                    students[field] = [];
                }
                students[field].push(firstName);
            });
            resolve(students);
        });
    });
};
```

### 8.3 Écrire le contrôleur de l'application

```javascript
// full_server/controllers/AppController.js
export default class AppController {
    static getHomepage(req, res) {
        res.status(200).send('Hello Holberton School!');
    }
}
```

### 8.4 Écrire le contrôleur des étudiants

```javascript
// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

export default class StudentsController {
    static async getAllStudents(req, res) {
        const database = req.query.database;

        try {
            const students = await readDatabase(database);
            let response = 'This is the list of our students\n';
            for (const [field, names] of Object.entries(students).sort()) {
                response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
            }
            res.status(200).send(response.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const database = req.query.database;
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(database);
            if (students[major]) {
                res.status(200).send(`List: ${students[major].join(', ')}`);
            } else {
                res.status(200).send('List: ');
            }
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}
```

### 8.5 Écrire les routes

```javascript
// full_server/routes/index.js
import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
```

### 8.6 Écrire le serveur

```javascript
// full_server/server.js
import express from 'express';
import routes from './routes/index';

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;
```

### 8.7 Mettre à jour `package.json`

Assurez-vous d'avoir `babel` et `nodemon` installés. Voici un exemple de mise à jour de `package.json` :

```json
{
  "name": "full_server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon --exec babel-node --presets @babel/preset-env ./full_server/server.js ./database.csv"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.12.1",
    "@babel/core": "^7.12.3",
    "@babel/node": "^7.12.1",
    "@babel/preset-env": "^7.12.1",
    "nodemon": "^2.0.4"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}
```

### .babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```

### Lancer le serveur

Dans le terminal 1, accédez au répertoire du projet et exécutez :

```sh
npm install
npm run dev
```

Dans le terminal 2, testez le serveur :

```sh
curl localhost:1245
curl localhost:1245/students?database=path/to/database.csv
curl localhost:1245/students/CS?database=path/to/database.csv
curl localhost:1245/students/SWE?database=path/to/database.csv
curl localhost:1245/students/French?database=path/to/database.csv
```

Remplacez `path/to/database.csv` par le chemin réel de votre fichier CSV.

Cette configuration assure un serveur Express bien organisé avec la lecture asynchrone de la base de données, un routage approprié et une gestion des erreurs.

