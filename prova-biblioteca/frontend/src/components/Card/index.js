import { useState } from "react";
import { useEffect } from "react";
import "./card.css";

export default function Card() {
  const [livros, setLivros] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:3001/livros")
      .then((response) => response.json())
      .then((data) => setLivros(data))
      .catch((err) => console.error(err));
  }, []);
  

  return (
    <div className="container text-center">
      <div className="linha">
        {livros.map((livro, i) => (
          <div className="coluna" key={i}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {livro.titulo}
                </h5>
                <p className="card-text">Autor do livro: {livro.autor}</p>
                <p className="card-text">Ano de lançamento: {livro.ano}</p>
                <p className="card-text">Tema do livro: {livro.tema}</p>
                  <a href={`/detalhes/${livro.isbn}`}>
                  <div className="btn btn-primary">Detalhes</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
