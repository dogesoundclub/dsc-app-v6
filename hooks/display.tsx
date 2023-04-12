import{ useState, useEffect, useLayoutEffect } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        }, []);
        return isMobile;
}