import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoText}>Filmes</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
      </nav>
    </header>
  );
}
