import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-white'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <p className='text-2xl'>Posts</p>
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
            <div className='w-[50%] sm:w-[80%] absolute right-0'>
                <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:bg-zinc-100 transition duration-200'>
                    <Image src={assets.add_icon} alt='Add icon' width={28} height={28} /><p>Add blogs</p>
                </Link>
                <Link href='/admin/blogList' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:bg-zinc-100 transition duration-200'>
                    <Image src={assets.blog_icon} alt='Add icon' width={28} height={28} /><p>Blog lists</p>
                </Link>
                <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:bg-zinc-100 transition duration-200'>
                    <Image src={assets.email_icon} alt='Add icon' width={28} height={28} /><p>Subscriptions</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar