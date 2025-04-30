import React from 'react';

export function Navbar() {

  const styles = {
    nav: {

      background: 'linear-gradient(to right,  #8b3a45, #d45e6e)',
      color: 'transparent',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 100,
    },
    logo: {
      borderRadius: '50%',
      width: '5%',
      marginRight: '20px'
    },
    ul: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
      marginLeft: '80px',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: 100,
    },
    li: {
      fontSize: '12px',
      lineHeight: '14.63px',
      cursor: 'pointer',
    },
    btnNav: {
      display: 'flex',
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 20px',
      background: 'linear-gradient(to right,  #8b3a45, #d45e6e)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '40px',
      cursor: 'pointer',
      fontSize: '12px',
    }
  };

  function aindaNão() {
    return (
      alert('Em desenvolvimento...')
    )
  }

  return (
    <nav style={styles.nav}>
      <img src="/img/logo.png" alt="Logo" style={styles.logo} />
      <ul style={styles.ul}>
        <li onClick={aindaNão} id='#sobre' style={styles.li}><strong>SOBRE</strong></li>
        <li onClick={aindaNão} style={styles.li}><strong>SERVIÇOS</strong></li>
        <li onClick={aindaNão} style={styles.li}><strong>TECNOLOGIAS</strong></li>
        <li onClick={aindaNão} style={styles.li}><strong>COMO FAZER</strong></li>
        <li onClick={aindaNão}><button style={styles.btnNav}><strong>CADASTRE-SE</strong></button></li>
        <li onClick={aindaNão}><button style={styles.btn2Nav}><strong>ENTRAR</strong></button></li>
        {/* <ThemeToggle /> */}
      </ul>
    </nav>
  );
}
