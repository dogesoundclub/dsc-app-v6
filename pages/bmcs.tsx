import DesktopBmcs from "./desktop/bmcs";
import MobileReady from "./mobile/ready";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function BmcsPage({ isMobile }: Props) {
  return isMobile ? <MobileReady /> : <DesktopBmcs/>;
};

export const getServerSideProps = device;