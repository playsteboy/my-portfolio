import Header from '../../components/Layout/Header'
import TitleContainer from '../../components/UI/TitleContainer'
import { HomeData } from '../../data/HomeData'
import Card from '../../components/UI/Card'
export default function Home() {
  return (
    <section className="flex flex-col gap-10 flex-wrap justify-between items-center w-full h-full">
            <Header title="WELCOME" bgColor={"bg-[#8A2BE2]"}/>
            <div className="flex flex-row flex-wrap justify-between items-center w-full h-full p-10 bg-[#D7E3F5]">
              <div className='flex flex-col gap-10 justify-center items-center w-full h-full'>
                <TitleContainer title={'THIS IS MY WEBSITE AS PORTFOLIO'} bgColor={'bg-[#7185F5]' } width={"w-lg"} height={"h-20"} textColor={"text-[#F0F0F0]"} textSize={"text-2xl"} skew={"skew-x-10"} rounded={"rounded-sm"} fontWeight={"font-semibold"}></TitleContainer>
                <div className='flex flex-row gap-10 justify-center items-center w-full h-full p-10'>
                  {
                    HomeData.map((item , index) => (
                      <Card
                      key={index}
                      title={item.title}
                      description={item.description}
                      width={"w-lg"}
                      height={"h-60"}
                      bgColor={index % 2 === 0 ? "bg-[#F522B9]" : "bg-[#D022F5]"}
                      textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                      textSize={"text-lg"}
                      content={item.content}
                      titleColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                      titleSize={"text-2xl"}
                      titleFont={"font-semibold"}
                      skew={"-skew-2"}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
    </section>
  )
}