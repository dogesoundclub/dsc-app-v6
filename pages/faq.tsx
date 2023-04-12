import DesktopFaq from "./desktop/faq";
import MobileFaq from "./mobile/faq";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function Index({ isMobile }: Props) {
  return isMobile ? <MobileFaq /> : <DesktopFaq />;
}

export const getServerSideProps = device;