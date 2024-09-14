import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    return redirect('/overview')
  }

  return (
    <div className="max-w-7xl flex flex-col gap-12 items-start">{children}</div>
  )
}
