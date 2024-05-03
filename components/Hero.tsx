import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const Hero = () =>{
    return(
        <div className='flex w-full flex-col py-30 px-36 relative'>
            <h3 className="text-5xl w-1/2 leading-[1.3] font-light mt-5">Anything’s possible when you have the talent</h3>
            <p className="text-xl py-5 mt-3 w-1/2 leading-[1.3] font-semibold">Find skilled candidates, in-demand jobs and the solutions you need to help you do your best work yet.</p>
            <div className="flex mt-8 space-x-5 w-full">
                <div className="flex flex-col w-1/4">
                    <p className="text-sm leading-[1.3] font-bold">FOR JOB SEEKERS</p>
                    <Link href={'/'} className="mt-5 bg-white flex items-center font-bold justify-center border-2 rounded-full p-5 w-3/4">
                        Find your next job
                    </Link>
                </div>
                <hr className="border h-28" />
                <div className="flex flex-col w-1/2">
                    <p className="text-sm leading-[1.3] font-bold">FOR BUSINESSES</p>
                    <div className="flex w-full space-x-5">
                        <Link href={'/'} className="mt-5 bg-white flex items-center font-bold justify-center border-2 rounded-full p-5 w-auto">
                            Find your next hire
                        </Link>
                        <Link href={'/'} className="mt-5 bg-white border-2 font-bold flex items-center justify-center rounded-full p-5 w-auto">
                            Explore Consulting solutions
                        </Link>
                    </div>
                </div>
            </div>
        {/*    search*/}
           <div className="absolute w-full top-150">
               <SearchBar />
           </div>
        </div>
    )
}

export default Hero;