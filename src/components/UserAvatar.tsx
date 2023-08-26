import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
type Props = {
  user: any
}

const UserAvatar = ({user}: Props) => {
  return (
      <Avatar>
        <AvatarImage src={user.image} />
        <AvatarFallback className='sr-only'>{user.name}</AvatarFallback>
      </Avatar>
  )
}

export default UserAvatar