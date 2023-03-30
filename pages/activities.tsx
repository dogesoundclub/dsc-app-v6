import DesktopReady from './desktop/activities';
import MobileReady from './mobile/activities';
import useIsMobile from '../hooks/display';

export default function ActivitiesPage() {
  const display = useIsMobile();
  return display ? <MobileReady /> : <DesktopReady/>;
};