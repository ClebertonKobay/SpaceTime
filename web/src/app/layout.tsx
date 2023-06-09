import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

export const roboto = Roboto_Flex({ 
  subsets: ['latin'],
  variable: '--font-roboto' 
});
export const baiJamjuree = Bai_Jamjuree({
  subsets:['latin'],
  weight:'700',
  variable:'--font-baijamjuree'
});

export const metadata = {
  title: 'Cápsula do Tempo',
  description: 'Uma cápsula do tempo contruída com React, Next, TailWind, e TypeScript  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} ${baiJamjuree.className} font-sans text-gray-100 bg-gray-900 `}>{children}</body>
    </html>
  )
}
