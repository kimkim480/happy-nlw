import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../images/Logotipo.svg";

import "../styles/pages/login.css";

export default function Login() {
  return (
    <div id="login-page">
      <img src={logoImg} alt="" />

      <div className="location">
        <strong>Teófilo Otoni</strong>
        <span>Minas Gerais</span>
      </div>

      <div className="login-area">
        <form className="login-form">
          <legend>Fazer login</legend>

          <div className="input-block">
            <label htmlFor="name">E-mail</label>
            <input id="name" />
          </div>

          <div className="input-block">
            <label htmlFor="pwd">Senha</label>
            <input id="name" type="password" />
          </div>

          <div className="input-block-checkbox">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Lembrar-me</label>

            <Link to="">
                Esqueci minha senha
            </Link>
          </div>

          <button className="confirm-button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
