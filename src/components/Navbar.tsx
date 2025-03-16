import React from 'react';
import './Navbar.css';

export function Navbar(){
    return(
      <>
        <nav>
          <ul>
            <li id='sobre'>SOBRE</li>
            <li id='servicos'>SERVIÇOS</li>
            <li id='tecnologias'>TECNOLOGIAS</li>
            <li id=''>COMO FAZER</li>
            <button id="btn-nav">CADASTRE-SE</button>
            <button id="btn2-nav">ENTRAR</button>
          </ul>
        </nav>

      </>
    );
}