import Image from "next/image";
import {GoChecklist} from "react-icons/go";

const FindTalent = () =>{
    return (
        <div className="flex w-full py-40 mt-20 px-36 bg-white items-center space-x-5">
            <div className="flex w-1/2 items-start justify-start">
                <Image src="/images/discovery.webp" alt="discovery-image" width={700} height={700}/>
            </div>
            <div className='flex w-1/2 flex-col'>
                <h3 className="text-5xl w-3/4 leading-[1.3] font-light mt-5">Find talent to get more done</h3>
                <div className="flex flex-col items-start mt-8 space-y-5 w-full">
                    <div className="flex items-center space-x-5">
                        <i className="flex bg-white rounded-lg p-3"><GoChecklist fill="#8a191c" size={40}/></i>
                        <p className="text-xl">Access Robert Half’s large network of in-demand candidates for contract
                            and permanent roles </p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <i className="flex bg-white rounded-lg p-3"><GoChecklist fill="#8a191c" size={40}/></i>
                        <p className="text-xl">Quickly match to professionals who have the right skills and industry
                            experience </p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <i className="flex bg-white rounded-lg p-3"><GoChecklist fill="#8a191c" size={40}/></i>
                        <p className="text-xl">Let us recruit qualified candidates for you at every level from office
                            support to C-suite </p>
                    </div>
                </div>
                <div className="flex items-center w-1/2 space-x-5 mt-3">
                    <button
                        className="flex w-52 mt-5 items-center justify-center font-bold space-x-3 bg-[#8a191c] text-whiten p-3 rounded-full">Find your next hire
                    </button>
                    <button
                        className="flex w-48 mt-5 items-center font-bold justify-center space-x-3 border border-[#8a191c] text-[#8a191c] p-3 rounded-full">Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FindTalent;