import React from 'react';
import Link from 'next/link';
import styles from 'styles/desktop/DesktopNav.module.css';
import Image from 'next/image';

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" passHref>
            <div className={styles.navLink}>
              <Image
                src="/imgs/nav/dscLogoForHome.svg"
                alt="Home"
                className={styles.navLogo}
                width="12"
                height="2"
              />
            </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" passHref>
            <div className={styles.navLink}>
              <Image
                src="/imgs/nav/menuAbout.svg"
                alt="About"
                width="12"
                height="2"
              />
            </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/gallery" passHref>
            <div className={styles.navLink}>
                <Image
                  src="/imgs/nav/menuAbout.svg"
                  alt="About"
                  width="12"
                  height="2"
                />
              </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/board" passHref>
            <div className={styles.navLink}>
                <Image
                  src="/imgs/nav/menuAbout.svg"
                  alt="About"
                  width="12"
                  height="2"
                />
              </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/activities" passHref>
            <div className={styles.navLink}>
                <Image
                  src="/imgs/nav/menuAbout.svg"
                  alt="About"
                  width="12"
                  height="2"
                />
              </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/faq" passHref>
            <div className={styles.navLink}>
                <Image
                  src="/imgs/nav/menuAbout.svg"
                  alt="About"
                  width="12"
                  height="2"
                />
              </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;