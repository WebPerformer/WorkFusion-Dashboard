import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ModeToggle } from '../components/DarkMode'

const Menu = () => {
  return (
    <ul className="flex">
      <Link href="/applications">
        <Button variant="ghost" className="text-foreground">
          Applications
        </Button>
      </Link>
      <Button variant="ghost">Accesses</Button>
      <Button variant="ghost">Articles & Docs</Button>
      <ModeToggle />
    </ul>
  )
}

export default Menu
