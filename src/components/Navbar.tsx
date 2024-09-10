'use client'
import React from 'react'
import Menu from './Menu'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="border-b border-border">
      <div className="max-w-[1440px] m-auto px-10 py-3 flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <Button variant="outline">
              Labs Team <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <h1 className="text-foreground text-base font-medium">
              Gabriel Araujo
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
