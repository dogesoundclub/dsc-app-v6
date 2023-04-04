import Desktop404 from "./desktop/404";
import Mobile404 from "./mobile/404";
import useIsMobile from "@/hooks/display";

export default function Page404() {
    const display = useIsMobile();
    return display ? <Mobile404 /> : <Desktop404 />;
};