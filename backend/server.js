const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend i lidhur me sukses!' });
});

app.listen(port, () => {
    console.log(`Serveri po dëgjon në portin ${port}`);
});