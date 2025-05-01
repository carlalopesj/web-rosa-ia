import React, { useEffect, useState } from 'react';
import { MdArrowForward } from 'react-icons/md';

const ola = ('../../../public/img/Ola.png');

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
    
    console.log("é mobile?", isMobile);

    const styles: { [key: string]: React.CSSProperties } = {
        sectionMain: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '20px' : '50px',
            paddingTop: isMobile ? '0px' : '5px',
            gap: '10px',
            width: '100%',
            marginLeft: isMobile ? '0' : '80px',
            flexWrap: "wrap" as const,
        },
        textContent: {
            flex: 1,
            color: 'white',
            textAlign: isMobile ? 'center' : 'left',
        },
        h1: {
            fontSize: isMobile ? '2.5rem' : '3rem',
            marginBottom: '10px',
            background: 'linear-gradient(to top,#8b3a45, #d45e6e)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        },
        h3: {
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            marginBottom: '15px',
            height: '56px',
            background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        },
        p: {
            background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
            color: 'transparent',
            WebkitBackgroundClip: 'text',
            textAlign: (isMobile ? 'center' : 'justify') as React.CSSProperties['textAlign'],
            backgroundClip: 'text',
            fontSize: isMobile ? '1rem' : '1.2rem',
            marginBottom: '20px',
            lineHeight: 1.5,
        },
        container1: {
            maxWidth: '85%',
        },
        container2: {
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'center',
            flexWrap: ('wrap' as React.CSSProperties['flexWrap']),
            gap: '10px',
        },
        button: {
            padding: '15px 21px',
            background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
            color: 'white',
            border: 'none',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '1rem',
        },
        arrowIcon: {
            marginLeft: '20px',
            cursor: 'pointer',
        },
        imageWrapper: {
            marginTop: isMobile ? '30px' : '10px',
            marginRight: isMobile ? '0' : '200px',

        },
        image: {
            width: isMobile ? '300px' : '600px',
            objectFit: ('cover' as React.CSSProperties['objectFit']),
            maxWidth: '100%',
            borderRadius: '50%',
        },
        section2: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '50px',
        },
        video: {
            backgroundColor: 'transparent',
            width: '50%',
            height: '500px',
        },
    };
    function aindaNão() {
        return (
            alert('Em desenvolvimento...')
        )
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
                            <MdArrowForward size={40} color=" #d45e6e" style={styles.arrowIcon} />
                        </a>
                    </div>
                </div>

                <div style={styles.imageWrapper}>
                <img src="/img/Ola.png" alt="Dra. Rosa" style={styles.image} />
                </div>
            </section>

            {/* <section style={styles.section2}>
                <video controls style={styles.video}>
                    <source src="/video/WhatsApp Video 2025-04-28 at 16.00.21.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </section> */}
        </>
    );
}
