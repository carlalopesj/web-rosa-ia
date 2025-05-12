import React, { useEffect, useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import Footer from '../Footer';
import { getStyles } from './styles';

export function Section() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = getStyles(isMobile);

    function aindaNão() {
        alert('Em desenvolvimento...');
    }

    return (
        <>
            <section id='sobre' style={styles.sectionMain}>
                <div style={styles.textContent}>
                    <div style={styles.container1}>
                        <h1 style={styles.h1}>ROSA IA:</h1>
                        <h3 style={styles.h3}>Sua Aliada Virtual no Combate ao Câncer de Mama</h3>
                        <p style={styles.p}>
                            Informações e suporte na palma da sua mão! <br />
                            Apresentamos a Dra. Rosa, sua assistente virtual integrada ao WhatsApp, pronta para oferecer informações confiáveis e suporte sobre o câncer de mama. <br />
                            Cuidar da sua saúde começa com um simples passo.
                        </p>
                    </div>

                    <div style={styles.container2}>
                        <button onClick={aindaNão} style={styles.button}>Converse agora com a Dra. Rosa</button>
                        <a onClick={aindaNão} href="#">
                            <MdArrowForward size={40} color="#d45e6e" style={styles.arrowIcon} />
                        </a>
                    </div>
                </div>

                <div style={styles.imageWrapper}>
                    <img src="/img/Ola.png" alt="Dra. Rosa" style={styles.image} />
                </div>
            </section>

            {/* <Footer /> */}
        </>
    );
}