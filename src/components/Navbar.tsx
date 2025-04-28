import React, { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Controla se o menu está aberto ou fechado

  return (
    <nav>
      {/* Logo para o desktop */}
      <div className="logo">
        <img src="./img/logo.png" alt="imagem" />
      </div>

      {/* Ícone do menu hambúrguer, visível no celular */}
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menu de navegação */}
      <ul className={menuOpen ? 'menu open' : 'menu'}>
        <li id='sobre'>SOBRE</li>
        <li id='servicos'>SERVIÇOS</li>
        <li id='tecnologias'>TECNOLOGIAS</li>
        <li id='comofazer'>COMO FAZER</li>
        <button id="btn-nav">CADASTRE-SE</button>
        <button id="btn2-nav">ENTRAR</button>
      </ul>
    </nav>
  );
}
