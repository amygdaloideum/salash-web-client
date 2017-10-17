import React from 'react';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>Made with <span>♥</span> by Daniel Bornstrand</p>
    </div>
  );
}

export default Footer;
