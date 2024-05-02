import Image from "next/image";
import {GoChecklist} from "react-icons/go";

const CareerMove = () =>{
    return (
        <div className="flex w-full py-40 mt-20 px-36 bg-white items-center space-x-5">
            <div className="flex w-1/2 items-start justify-start">
                <Image src="/images/discovery.webp" alt="discovery-image" width={700} height={700}/>
            </div>
            <div className='flex w-1/2 flex-col'>
                <h3 className="text-5xl w-3/4 leading-[1.3] font-light mt-5">Make the career move you want</h3>
                <div className="flex flex-col items-start mt-8 space-y-5 w-full">
                    <div className="flex items-center space-x-5">
                        <i className="flex bg-white rounded-lg p-3"><GoChecklist fill="#8a191c" size={40}/></i>
                        <p className="text-xl">Get instant job recommendations tailored to your skills and goals </p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <i className="flex bg-white rounded-lg p-3"><GoChecklist fill="#8a191c" size={40}/></i>
                        <p className="text-xl">Gain exposure to a range of companies and job types: fully remote, hybrid or on-site, and contract or permanent </p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <i className="flex bg-white rounded-lg p-3"><GoChecklist fill="#8a191c" size={40}/></i>
                        <p className="text-xl">Access competitive pay, benefits, and free online training and development </p>
                    </div>
                </div>
                <div className="flex items-center w-1/2 space-x-5 mt-3">
                    <button
                        className="flex w-52 mt-5 items-center justify-center font-bold space-x-3 bg-[#8a191c] text-whiten p-3 rounded-full">Get job matches
                    </button>
                    <button
                        className="flex w-48 mt-5 items-center font-bold justify-center space-x-3 border border-[#8a191c] text-[#8a191c] p-3 rounded-full">Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CareerMove;