import Header from "../../components/Layout/Header";
import CircleContainer from "../../components/UI/CircleContainer";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import TitleContainer from "../../components/UI/TitleContainer";
import { AboutData } from "../../data/AboutData";
import { useState} from "react";
export default function About(){
    const [watching,setWatching] = useState(false)
    const [aboutTitle , setAboutTitle] = useState("")
    return (
        <section className="flex flex-col gap-10 flex-wrap justify-between items-center w-full h-full">
            <Header title="ABOUT ME" bgColor={"bg-[#8A2BE2]"}/>
            <div className="flex flex-row flex-wrap justify-between items-center w-full h-full p-10 bg-[#D7E3F5]">
               {watching?(
                AboutData.filter(e=>e.title === aboutTitle).map((about , index) => (
                    <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
                        <div className="relative flex flex-row gap-10 justify-center items-center w-full h-full">
                        <button onClick={()=>setWatching(false)} className="absolute top-0 left-10 cursor-pointer">
                        <Button bgColor={'bg-[#F55B2F]'} text={'RETURN'} textColor={'text-[#F0F0F0]'} fontWeight={'font-semibold'} width={'w-32'} height={'h-12'} textSize={'text-xl'}/>
                        </button>
                        <TitleContainer title={aboutTitle} bgColor={'bg-[#7185F5]' } width={"w-80"} height={"h-20"} textColor={"text-[#F0F0F0]"} textSize={"text-2xl"} skew={"skew-x-10"} rounded={"rounded-sm"} fontWeight={"font-semibold"}/>
                        </div>
                        <div className="flex flex-row gap-10 justify-center items-center w-full h-full p-10">

                        {
                            about.content.map((item , idx) => (
                                <Card
                                key={idx}
                                width={"w-sm"}
                                height={"h-40"}
                                bgColor={index % 2 === 0 ? "bg-[#F522B9]" : "bg-[#D022F5]"}
                                textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                                textSize={"text-lg"}
                                content={item}
                                titleColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                                titleSize={"text-2xl"}
                                titleFont={"font-semibold"}
                                gap={"gap-10"}
                                skew={"-skew-3"}
                                rounded={"rounded-sm"}
                                />
                            ))
                        }
                        </div>
                    </div>
                    ))
                ):(
                    <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
                        <TitleContainer title={"CHOOSE SOMETHING TO KNOW"} bgColor={'bg-[#7185F5]' } width={"w-80"} height={"h-20"} textColor={"text-[#F0F0F0]"} textSize={"text-2xl"} skew={"skew-x-10"} rounded={"rounded-sm"} fontWeight={"font-semibold"}/>
                        <div className="flex flex-row gap-48 justify-center items-center w-full h-full p-10">
                        {
                        AboutData.map((about , index) => (
                            <button onClick={() => {setWatching(true);setAboutTitle(about.title)}} key={index} className="cursor-pointer">
                            <CircleContainer
                            key={index}
                            title={about.title}
                            width={"w-52"}
                            height={"h-52"}
                            bgColor={index % 2 === 0 ? "bg-[#F522B9]" : "bg-[#D022F5]"}
                            bgColor2={index % 2 === 0 ? "bg-[#9A1679]" : "bg-[#80149C]"} 
                            textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                            textSize={"text-2xl"}
                            width2={"w-50"}
                            height2={"h-50"}
                            />
                            </button>
                        ))}
                        </div>
                    </div>
                )
               }
            </div>
        </section>
    )
}