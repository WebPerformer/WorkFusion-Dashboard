import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

import Navbar from '@/components/Navbar'
import AppMenu from '@/components/AppMenu'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return redirect('/sign-in')
  }

  return (
    <div>
      <Navbar />
      <AppMenu />
      {children}
    </div>
  )
}
