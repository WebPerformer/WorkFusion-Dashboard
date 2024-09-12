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
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
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
