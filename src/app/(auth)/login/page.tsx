import { Button } from '@/components/ui/button'
import React from 'react'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input type="email" name="email" />
        <input type="password" name="password" />
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}
