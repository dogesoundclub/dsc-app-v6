import DesktopBmcs from "./desktop/bmcs";
import MobileReady from "./mobile/ready";
import useIsMobile from "../hooks/display";

export default function BmcsPage() {
  const display = useIsMobile();
  return display ? <MobileReady /> : <DesktopBmcs/>;
};