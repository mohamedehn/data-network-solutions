import Lottie from "react-lottie";
import animation from "../animations/34533-business-team.json"

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

    return (
        <section className="max-w-screen-xl mx-auto py-4 px-4 sm:px-8 md:flex block justify-between">
            <div className="max-w-xl">
                <div className="py-4 my-28">
                    <h3 className="text-3xl text-indigo-600 font-semibold md:text-4xl">
                        Le Groupe DNS <span className="text-gray-800"> <br/>Votre tremplin vers l’entreprise de demain.</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                        Data Network Solutions est une startup indépendante de conseil et d’ingénierie spécialisée dans la transition digitale & 
                        énergétique, ainsi que dans les réseaux de télécommunications. En tant qu’acteur incontournable des TIC, notre mission 
                        est d’assurer auprès des entreprises une transition vers le monde de demain en proposant des solutions dédiées avec un 
                        accompagnement sur mesure.Performance, ambition & innovation sont nos principales valeurs que nous partageons avec chacun 
                        de nos collaborateurs ainsi que nos clients !Notre métier consiste à mettre à votre disposition notre équipe d’experts ainsi 
                        que nos consultants spécialisés dans différents domaines, intrinsèquement liés, afin de vous accompagner dans vos projets les 
                        plus stratégiques répondant aux défis du numérique, des réseaux futurs ainsi que des énergies renouvelables.
                        Avec plus de 150 clients à travers plus de 4 pays, nous nous sommes positionnés comme véritable partenaire de projets 
                        ambitieux et complexes pour tout types d’entreprises, de la TPME à la multinationale.
                    </p>
                </div>
            </div>
            <div className="max-w-xl self-center">
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