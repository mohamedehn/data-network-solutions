import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderCareer from "../components/HeaderCareer";
import React from "react";

export default function Error () {
    return(
        <div className="h-auto sm:h-screen">
            <HeaderCareer/>
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Oups, il semblerait que la page demandée n'existe pas.
                            </h1>
                            <p className="my-2 text-gray-800">Retournez à la page d'accueil en cliquant sur le lien ci-dessous.</p>
                            <NavLink to="/">
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-blue-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">ACCUEIL</button>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt=""/>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt=""/>
                {/* <iframe src="https://embed.lottiefiles.com/animation/77620"></iframe> */}
            </div>
        </div>
            <Footer/>
        </div>
    )
}