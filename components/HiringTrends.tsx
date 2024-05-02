import Heading from "@/components/Heading";
import {trends} from "@/data/trends";
import Image from "next/image";

const HiringTrends = () => {
    return(
        <div className="flex flex-col w-full px-36 py-30">
            <Heading headingText={"Hiring trends and insights"} />
            <div className="grid grid-cols-4 gap-5 mt-8">
                {
                    trends.map((item, i) => (
                        <div key={item.id} className="flex flex-col shadow-2xl rounded-xl">
                            <Image src={item.img} alt={item.title} width={350} height={300} className="rounded-xl" />
                            <h3 className="p-3 text-lg font-bold">{item.title}</h3>
                            <p className="p-3">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HiringTrends;