import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-zinc-950 py-5 items-center'>
        <p className='text-white text-2xl'>Posts</p>
        <p className='text-sm text-white'>All right reserved. Copyright Posts</p>
        <div className="flex gap-3">
            <Image src={assets.facebook} alt='Facebook' width={20} height={20} />
            <Image src={assets.instagram} alt='Twitter' width={20} height={20} />
            <Image src={assets.youtube} alt='Google Plus' width={20} height={20} />
        </div>
    </div>
  )
}

export default Footer