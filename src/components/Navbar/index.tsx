import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Fecha o menu quando voltar pro desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const styles = {
    nav: {
      background: 'linear-gradient(to right,  #8b3a45, #d45e6e)',
      color: 'transparent' as const,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text' as any,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '0 10px' : '10px 50px',
      position: 'relative' as const,
      zIndex: 1000,
    },
    logo: {
      borderRadius: '50%',
      width: isMobile ? '90px': '6%',
      padding: '20px'
    },
    ul: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
      marginLeft: '80px',
      alignItems: 'center',
      gap: '100px',
    },
    li: {
      fontSize: '15px',
      lineHeight: '14.63px',
      cursor: 'pointer',
      background: 'linear-gradient(to right,  #8b3a45, #d45e6e)',
      color: 'transparent' as const,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text' as any,
      textAlign: 'right' as 'right',
      paddingRight: '10px',
    },
    btnNav: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 20px',
      background: 'linear-gradient(to right,  #8b3a45, #d45e6e)',
      color: '#ffffff',
      border: '2px solid #ffffff',
      borderRadius: '40px',
      cursor: 'pointer',
      fontSize: '12px',
    },
    btn2Nav: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 20px',
      background: 'linear-gradient(to right,  #8b3a45, #d45e6e)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '40px',
      cursor: 'pointer',
      fontSize: '12px',
    },
    mobileMenu: {
      position: 'fixed' as const,
      top: 0,
      right: 0,
      height: '100vh',
      width: '60%',
      backgroundColor: '#fefaf9',
      padding: '30px 20px',
      paddingRight: '50px',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: '30px',
      zIndex: 999,
      boxShadow: '-4px 0 8px rgba(0, 0, 0, 0.1)',
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
      boxSizing: 'border-box' as const,
    },
    overlay: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 998,
    },
    closeIcon: {
      cursor: 'pointer',
      color: '#8b3a45',
      fontSize: '28px',
      alignSelf: 'flex-end',
      marginRight: '20px',
    },
  };

  function aindaNão() {
    return alert('Em desenvolvimento...');
  }

  return (
    <nav style={styles.nav}>
      <img src="/img/logo.png" alt="Logo" style={styles.logo} />

      {/* DESKTOP NAVBAR */}
      {!isMobile && (
        <ul style={styles.ul}>
          <li onClick={aindaNão} style={styles.li}><strong>SOBRE</strong></li>
          <li onClick={aindaNão} style={styles.li}><strong>SERVIÇOS</strong></li>
          <li onClick={aindaNão} style={styles.li}><strong>TECNOLOGIAS</strong></li>
          <li onClick={aindaNão} style={styles.li}><strong>COMO FAZER</strong></li>
          <li onClick={aindaNão}><button style={styles.btnNav}><strong>CADASTRE-SE</strong></button></li>
          <li onClick={aindaNão}><button style={styles.btn2Nav}><strong>ENTRAR</strong></button></li>
        </ul>
      )}

      {/* MOBILE BOTÃO MENU */}
      {isMobile && (
        <>
          {!isMenuOpen ? (
            <GiHamburgerMenu
              size={30}
              color="#8b3a45"
              onClick={() => setIsMenuOpen(true)}
              style={{ cursor: 'pointer', padding: '40px 25px' }}
            />
          ) : (
            <>
              <div style={styles.overlay} onClick={() => setIsMenuOpen(false)} />
              <div style={styles.mobileMenu}>
                <AiOutlineClose
                  size={24}
                  color="#8b3a45"
                  onClick={() => setIsMenuOpen(false)} style={styles.closeIcon} />
                    <li onClick={aindaNão} style={styles.li}><strong>SOBRE</strong></li>
                    <li onClick={aindaNão} style={styles.li}><strong>SERVIÇOS</strong></li>
                    <li onClick={aindaNão} style={styles.li}><strong>TECNOLOGIAS</strong></li>
                    <li onClick={aindaNão} style={styles.li}><strong>COMO FAZER</strong></li>
                    <li onClick={aindaNão}><button style={styles.btnNav}><strong>CADASTRE-SE</strong></button></li>
                    <li onClick={aindaNão}><button style={styles.btn2Nav}><strong>ENTRAR</strong></button></li>
              </div>
            </>
          )}
        </>
      )}
    </nav>
  );
}