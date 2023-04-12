import 'next/app';
import type { Props } from 'next/app';

declare module 'next/app' {
    interface Props {
        isMobile: boolean;
    }
}