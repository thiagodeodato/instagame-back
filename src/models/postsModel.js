import conectarAoBanco from '../config/dbConfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("instagame");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("instagame");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

/* export default async function getPostsPorId(req.params.id) {
    const db = conexao.db("instagame");
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
} */