import Image from 'next/image';
import React from 'react'
import MailIcon from '../public/mail.svg';

const Button = () => {
  return (
    <button className='flex gap-2 items-center ml-4 rounded-md bg-zinc-800/30 px-4 py-2 text-[#FFFFFFCC]'>
      <MailIcon />
      Connect
    </button>
  )
}

export default Button;
