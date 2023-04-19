import DesktopMix from "./desktop/mix";
import MobileMix from "./mobile/mix";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function MixPage({ isMobile }: Props) {
  return isMobile ? <MobileMix /> : <DesktopMix/>;
};

export const getServerSideProps = device;