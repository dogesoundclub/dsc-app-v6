import DesktopGallery from "./desktop/mates";
import MobileGallery from "./mobile/mates";
import type { Props } from "next/app";
import { device } from '../util/device';

export default function GalleryPage( { isMobile }: Props) {
  return isMobile ? <MobileGallery /> : <DesktopGallery />;
};

export const getServerSideProps = device;