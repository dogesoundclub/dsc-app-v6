import React, { useState } from "react";
import styles from "@/styles/mobile/MobileNav.module.css";


// const navigation = [
//   { name: "about", href: "/about" },
//   { name: "gallery", href: "/gallery" },
//   { name: "board", href: "/board" },
//   { name: "activities", href: "/activities" },
//   { name: "FAQ", href: "/faq" }
// ];

const navigation = [
  { name: "about", href: "/" },
  { name: "gallery", href: "/ready" },
  { name: "board", href: "/ready" },
  { name: "activities", href: "/activities" },
  { name: "FAQ", href: "/faq" }
];

export default function MobileNav() {

  return (
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {navigation.map((item) => {
              return <li key={item.name} className={styles.li}><a href={item.href} className={styles.link}>{item.name}</a></li>
          })}
        </ul>
      </nav>
  );
};