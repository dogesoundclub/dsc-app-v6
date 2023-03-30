import DesktopAbout from './desktop/about';
import MobileAbout from './mobile/about';
import useIsMobile from '../hooks/display';

export default function AboutPage() {
  const display = useIsMobile();
  return display ? <MobileAbout /> : <DesktopAbout />;
};