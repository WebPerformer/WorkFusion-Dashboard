'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const AppMenu = () => {
  const pathname = usePathname()

  return (
    <div className="max-w-[1440px] m-auto px-10 mt-10">
      <Link href="/applications">
        <Button
          variant={pathname === '/applications' ? 'outline' : 'ghost'}
          className={
            pathname === '/applications'
              ? 'text-foreground shadow-md'
              : undefined
          }
        >
          Overview
        </Button>
      </Link>
      <Link href="/applications/projects">
        <Button
          variant={pathname === '/applications/projects' ? 'outline' : 'ghost'}
          className={
            pathname === '/applications/projects'
              ? 'text-foreground shadow-md'
              : undefined
          }
        >
          Projects
        </Button>
      </Link>
      <Link href="/applications/meeting">
        <Button
          variant={pathname === '/applications/meeting' ? 'outline' : 'ghost'}
          className={
            pathname === '/applications/meeting'
              ? 'text-foreground shadow-md'
              : undefined
          }
        >
          Meeting
        </Button>
      </Link>
      <Link href="/applications/agenda">
        <Button
          variant={pathname === '/applications/agenda' ? 'outline' : 'ghost'}
          className={
            pathname === '/applications/agenda'
              ? 'text-foreground shadow-md'
              : undefined
          }
        >
          Agenda
        </Button>
      </Link>
      <Link href="/applications/ai">
        <Button
          variant={pathname === '/applications/ai' ? 'outline' : 'ghost'}
          className={
            pathname === '/applications/ai'
              ? 'text-foreground shadow-md'
              : undefined
          }
        >
          AI Tools
        </Button>
      </Link>
    </div>
  )
}

export default AppMenu
