import { assets, blog_data } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({title, description, category, image, id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[500px] lg:max-w-[800px]'>
        <Link href={`/blogs/${id}`}>
        <Image src={image} alt='Blog image' width={2000} height={2000} className='w-full sm:w-[500px] lg:w-[800px] m-auto h-[200px] sm:h-[250px] lg:h-[500px] object-cover transition-all duration-500 hover:scale-95' />
        </Link>
        <p className='ml-5 mt-5 px-2 sm:px-4 inline-block bg-blue-200 text-blue-700 text-sm sm:text-base rounded-2xl'>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm sm:text-lg tracking-tight text-gray-700' dangerouslySetInnerHTML={{ __html:description.slice(0, 120) }}></p>
            <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center text-zinc-700'>
                Read more <Image src={assets.arrow} alt='Arrow' width={12} height={12} className='ml-2' />
            </Link>
        </div>
    </div>
  )
}

export default BlogItem
