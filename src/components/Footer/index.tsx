import React from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

export function Footer() {
  const styles = {
    container: {
      backgroundColor: '#40153d',
      color: '#ffffff',
      padding: '60px 20px 30px',
      fontFamily: "'Arial', sans-serif",
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column' as const,
    },
    infoBox: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginBottom: '40px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '20px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transform: 'translateY(-5px)',
      }
    },
    iconLoc: {
      fontSize: '50px',
      color: '#f8a5c2',
      flexShrink: 0,
    },
    icon: {
      fontSize: '30px',
      color: '#f8a5c2',
      flexShrink: 0,
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '8px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '0',
      color: '#f8a5c2',
    },
    text: {
      fontSize: '16px',
      margin: '0',
      lineHeight: '1.5',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      ':hover': {
        color: '#f8a5c2',
        textDecoration: 'underline',
      }
    },
    divider: {
      height: '1px',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      margin: '30px 0',
    },
    bottom: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
      gap: '20px',
    },
    copyright: {
      fontSize: '14px',
      opacity: 0.8,
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
    },
    socialIcon: {
      color: '#ffffff',
      fontSize: '20px',
      transition: 'color 0.3s ease',
      ':hover': {
        color: '#f8a5c2',
      }
    }
  };

  return (
    <footer style={styles.container}>
      <div style={styles.content}>
        <div style={styles.infoBox}>
          <div style={styles.infoItem}>
            <MdLocationOn style={styles.iconLoc} />
            <div style={styles.textContainer}>
              <h3 style={styles.title}>Venha nos conhecer</h3>
              <a
                href='https://www.google.com/maps/place/UNICEPLAC+-+Centro+Universitário+do+Planalto+Central+Apparecido+dos+Santos/@-16.0014076,-48.0535545,17z/data=!3m1!4b1!4m6!3m5!1s0x935a2a9b5b3167a9:0xadca780ed76e5c07!8m2!3d-16.0014076!4d-48.0509796!16s%2Fg%2F1tdym8qn?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D'
                style={{ ...styles.text, ...styles.link }}>
                UNICEPLAC</a>
            </div>
          </div>
          <div style={styles.infoItem}>
            <MdPhone style={styles.icon} />
            <div style={styles.textContainer}>
              <h3 style={styles.title}>Ligue para nós</h3>
              <p style={styles.text}>(61) 4002-8922</p>
            </div>
          </div>
          <div style={styles.infoItem}>
            <MdEmail style={styles.icon} />
            <div style={styles.textContainer}>
              <h3 style={styles.title}>Envie-nos uma mensagem</h3>
              <a
                href="mailto:drarosa.ia@gmail.com"
                style={{ ...styles.text, ...styles.link }}
              >
                drarosa.ia@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div style={styles.divider} />
        <div style={styles.bottom}>
          <p style={styles.copyright}>2025 © ROSA IA - Todos os direitos reservados.</p>
          <div style={styles.socialLinks}>
          </div>
        </div>
      </div>
    </footer>
  );
}