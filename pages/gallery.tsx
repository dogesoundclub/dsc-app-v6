import DesktopGallery from './desktop/gallery';
import MobileGallery from './mobile/gallery';
import useIsMobile from '../hooks/display';

export default function GalleryPage() {
  const display = useIsMobile();
  return display ? <MobileGallery /> : <DesktopGallery />;
};