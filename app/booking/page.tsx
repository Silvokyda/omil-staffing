"use client"
import Image from 'next/image'
import Link from "next/link";

const Booking = () =>{
    return(
        <div className="flex w-3/4 m-auto shadow-2xl mt-40">
            <div className="flex flex-col bg-[#8a191c] text-whiten">
                <h1 className="text-4xl font-bold leading-10 p-4">Book Omil</h1>
                <h5 className="mt-8 text-2xl font-semibold">Let’s get Personal…</h5>
                <p  className="mt-8 text-lg">
                    If you have any questions or inquiries – simply give us a call,
                    email us fill out the contact form, and we will get back to you as soon as possible.
                </p>
                <div className="flex flex-col mt-8 space-y-5">
                    <span className="flex items-center w-full py-3 space-x-3 border p-3 border-gray-300 rounded-md">
                        <Image src="/icons/gmail.svg" alt="gmail icon" width={50} height={50} />
                        <Link href={"oss@omilstaffingservices.com"} target="_blank" className="text-lg">oss@omilstaffingservices.com</Link>
                    </span>
                    <span className="flex items-center w-full py-3 space-x-3 border p-3 border-gray-300 rounded-md">
                        <Image src="/icons/whatsapp.svg" alt="gmail icon" width={50} height={50}/>
                        <Link href={"+254 114847249"} target="_blank" className="text-lg">+254 114847249</Link>
                    </span>
                </div>
            </div>
            <hr/>
            <div className="flex flex-col">
                <h1>Book Omil</h1>
                <h5>Let’s get Personal…</h5>
                <p>
                    If you have any questions or inquiries – simply give us a call,
                    email us fill out the contact form, and we will get back to you as soon as possible.
                </p>
                <div className="flex flex-col">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Booking;