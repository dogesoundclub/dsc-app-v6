import DesktopError from "./desktop/_error";
import MobileError from "./mobile/_error";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function PageError({ isMobile }: Props) {
    return isMobile ? <MobileError /> : <DesktopError />;
  };

  export const getServerSideProps = device;