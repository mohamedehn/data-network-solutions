import Lottie from "react-lottie";
import animation from "../animations/68075-distribution.json";
import React from "react";

export default function Distribution (){
   
    const defaultOptions = {
        loop: true,
        autoplay: true,
        // here is where we will declare lottie animation
        animationData: animation,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };


     //function pour vérifier la valeur du cookie i18 next
    function getCookieValue(cookieName) {
        const cookies = document.cookie.split(';');
        
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          
          if (cookie.startsWith(cookieName + '=')) {
            return cookie.substring(cookieName.length + 1);
          }
        }
        
        return null;
      };
      
    const i18nextCookieValue = getCookieValue('i18next');

    return (
        <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-between" id="distribution">
            <div className="max-w-xl">
                <div className="py-4 md:my-28">
                    <h3 className="text-3xl text-blue-500  font-semibold md:text-4xl">
                        Distribution
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                        {i18nextCookieValue === 'fr'? "Le travail hybride, les nouveaux modèles commerciaux, les différentes expériences utilisateurs et les défis supplémentaires en matière d’exploitation et de sécurité font que les réseaux hérités ne peuvent pas suivre le rythme du monde d’aujourd’hui. Il est donc impératif pour les organisations de moderniser rapidement leurs infrastructures numériques et digitales. DNS Distribution fournit la technologie dont les entreprises ont besoin pour gérer, sécuriser et exploiter efficacement leur réseau pour tous les utilisateurs et appareils connectés. Tout en vous apportant performance et sécurité, nous vous proposons des outils et des technologies adaptées à votre activité !" 
                        
                        : "Hybrid work, new business models, diverse user experiences, and additional operational and security challenges render legacy networks unable to keep up with today's world. It is therefore imperative for organizations to swiftly modernize their digital and IT infrastructures. DNS Distribution offers the technology that businesses require to effectively manage, secure, and operate their networks for all connected users and devices. While delivering performance and security, we provide you with tools and technologies tailored to your specific needs!"}
                        
                    </p>
                </div>
            </div>
            <div className="max-w-xl self-center md:w-96 w-auto hidden md:block">
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