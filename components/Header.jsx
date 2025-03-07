import { assets } from '@/assets/assets'
import axios from 'axios';
import Image from 'next/image'
import { useState} from 'react'
import { toast } from 'react-toastify';

const Header = () => {

  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post('/api/email', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else {
      toast.error("Error");
    }
  }

  return (
    <div className='py-5 px-5 md:px-15 lg:px-28'>
        <div className='flex justify-between items-center'>
            <span className='font-medium text-2xl sm:text-3xl'>Posts</span>
           
            <button className='py-3 px-4 sm:py-4 sm:px-7 bg-blue-100 text-blue-500 rounded-full cursor-pointer font-semibold text-center transition-all duration-500 hover:bg-blue-500 hover:text-white text-base'>
              Register Now
          </button>

        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>My Posts</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-lg'>Whether you're passionate about coding, design, or just curious to learn something new, this is the place for you. Let’s explore, create, and innovate together!</p>
            <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 gap-4'>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your better email' className='pl-4 outline-none w-full border-b border-black' required />
                <button type='submit' className='border border-zinc-900 py-4 px-4 sm:px-4 duration-100 active:bg-green-500 active:border-green-500 active:text-white rounded-lg'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header