import {BiSearch} from "react-icons/bi";
import {FaSearchLocation} from "react-icons/fa";
import Image from "next/image";

const ProductPitch = () =>{
    return (
        <div className="flex w-full py-40 mt-20 px-36 bg-white">
            <div className='flex w-1/2 flex-col'>
                <h3 className="text-5xl w-3/4 leading-[1.3] font-light mt-5">Find top candidates to get the job
                    done.</h3>
                <p className="text-xl py-5 mt-3 w-3/4 leading-[1.3] font-normal">
                    Tell us about your open role, and instantly see highly skilled candidates with the in-demand skills
                    and experience you&apos;re looking for.
                </p>
                <div className="flex flex-col items-start mt-8 space-y-5 w-full">
                    <div className="flex items-center space-x-5">
                        <p className="text-xl">I&apos;m looking for a</p>
                        <div className="flex items-center space-x-3 bg-[#e1f0f5] p-3 rounded-xl">
                            <BiSearch/>
                            <input type="text" className="h-full outline-0 bg-transparent"
                                   placeholder="Job title"/>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <p className="text-xl">For a role located in</p>
                        <div className="flex items-center space-x-3 bg-[#e1f0f5] p-3 rounded-xl">
                            <FaSearchLocation/>
                            <input type="text" className="h-full outline-0 bg-transparent"
                                   placeholder="City, State or Zip Code"/>
                        </div>
                    </div>
                </div>
                <button
                    className="flex w-45 mt-5 items-center justify-center space-x-3 bg-[#8a191c] text-whiten p-3 rounded-full">Search
                    Jobs
                </button>
            </div>
            <div className="flex w-1/2 items-center justify-start">
                <Image src="/images/discovery.webp" alt="discovery-image" width={700} height={700} />
            </div>
        </div>
    )
}

export default ProductPitch;