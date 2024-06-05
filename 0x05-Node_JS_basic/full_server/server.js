const express = require('express');
const routes = require('./routes/index')

const app = express();
const port = 1245;

app.listen('/', routes);

if (require.main === module) {
    const databaseFile = process.argv[2];
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
        console.log(`Database file: ${databaseFile}`)
    });
}
