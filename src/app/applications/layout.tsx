import AppMenu from '@/components/AppMenu'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <AppMenu />
      {children}
    </div>
  )
}
