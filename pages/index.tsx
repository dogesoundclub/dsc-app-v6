import DesktopIndex from "./desktop/";
import MobileIndex from "./mobile";
//import DesktopHome from "./desktop";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function Index({ isMobile }: Props) {
  return isMobile ? <MobileIndex /> : <DesktopIndex />;
}

export const getServerSideProps = device;