import DesktopFaq from "./desktop/faq";
import MobileFaq from "./mobile/faq";
import useIsMobile from "@/hooks/display";

export default function Index() {
  const display = useIsMobile();
  return display ? <MobileFaq /> : <DesktopFaq />;
}