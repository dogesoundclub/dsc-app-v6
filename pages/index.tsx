import DesktopIndex from "./desktop/about";
import MobileIndex from "./mobile";
//import DesktopHome from "./desktop";
import type { AppProps } from "next/app";
import type { GetServerSidePropsContext } from 'next';

interface Props extends AppProps {
  isMobile: boolean;
}

export default function Index({ isMobile }: Props) {
  return isMobile ? <MobileIndex /> : <DesktopIndex />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userAgent = context.req.headers['user-agent'] as string;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return {
    props: { isMobile },
  };
}