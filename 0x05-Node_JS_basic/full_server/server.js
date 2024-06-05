const express = require('express');
const routes = require('./routes/index')

const app = express();
const port = 1245;

app.listen('/', routes);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

