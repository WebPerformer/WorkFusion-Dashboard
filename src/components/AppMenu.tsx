'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const AppMenu = () => {
  const pathname = usePathname()

  return (
    <div className="max-w-[1440px] m-auto px-10 mt-10">
      <Link href="/overview">
        <Button
          variant={pathname === '/overview' ? 'outline' : 'ghost'}
          className={
            pathname === '/overview' ? 'text-foreground shadow-md' : undefined
          }
        >
          Overview
        </Button>
      </Link>
      <Link href="/projects">
        <Button
          variant={pathname === '/projects' ? 'outline' : 'ghost'}
          className={
            pathname === '/projects' ? 'text-foreground shadow-md' : undefined
          }
        >
          Projects
        </Button>
      </Link>
      <Link href="/meeting">
        <Button
          variant={pathname === '/meeting' ? 'outline' : 'ghost'}
          className={
            pathname === '/meeting' ? 'text-foreground shadow-md' : undefined
          }
        >
          Meeting
        </Button>
      </Link>
      <Link href="/agenda">
        <Button
          variant={pathname === '/agenda' ? 'outline' : 'ghost'}
          className={
            pathname === '/agenda' ? 'text-foreground shadow-md' : undefined
          }
        >
          Agenda
        </Button>
      </Link>
      <Link href="/ai">
        <Button
          variant={pathname === '/ai' ? 'outline' : 'ghost'}
          className={
            pathname === '/ai' ? 'text-foreground shadow-md' : undefined
          }
        >
          AI Tools
        </Button>
      </Link>
    </div>
  )
}

export default AppMenu
