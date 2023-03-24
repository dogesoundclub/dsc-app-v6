import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Audiowide } from 'next/font/google'


const audiowide = Audiowide({ 
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={audiowide.className}>
      <Component {...pageProps} />
    </main>
  )
}