import DesktopGallery from './desktop/gallery';
import MobileReady from './mobile/ready';
import useIsMobile from '../hooks/display';

export default function GalleryPage() {
  const display = useIsMobile();
  return display ? <MobileReady /> : <DesktopGallery />;
};