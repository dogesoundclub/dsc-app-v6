import DesktopGallery from './desktop/mates';
import MobileGallery from './mobile/mates';
import useIsMobile from '@/hooks/display';

export default function GalleryPage() {
  const display = useIsMobile();
  return display ? <MobileGallery /> : <DesktopGallery />;
};