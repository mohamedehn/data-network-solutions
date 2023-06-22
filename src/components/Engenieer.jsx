import Lottie from "react-lottie";
import animation from "../animations/86098-engineering-manager.json";
import React from "react";

export default function Engenieer (){
   
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
        <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-between" id="ingenierie">
            <div className="max-w-xl self-center md:w-96 w-auto hidden md:block">
                <Lottie options={defaultOptions}/>
            </div>
            <div className="max-w-xl">
                <div className="py-4 md:my-28">
                    <h3 className="text-3xl text-blue-500  font-semibold md:text-4xl">
                        {i18nextCookieValue === 'fr'? "Ingénierie" : "Engineering"}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                        {i18nextCookieValue === 'fr'? "Notre équipe d’ingénieurs associent connaissances approfondies de votre secteur, expertise dans votre domaine de compétences et convictions sur les actions à mener. Ils vous accompagnent dans vos locaux ou bien à distance, de façon pragmatique et innovante pour dessiner votre avenir, réaliser vos objectifs et réussir la transformation de votre organisation. Passionnés, engagés et confirmés dans leurs domaines de compétences, ils développent une approche collaborative et novatrice et font de vos priorités les leurs." 
                        
                        : "Our team of engineers combines in-depth knowledge of your industry with a solid expertise of your field of competence, and strong confidence in the actions to be carried out. With pragmatism and innovation, they will be with you either on-site or remotely, to shape your future, achieve your goals, and successfully transform your organization. Passionate, committed, and experts in their respective fields, they adopt a collaborative and innovative approach, making your priorities their own."}
                    </p>
                </div>
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