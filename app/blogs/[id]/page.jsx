'use client';

import { assets, blog_data } from '@/assets/assets';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { use, useEffect, useState } from 'react'

const page = ({ params }) => {

    const paramsPromise = use(params)

    const [data, setData] = useState(null);

    useEffect(() => {

        if (!paramsPromise) return;
        const fetchBlogData = async () => {
            const response = await axios.get('/api/blog',{
                params: {
                    id: paramsPromise.id
                }
            })
            setData(response.data);
        }

        fetchBlogData();
    }, [paramsPromise]);

  return (data? <>
    <div className='bg-zinc-900 py-5 px-5 md:px-12 lg:px-28 text-white'>
        <div className='flex justify-between items-center'>
            <Link href='/' className='text-2xl sm:text-3xl' >
                Posts
            </Link>
            <button className='py-3 px-4 sm:py-4 sm:px-7 bg-blue-100 text-blue-500 rounded-full cursor-pointer font-semibold text-center transition-all duration-500 hover:bg-blue-500 hover:text-white text-base'>
              Follow me!
          </button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-bold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 rounded-full' src={data.authorImg} width={60} height={60} alt='Profile Picture' />
            <p className='mt-1 pb-2  max-w-[740px] mx-auto'>{data.author='Emerson Ramos'}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='object-cover h-[270px] sm:h-[500px]' src={data.image} width={1280} height={720} alt='Blog image' />
        
        <div className='blog-content' dangerouslySetInnerHTML={{ __html:data.description }}>

        </div>

        <div className='my-24'>
            <p className='text-black font-bold my-4'>Share this article:</p>
            <div className='flex gap-4'>
                <div className='bg-zinc-900 p-2 rounded-full flex'>
                    <Image src={assets.facebook} alt='Facebook' width={20} height={20} />
                </div>
                <div className='bg-zinc-900 p-2 rounded-full flex'>
                    <Image src={assets.instagram} alt='Facebook' width={20} height={20} />
                </div>
                <div className='bg-zinc-900 p-2 rounded-full flex'>
                    <Image src={assets.youtube} alt='Facebook' width={20} height={20} />
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>:<></>
  );
} // id = folder name

export default page
