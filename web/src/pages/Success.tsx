import React from "react";

import "../styles/pages/success.css";

import successImg from "../images/success.svg";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div id="success-page">
      <div className="content-wrapper">
        <h1>Ebaaaa!</h1>
        <p>
          O cadastro deu certo e foi enviado ao administrador para ser aprovado.
          Agora é só esperar :)
        </p>

        <Link to="/app" className="back-button">Voltar para o mapa</Link>
      </div>
      <img src={successImg} alt="success" />
    </div>
  );
}
