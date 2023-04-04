import React, { useState } from "react";
import Link from "next/link";
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
  { name: "FAQ", href: "/ready" }
];

export default function MobileNav() {

  let [nav, setNav] = useState(false);

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

// {navigation.map((item) => {
//   if(item.name == "gallery") {
//     return <>
//             <li onClick={ ()=> {setNav(true)}} key={item.name} className={styles.li}>{item.name}</li>
//             {nav === true ? <li onClick={()=>{setNav(false)}}>asd</li> : null}
//           </>
//   } else {
//     return <li key={item.name} className={styles.li}><Link href={item.href} className={styles.link}>{item.name}</Link></li>
//   }