import express, { json } from 'express';

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas a imersão!");
});

app.get("/livro", (req, res) => {
    res.status(200).send(jsonTolkien);
})

const jsonTolkien = {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954
};