import './globals.css'

export const metadata = {
  title: 'Next.js Tic Tac Toe',
  description: 'Este é um projeto simples de jogo da velha usando Next.js 15, TypeScript e Tailwind CSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="antialiased">{children}</body>
    </html>
  )
}