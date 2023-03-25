import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import MobileHome from './mobile';
//import DesktopHome from './desktop';
import DesktopHome from './about';
import React, {useState, useEffect} from 'react';
import { Audiowide } from 'next/font/google'

const audiowide = Audiowide({ 
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return isMobile ? <MobileHome /> : <DesktopHome />;
}