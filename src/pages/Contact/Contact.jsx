import Header from "../../components/Layout/Header";
import TitleContainer from "../../components/UI/TitleContainer";
import { ContactData } from "../../data/ContactData";
import Card from "../../components/UI/Card";
export default function Contact() {
    return (
        <section className="flex flex-col gap-10 flex-wrap justify-between items-center w-full h-full">
            <Header title={"CONTACT"} bgColor={"bg-[#8A2BE2]"}/>
            <div className="flex flex-col flex-wrap justify-center items-center w-full h-full p-10 bg-[#D7E3F5]">
                <TitleContainer title={"CHOOSE A WAY TO CONTACT ME"} bgColor={'bg-[#7185F5]' } width={"w-80"} height={"h-20"} textColor={"text-[#F0F0F0]"} textSize={"text-2xl"} skew={"skew-x-10"} rounded={"rounded-sm"} fontWeight={"font-semibold"}/>
                <div className="flex flex-row gap-28 justify-center items-center w-full h-full p-10">
                    {
                        ContactData.map((contact , index) => (
                            <Card
                            key={index}
                            title={contact.method}
                            description={contact.detail}
                            width={"w-80"}
                            height={"h-40"}
                            bgColor={index % 2 === 0 ? "bg-[#F522B9]" : "bg-[#D022F5]"}
                            textColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                            textSize={"text-lg"}
                            content={contact.info}
                            titleColor={index % 2 === 0 ? "text-[#F1F2F6]" : "text-[#F0F0F0]"}
                            titleSize={"text-2xl"}
                            titleFont={"font-semibold"}
                            skew={"-skew-2"}
                            rounded={"rounded-md"}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}