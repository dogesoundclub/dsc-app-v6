import React from 'react';
import Link from 'next/link';
import styles from '@/styles/mobile/MobileNav.module.css';


// const navigation = [
//   { name: 'about', href: '/about' },
//   { name: 'gallery', href: '/gallery' },
//   { name: 'board', href: '/board' },
//   { name: 'activities', href: '/activities' },
//   { name: 'FAQ', href: '/faq' }
// ];

const navigation = [
  { name: 'about', href: '/' },
  { name: 'gallery', href: '/ready' },
  { name: 'board', href: '/ready' },
  { name: 'activities', href: '/ready' },
  { name: 'FAQ', href: '/ready' }
];

const MobileNav = () => {



  return (
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {navigation.map((item) => (
            <li key={item.name} className={styles.li}><Link href={item.href} className={styles.link}>{item.name}</Link></li>
          ))}
        </ul>
      </nav>
  );
};
export default MobileNav;