const livroModel = require('../models/livroModel');


class LivroController {
    async salvar(req, res) {
        const livro = req.body;
        const max = await livroModel.findOne({}).sort({ isbn: -1 });
        livro.isbn = max == null ? 1 : max.isbn + 1;

        const resultado = await livroModel.create(livro);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await livroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const isbn = req.params.isbn;
        const resultado = await livroModel.findOne({ 'isbn': isbn });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const isbn = req.params.isbn;
        const _codigo = String((await livroModel.findOne({ 'isbn': isbn }))._id);
        await livroModel.findByIdAndUpdate(String(_codigo), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const isbn = req.params.isbn;
        const _codigo = String((await livroModel.findOne({ 'isbn': isbn }))._id);
        await livroModel.findByIdAndRemove(String(_codigo));
        res.status(200).send();
    }
}

module.exports = new LivroController();