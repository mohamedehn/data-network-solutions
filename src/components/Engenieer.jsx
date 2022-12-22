import Lottie from "react-lottie";
import animation from "../animations/86098-engineering-manager.json"

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

    return (
        <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-between" id="ingenierie">
            <div className="max-w-xl self-center md:w-96 w-auto hidden md:block">
                <Lottie options={defaultOptions}/>
            </div>
            <div className="max-w-xl">
                <div className="py-4 md:my-28">
                    <h3 className="text-3xl text-[#3150f8] font-semibold md:text-4xl">
                        Ingénierie
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                    Notre équipe d’ingénieurs associent connaissances approfondies de votre secteur, expertise dans votre domaine de compétences et 
                    convictions sur les actions à mener. Ils vous accompagnent dans vos locaux ou bien à distance, de façon pragmatique et innovante 
                    pour dessiner votre avenir, réaliser vos objectifs et réussir la transformation de votre organisation. Passionnés, engagés et 
                    confirmés dans leurs domaines de compétences, ils développent une approche collaborative et novatrice et font de vos priorités 
                    les leurs.
                    </p>
                </div>
            </div>
            <style jsx="true">{`
                .cta-pr-btn:hover svg {
                    transform: translateX(5px)
                }
            `}</style>
        </section>
    )
}