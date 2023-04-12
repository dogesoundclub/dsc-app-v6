import DesktopAbout from "./desktop/about";
import MobileAbout from "./mobile/about";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function AboutPage({ isMobile }: Props) {
  return isMobile ? <MobileAbout /> : <DesktopAbout />;
};

export const getServerSideProps = device;