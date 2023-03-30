import DesktopBoard from './desktop/board';
import MobileBoard from './mobile/board';
import useIsMobile from '../hooks/display';

export default function BoardPage() {
  const display = useIsMobile();
  return display ? <MobileBoard /> : <DesktopBoard />;
};