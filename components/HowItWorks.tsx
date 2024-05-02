import { GoChecklist } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { FaPeopleArrows } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center py-30 px-36">
            <h1 className="text-5xl w-full justify-center flex leading-[1.3] font-light mt-5">How It works</h1>
            <div className="grid grid-cols-3 w-full justify-center gap-10 mt-10.5">
                <div className="flex flex-col items-center justify-center">
                    <i className="flex bg-white rounded-lg p-3"><GoChecklist fill="#8a191c" size={40}/></i>
                    <p className="font-bold mt-3">1. Describe your need</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <i className="flex bg-white rounded-lg p-3"><FiUsers fill="#8a191c" size={40}/></i>
                    <p className="font-bold mt-3">2. View matching candidates</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <i className="flex bg-white rounded-lg p-3"><FaPeopleArrows fill="#8a191c" size={40}/></i>
                    <p className="font-bold mt-3">3. Connect with a recruiter to consult and hire</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;