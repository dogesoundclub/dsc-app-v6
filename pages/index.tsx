import React from 'react';
import MobileHome from './mobile';
import DesktopHome from './desktop';

const Home = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return isMobile ? <MobileHome /> : <DesktopHome />;
};

export default Home;