import React from 'react';
import Link from 'next/link';
import styles from '@/styles/desktop/DesktopNav.module.css';
import Image from 'next/image';

const navigation = [
  { name: 'about', href: '/about' },
  { name: 'gallery', href: '/gallery' },
  { name: 'board', href: '/board' },
  { name: 'activities', href: '/activities' },
  { name: 'FAQ', href: '/faq' }
];

const DesktopNav = () => {
  return (
      <nav className={styles.nav}>
        <ul>
          <Link href='/'><img src="/dogesoundclub.png" style={{width: "100%"}}/></Link>
        </ul>
        <ul className={styles.ul}>
          {navigation.map((item) => (
          <li className={styles.li}><Link href={item.href} className={styles.link}>{item.name}</Link>
          </li>
          ))}
        </ul>
      </nav>
  );
};

export default DesktopNav;