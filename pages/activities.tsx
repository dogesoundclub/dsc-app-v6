import DesktopReady from "./desktop/activities";
import MobileReady from "./mobile/activities";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function ActivitiesPage({ isMobile }: Props) {
  return isMobile ? <MobileReady /> : <DesktopReady/>;
};

export const getServerSideProps = device;