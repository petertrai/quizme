'use client'
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

type Props = {
    text: any
}



const SignInButton = ({text}: Props) => {
  return (
    <Button onClick={() => {
        signIn('google')
    }}>
        {text}
    </Button>
  )
}

export default SignInButton