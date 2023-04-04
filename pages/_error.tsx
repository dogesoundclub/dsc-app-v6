import DesktopError from './desktop/_error';
import MobileError from './mobile/_error';
import useIsMobile from '@/hooks/display';

export default function PageError() {
    const display = useIsMobile();
    return display ? <MobileError /> : <DesktopError />;
  };
