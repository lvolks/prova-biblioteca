import "./header.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header-options-container">
      <Link to="/">
        <button type="button" className="btn btn-outline-primary me-2 ">
          Página inicial
        </button>
      </Link>
      <Link to="/cadastro">
        <button type="button" className="btn btn-outline-primary me-2 ">
          Cadastro
        </button>
      </Link>
    </div>
  );
}