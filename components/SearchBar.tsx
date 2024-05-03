"use client"
import {BiSearch} from "react-icons/bi";
import {FaSearchLocation} from "react-icons/fa";

const SearchBar = () => {
    return(
        <div className="flex w-3/4 shadow-2xl rounded-2xl bg-white px-6 py-10 space-x-5 items-center">
            <div className="flex w-1/2 items-center space-x-3 bg-[#e1f0f5] p-3 rounded-xl">
                <BiSearch/>
                <input type="text" className="w-3/4 h-full outline-0 bg-transparent" placeholder="Job title, Skills or Keywords"/>
            </div>
            <div className="flex w-1/4 items-center space-x-3 bg-[#e1f0f5] p-3 rounded-xl">
                <FaSearchLocation />
                <input type="text" className="w-3/4 h-full outline-0 bg-transparent" placeholder="City, State or Zip Code"/>
            </div>
            <button className="flex w-36.5 items-center justify-center space-x-3 bg-[#8a191c] text-whiten p-3 rounded-full">Search Jobs</button>
        </div>
    )
}

export default SearchBar;