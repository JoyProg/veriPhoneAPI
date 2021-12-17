const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Phone validation app is running on ${port}.`);
})