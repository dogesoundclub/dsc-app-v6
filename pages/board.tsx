import DesktopBoard from "./desktop/board";
import MobileBoard from "./mobile/board";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function BoardPage({ isMobile }: Props) {
  return isMobile ? <MobileBoard /> : <DesktopBoard />;
};

export const getServerSideProps = device;