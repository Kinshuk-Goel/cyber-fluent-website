// components/Header.js

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" passHref>
                    <div className={styles.logo}>Cyber Fluent</div>
                </Link>
                <div className={styles.menu}>
                    <Link href="/" passHref>
                        <div>Home</div>
                    </Link>
                    <Link href="/about" passHref>
                        <div>About</div>
                    </Link>
                    {/* Add more menu items as needed */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
