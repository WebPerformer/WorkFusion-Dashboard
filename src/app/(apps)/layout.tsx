import Navbar from '@/components/Navbar'
import AppMenu from '@/components/AppMenu'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar />
      <AppMenu />
      {children}
    </div>
  )
}
