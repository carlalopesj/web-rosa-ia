import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { getNavbarStyles } from './styles'; // ajuste o caminho conforme necessário

export function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getNavbarStyles(isMobile);

  function aindaNão() {
    return alert('Em desenvolvimento...');
  }

  return (
    <nav style={styles.nav}>
      <img src="/img/logo.png" alt="Logo" style={styles.logo} />

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

      {isMobile && (
        <>
          {!isMenuOpen ? (
            <GiHamburgerMenu
              size={30}
              color="#8b3a45"
              onClick={() => setIsMenuOpen(true)}
              style={{ cursor: 'pointer', padding: '0 25px', marginBottom: '20px', marginRight: '5px' }}
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
