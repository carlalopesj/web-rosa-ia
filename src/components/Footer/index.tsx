import React from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { styles } from './styles';

export default function Footer() {
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