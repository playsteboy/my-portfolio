import Header from "../../components/Layout/Header";
import TitleContainer from '../../components/UI/TitleContainer'
import Card from '../../components/UI/Card'
import { useState} from "react";
import CircleContainer from "../../components/UI/CircleContainer";
import { ProjectsData } from "../../data/ProjectsData";
import Button from "../../components/UI/Button";
export default function Projects() {
    const [watching,setWatching] = useState(false);
    const [projectIndex , setProjectIndex] = useState("");
    return (
          <section className="flex flex-col gap-10 flex-wrap justify-between items-center w-full h-full">
                    <Header title={"PROJECTS"} bgColor={"bg-[#8A2BE2]"}/>
                    <div className="flex flex-row flex-wrap justify-between items-center w-full h-full p-10 bg-[#D7E3F5]">
                    {
                        watching?(
                                ProjectsData.filter(e=>e.title === projectIndex).map((project , index) => (
                                    <div className="flex flex-col gap-10 justify-between items-center w-full h-full">
                                        <div className="relative flex flex-row gap-10 justify-center items-center w-full h-full">
                                            <button onClick={()=>setWatching(false)} className="absolute top-0 left-10 cursor-pointer">
                                                <Button bgColor={'bg-[#F55B2F]'} text={'RETURN'} textColor={'text-[#F0F0F0]'} fontWeight={'font-semibold'} width={'w-32'} height={'h-12'} textSize={'text-xl'}/>
                                            </button>
                                            <TitleContainer title={project.title} bgColor={'bg-[#7185F5]' } width={"w-80"} height={"h-20"} textColor={"text-[#F0F0F0]"} textSize={"text-2xl"} skew={"skew-x-10"} rounded={"rounded-sm"} fontWeight={"font-semibold"}>
                                            </TitleContainer>
                                        </div>
                                        <div className="flex flex-col gap-10 justify-center items-center w-full h-full p-10">
                                            {project.content.map((item , index) => (
                                                    <Card
                                                    title={item.name}
                                                        width={"w-1/2"}
                                                        height={"h-90"}
                                                        bgColor={index % 2 === 0 ? "bg-[#F522B9]" : "bg-[#D022F5]"}
                                                        textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                                                        textSize={"text-lg"}
                                                        content={<img src={item.view} alt={item.name} className="w-full h-full object-fill"/>}
                                                        description={<TitleContainer title={item.description} bgColor={'bg-transparent' } width={"w-full"} height={"h-full"} textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"} textSize={"text-lg"}  fontWeight={"font-normal"}></TitleContainer>}
                                                        skew={"-skew-3"}
                                                        rounded={"rounded-sm"}
                                                        titleSize={"text-2xl"}
                                                        titleFont={"font-semibold"}
                                                        contentHeight={"h-40"}
                                                        contentWidth={"w-full"}
                                                    />
                                            ))}
                                        </div>
        
                                    </div>))
                        ):(
                            <div className="flex flex-col justify-center items-center w-full h-full">
                                    <TitleContainer title={'CHOOSE A SKILL'} bgColor={'bg-[#7185F5]' } width={"w-80"} height={"h-20"} textColor={"text-[#F0F0F0]"} textSize={"text-2xl"} skew={"skew-x-10"} rounded={"rounded-sm"} fontWeight={"font-semibold"}></TitleContainer>
                                        <div className="flex flex-row gap-48 justify-center items-center w-full h-full p-10">
                                              {ProjectsData.map((item , index) => (
                                        <button onClick={() => {setWatching(true);setProjectIndex(item.title)}} key={item.title}>
                                        <CircleContainer 
                                        title={item.title}
                                        width={"w-48"}
                                        height={"h-48"}
                                        bgColor={index % 2 === 0 ? "bg-[#F522B9]" : "bg-[#D022F5]"}
                                        bgColor2={index % 2 === 0 ? "bg-[#9A1679]" : "bg-[#80149C]"} 
                                        textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                                        textSize={"text-2xl"}
                                        width2={"w-46"}
                                        height2={"h-46"}
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