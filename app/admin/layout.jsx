import { assets } from "@/assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {

    return (
        <>
            <div className="flex">
            <ToastContainer
                position="top-right"
                hideProgressBar={true}
                closeOnClick={true}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
            <Sidebar />
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                    <h3 className="font-medium">Admin Panel</h3>
                    <Image src={assets.profile_icon} width={800} height={800} alt="Profiile icon" className="w-[40px] h-[40px] object-cover rounded-full" />
                </div>
                {children}
            </div>
            </div>
        </>
    )
}