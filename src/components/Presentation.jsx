import Lottie from "react-lottie";
import animation from "../animations/34533-business-team.json";
import React from "react";
import { useTranslation } from "react-i18next";


export default function Presentation (){
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        // here is where we will declare lottie animation
        animationData: animation,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };

     const { t } = useTranslation();


    return (
        <section className="max-w-screen-xl mx-auto py-4 px-4 sm:px-8 md:flex block justify-between sm:pt-52 pt-[18rem]">
            <div className="max-w-xl">
                <div className="py-4 my-28">
                    <h3 className="text-3xl text-blue-500 font-semibold md:text-4xl" id="presentation">
                        {t("presentation_title")} <span className="text-gray-800"> <br/>{t("presentation_subtitle")}</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                        {t("presentation_text")}
                    </p>
                </div>
            </div>
            <div className="max-w-xl self-center md:w-full w-auto">
                <Lottie options={defaultOptions}/>
            </div>
            <style 
// @ts-ignore
            jsx="true">{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
        </section>
    )
}