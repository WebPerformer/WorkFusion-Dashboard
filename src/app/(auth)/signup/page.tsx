import { Button } from '@/components/ui/button'
import React from 'react'

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form action="">
        <input type="email" name="email" />
        <input type="password" name="password" />
        <Button type="submit">Signup</Button>
      </form>
    </div>
  )
}
