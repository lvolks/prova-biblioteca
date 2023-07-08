import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from "../services/api";
import "./detalhes.css";

export default function Detalhes() {
  const [livro, setLivro] = useState([]);
  const { isbn } = useParams();
  const [alugado, setAlugado] = useState(false);

  useEffect(() => {

    fetch(`http://localhost:3001/livros/${isbn}`)
      .then(response => response.json())
      .then(data => {
        setLivro(data);
      })
      .catch(err => console.error(err))
  }, []);

  async function alugarLivro() {
    if(alugado===false){
    try {
        await api.put(`/livros/${isbn}`, {
          alugado
        })
        alert('Livro alugado!')
        setAlugado(true)
    } catch (error) {
      console.error(error)
      alert('Ocorreu um erro')
    }
  } else{
      alert("Esse livro já está alugado!")
  }
  }


  return (
    <div>
        <div className="card mx-auto">
          <h1 className="text-center">{livro.titulo}</h1>
          <p className="text-center">Autor: {livro.autor}</p>
          <p className="text-center">Tema: {livro.tema}</p>
          <p className="text-center">Ano de lançamento: {livro.ano}</p>
          <div className="text-center">
            <button className="btn btn-primary" onClick={alugarLivro}>
            Alugar
            </button>
          </div>
        </div>
    </div>
  );

}