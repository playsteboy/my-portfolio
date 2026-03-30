import { SkillsData } from "../../data/SkillsData";
import { useState} from "react";
import CircleContainer from "../../components/UI/CircleContainer";
import Header from "../../components/Layout/Header";
import Card from "../../components/UI/Card";
import TitleContainer from "../../components/UI/TitleContainer";
import Button from "../../components/UI/Button";
import ProgressBar from "../../components/UI/ProgressBar";
export default function Skills() {
    const [watching,setWatching] = useState(false);
    const [skillIndex , setSkillIndex] = useState(null);
    return (
        <section className="flex flex-col gap-10 flex-wrap justify-between items-center w-full h-full">
            <Header title={"SKILLS"} bgColor={"bg-[#8A2BE2]"}/>
            <div className="flex flex-row flex-wrap justify-between items-center w-full h-full p-10 bg-[#D7E3F5]">
            {
                watching?(
                        SkillsData.filter(e=>e.id === skillIndex).map((skill , index) => (
                            <div className="flex flex-col gap-10 justify-between items-center w-full h-full">
                                <div className="relative flex flex-row gap-10 justify-center items-center w-full h-full">
                                    <button onClick={()=>setWatching(false)} className="absolute top-0 left-10 cursor-pointer">
                                        <Button bgColor={'bg-[#F55B2F]'} text={'RETURN'} textColor={'text-[#F0F0F0]'} fontWeight={'font-semibold'} width={'w-32'} height={'h-12'} textSize={'text-xl'}/>
                                    </button>
                                    <TitleContainer title={skill.category} bgColor={'bg-[#7185F5]' } width={"w-80"} height={"h-20"} textColor={"text-[#F0F0F0]"} textSize={"text-2xl"} skew={"skew-x-10"} rounded={"rounded-sm"} fontWeight={"font-semibold"}>
                                    </TitleContainer>
                                </div>
                                <div className="flex flex-row gap-28 justify-center items-center w-full h-full p-10">
                                    {skill.skills.map((item , index) => (
                                            <Card
                                            title={item.name}
                                                width={"w-60"}
                                                height={"h-40"}
                                                bgColor={index % 2 === 0 ? "bg-[#F522B9]" : "bg-[#D022F5]"}
                                                textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                                                textSize={"text-lg"}
                                                content={<ProgressBar progress={item.level} progressColor={index % 2 === 0 ? "bg-[#F1F2F6]" : "bg-[#F0F0F0]"} bgColor={"bg-[#1A1A2E]"} width={"w-50"} height={"h-4"} className="transition-all duration-1000 ease-out"></ProgressBar>}
                                                description={`${item.level}%`}
                                                skew={"-skew-3"}
                                                rounded={"rounded-sm"}
                                            />
                                    ))}
                                </div>

                            </div>))
                ):(
                    <div className="flex flex-col justify-center items-center w-full h-full">
                            <TitleContainer title={'CHOOSE A SKILL'} bgColor={'bg-[#7185F5]' } width={"w-80"} height={"h-20"} textColor={"text-[#F0F0F0]"} textSize={"text-2xl"} skew={"skew-x-10"} rounded={"rounded-sm"} fontWeight={"font-semibold"}></TitleContainer>
                                <div className="flex flex-row gap-48 justify-center items-center w-full h-full p-10">
                                      {SkillsData.map((skill , index) => (
                                <button onClick={() => {setWatching(true);setSkillIndex(skill.id)}} key={skill.id}>
                                <CircleContainer 
                                key={skill.id}
                                title={skill.category}
                                width={"w-42"}
                                height={"h-42"}
                                bgColor={index % 2 === 0 ? "bg-[#F522B9]" : "bg-[#D022F5]"}
                                bgColor2={index % 2 === 0 ? "bg-[#9A1679]" : "bg-[#80149C]"} 
                                textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                                textSize={"text-2xl"}
                                width2={"w-40"}
                                height2={"h-40"}
                                />
                            </button>))}
                                </div>
                        </div>
                )
            }
            </div>
        </section>
    )
}