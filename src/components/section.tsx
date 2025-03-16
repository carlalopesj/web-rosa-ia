import React from "react";
import './Section.css';
import { MdArrowForward } from "react-icons/md";

export function Section() {
    return (
        <>
            <section>
                <div>
                    <div className="container1">
                        <h1>ROSA IA:</h1>
                        <h3>Sua Aliada Virtual no Combate ao Câncer de Mama</h3>
                        <p>Informações e suporte na palma da sua mão! <br />Apresentamos a Dra. Rosa, sua assistente virtual integrada ao WhatsApp, pronta para oferecer informações confiáveis e suporte sobre o câncer de mama. <br /> Cuidar da sua saúde começa com um simples passo.</p>
                    </div>

                    <div className="container2">
                        <button>Converse agora com a Dra. Rosa</button>
                        <a href="">
                            <MdArrowForward size={40} color="#C32FA3"  style={{ marginLeft: '20px', cursor: 'pointer'}} />
                        </a>
                    </div>
                </div>

                <div id="img1">
                    <img src="./img/Dra-rosa.png" alt="imagem" />
                </div>
            </section>

            <section className="section2">
    <div className="info-box">
        <div className="info-item">
            <img src="/img/loc.png" alt="Localização" className="info-icon" />
            <div className="text-container">
                <h3>Venham nos conhecer</h3>
                <p>(-------------)</p>
            </div>
            <img src="/img/Vector5.png" alt="linha" className="linha"/>
        </div>

        <div className="info-item">
            <img src="/img/shape.png" alt="Telefone" className="info-icon" />
            <div className="text-container">
                <h3>Ligue para nós</h3>
                <p>(61) 0000-0000</p>
            </div>
            <img src="/img/Vector5.png" alt="linha" className="linha"/>
        </div>

        <div className="info-item">
            <img src="/img/mail.png" alt="Email" className="info-icon" />
            <div className="text-container">
                <h3>Envie-nos uma mensagem</h3>
                <p>rosaia@gmail.com</p>
            </div>
        </div>
    </div>
</section>
        </>
    ); 
}
export default Section;