import React, { useState } from "react";
import api from "../../services/api";
import "./Cadastro.css";

export default function Cadastro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [tema, setTema] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const livro = {
      titulo,
      autor,
      ano,
      tema
    };

    api
    .post("/livros", livro)
      .then((response) => {
        console.log(response.data);
        alert("Livro " + response.data.isbn + " criado com sucesso!");
        setTitulo("");
        setAutor("");
        setAno("");
        setTema("");
      })
      .catch((err) => {
        console.error(err);
        alert("Ocorreu um erro.");
      })
  };
  

  return (
    <div className="container text-center">
      <div>
        <form className="form container-master" onSubmit={handleSubmit}>
          <div className="container1">
            <div>
              <div className="form-group">
                <label>
                  Titulo:
                  <input
                    type="text"
                    className="form-control"
                    value={titulo}
                    onChange={(e) => {
                      setTitulo(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Autor:
                  <input
                    type="text"
                    className="form-control"
                    value={autor}
                    onChange={(e) => {
                      setAutor(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Ano:
                  <input
                    type="text"
                    className="form-control"
                    value={ano}
                    onChange={(e) => {
                      setAno(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Tema:
                  <input
                    type="text"
                    className="form-control"
                    value={tema}
                    onChange={(e) => {
                      setTema(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary botao">
            Cadastrar Livro
          </button>
        </form>
      </div>
    </div>
  );
}
