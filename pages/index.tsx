import DesktopIndex from "./desktop/about";
import MobileIndex from "./mobile";
import useIsMobile from "@/hooks/display";
//import DesktopHome from "./desktop";


export default function Index() {
  const display = useIsMobile();
  return display ? <MobileIndex /> : <DesktopIndex />;
}