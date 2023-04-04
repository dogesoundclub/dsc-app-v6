import DesktopEmates from "./desktop/emates";
import MobileEmates from "./mobile/emates";
import useIsMobile from "@/hooks/display";

export default function EmatesPage() {
  const display = useIsMobile();
  return display ? <MobileEmates/> : <DesktopEmates />;
};