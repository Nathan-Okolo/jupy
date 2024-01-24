import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jupy',
  description: 'Jupy'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#2d89ef' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#fff' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
      </head>
      <body className={`${raleway.className} text-[#51A1FF]`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
