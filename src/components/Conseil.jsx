import Lottie from "react-lottie";
import animation from "../animations/35684-business-team-discusses-project.json"

export default function Conseil (){
   
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
        <section className="max-w-screen-xl mx-auto py-8 px-4 sm:px-8 md:flex block justify-between" id="conseil">
            <div className="max-w-xl">
                <div className="py-4 md:my-28">
                    <h3 className="text-3xl text-[#3150f8] font-semibold md:text-4xl">
                        Conseil & Audit
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                    Une équipe d’experts en conseil & audit est à votre écoute afin d’auditer vos organisations et vos besoins, étudier vos marchés, 
                    évaluer les opportunités & menaces, élaborer une stratégie correspondant à votre vision en pilotant la mise en œuvre des 
                    solutions, et enfin analyser les résultats en vous remettant un rapport détaillé et ciblé.En intervenant dans nos différents 
                    domaines de compétences, nos experts sauront vous orienter vers les meilleures solutions et assureront l’atteinte de vos 
                    objectifs dans une démarche de confiance et d’excellence. Ensemble, nous trouverons les solutions à vos défis les plus relevés !
                    </p>
                </div>
            </div>
            <div className="max-w-xl self-center hidden md:block md: w-full">
                <Lottie options={defaultOptions}/>
            </div>
            <style jsx="true">{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
        </section>
    )
}