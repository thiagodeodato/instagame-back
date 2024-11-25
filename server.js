import express from 'express';
import routes from './src/routes/postRoutes.js';

const app = express();
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

