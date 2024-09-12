import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ModeToggle } from '../components/DarkMode'
import { signOutAction } from '@/app/actions'

const Menu = () => {
  return (
    <ul className="flex">
      <Link href="/overview">
        <Button variant="ghost" className="text-foreground">
          Applications
        </Button>
      </Link>
      <Button variant="ghost">Accesses</Button>
      <Button variant="ghost">Articles & Docs</Button>
      <form action={signOutAction}>
        <Button type="submit" variant="outline">
          Sign out
        </Button>
      </form>
      <ModeToggle />
    </ul>
  )
}

export default Menu
