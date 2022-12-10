import Lottie from "react-lottie";
import animation from "../animations/68075-distribution.json"

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

    return (
        <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-between" id="distribution">
            <div className="max-w-xl">
                <div className="py-4 md:my-28">
                    <h3 className="text-3xl text-[#3150f8] font-semibold md:text-4xl">
                        Distribution
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                        Le travail hybride, les nouveaux modèles commerciaux, les différentes expériences utilisateurs et les défis supplémentaires 
                        en matière d’exploitation et de sécurité font que les réseaux hérités ne peuvent pas suivre le rythme du monde d’aujourd’hui.
                        Il est donc impératif pour les organisations de moderniser rapidement leurs infrastructures numériques et digitales.
                        DNS Distribution fournit la technologie dont les entreprises ont besoin pour gérer, sécuriser et exploiter efficacement 
                        leur réseau pour tous les utilisateurs et appareils connectés. Tout en vous apportant performance et sécurité, nous vous 
                        proposons des outils et des technologies adaptées à votre activité !
                    </p>
                </div>
            </div>
            <div className="max-w-xl self-center md:w-96 w-auto hidden md:block">
                <p> <Lottie options={defaultOptions}/></p>
            </div>
            <style jsx>{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
        </section>
    )
}