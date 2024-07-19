import React from 'react';
import styles from '../styles/footer.module.css';
import Link from "next/link"

export default function Footer() {
    
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p> Todos os direitos reservados &copy; 2024</p>
        <div className={styles.footerNav}>
          <Link href="https://github.com/samurks/" target="_blank">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}
