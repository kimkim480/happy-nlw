import React from "react";

import "../styles/pages/delete-orphanage.css";

import deleteImg from "../images/delete.svg";
import { Link } from "react-router-dom";

export default function DeleteOrphanage() {
  return (
    <div id="delete-orphanage-page">
      <div className="content-wrapper">
        <h1>Excluir!</h1>
        <p>Você tem certeza que quer excluir Orf. Esperança?</p>

        <Link to="/app" className="back-button">
          Voltar para o mapa
        </Link>
      </div>
      <img src={deleteImg} alt="success" />
    </div>
  );
}
