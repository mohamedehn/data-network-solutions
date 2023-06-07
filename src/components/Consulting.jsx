import Lottie from "react-lottie";
import animation from "../animations/119522-consulting.json";
import React from "react";

export default function Consulting (){
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        // here is where we will declare lottie animation
        animationData: animation,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };

    return (
        <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-between" id="consulting">
            <div className="max-w-xl">
                <div className="py-4 md:my-28">
                    <h3 className="text-3xl text-blue-500  font-semibold md:text-4xl">
                        Consulting
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                    Nos équipes de consultants mettent leur expertise du monde des réseaux et des énergies au service de la conception et du suivi 
                    de projets d’ingénierie pour vous offrir le meilleur de la connectivité. Nous vous accompagnons de bout en bout dans vos projets. 
                    Nous vous conseillons sur les solutions technologiques adéquates, anticipons avec vous les sujets d’avenir et vous soutenons dans 
                    vos projets de gestion de parcs et d’infrastructures dans le but de développer vos activités et réaliser vos projets de 
                    déploiement. Notre savoir-faire technique associé à notre connaissance des marchés et des opérateurs nous permet de vous proposer
                    des solutions durables et adaptées. Notre savoir-faire relationnel nous garantit de tisser des liens de confiance avec notre 
                    communauté de clients et de partenaires. Nos équipes transforment ces multiples compétences en valeur ajoutée pour chacun 
                    d’entre vous.
                    </p>
                </div>
            </div>
            <div className="max-w-xl self-center md:w-full w-auto hidden md:block">
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