import React from "react";
import Link from "next/link";
import styles from "@/styles/desktop/DesktopNav.module.css";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

// const navigation = [
//   { name: 'about', href: '/about' },
//   { name: 'gallery', href: '/gallery' },
//   { name: 'board', href: '/board' },
//   { name: 'activities', href: '/activities' },
//   { name: 'FAQ', href: '/faq' }
// ];
const navigation = [
  { name: "about", href: "/about" },
  { name: "gallery", href: "/ready" },
  { name: "board", href: "/ready" },
  { name: "activities", href: "/activities" },
  { name: "FAQ", href: "/ready" },
];

export default function DesktopNav() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/about">
        <img src="./dogesoundclub.png" style={{ height: "100px" }} />
      </Link>
      <audio ref={audioRef}>
        <source src="./Caro.mp3" type="audio/mpeg" />
      </audio>
      <div>
        {isPlaying ? (
          <a onClick={handleStop}>
            <img src="./music.png" />
          </a>
        ) : (
          <a onClick={handlePlay}>
            <img src="./music.png" />
          </a>
        )}
      </div>
      <ul className={styles.ul}>
        {navigation.map((item) => (
          <li
            key={item.name}
            className={`${styles.li} ${styles.link}`}
            onClick={() => router.push(item.href)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
