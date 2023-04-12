import DesktopEmates from "./desktop/emates";
import MobileEmates from "./mobile/emates";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function EmatesPage({ isMobile }: Props) {
  return isMobile ? <MobileEmates/> : <DesktopEmates />;
};

export const getServerSideProps = device;