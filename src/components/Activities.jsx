//import ScrollToTop from "./ScrollToTop"
import React from "react"


export default function Activities () {

    const faqsList = [
        {
            q: "Pôle IT",
            a: "Face à cette ère du numérique, ou le digital est devenu un outil plus que jamais indispensable qui offre des opportunités de développement mais également des menaces liées à la sécurité des données, il est devenu primordial pour une entreprise de bénéficier de solutions IT performantes afin de rester compétitif sur son marché et de protéger sa structure de manière efficace. Notre but est d’offrir à chaque entreprise, des solutions adaptées permettant d’intégrer des technologies toujours plus intelligentes dans les organisations tout en garantissant une sécurité optimale de ses données, dans le but d’accroitre son CA et de faire face à la concurrence.DATA, Cloud, IA, Hébergement, Cyber Sécurité et Développement web & mobile sont les principaux domaines où nos experts IT vous accompagnent 24/24 et 7/7 sur site ou bien à distance."
        },
        {
            q: "Pôle Telecom",
            a: "De nos jours, les télécoms ont une grande importance et une place essentielle dans le fonctionnement d’une entreprise en ouvrant la voie à de multiples innovations et à de nouveaux modèles économiques. Au cœur de notre métier, notre mission est d’accompagner les opérateurs, les collectivités ainsi que les entreprises partenaires dans la conception, la construction et la maintenance des réseaux fixes & mobiles de demain. De l’ingénierie à la supervision en passant par le déploiement, nos experts FTTx, transmission & mobile, vous accompagnent 24/24 et 7/7 sur site ou bien à distance."
        },
        {
            q: "Pôle Energies",
            a: "Avec l’accélération de la transformation digitale des entreprises ainsi que le déploiement massif des réseaux de nouvelles générations, les énergies sont de plus en plus sollicitées pour assurer des besoins en consommation qui ne cessent de croitre. Entre réduction du bilan énergétique des installations réseaux, et meilleure utilisation des énergies renouvelables, les opérateurs engagent de grands chantiers qui nécessitent une optimisation des ressources énergétiques. Notre mission est donc de vous accompagner sur la question de la transition énergétique et de vous conseiller sur une stratégie d’investissement dans les sources d’énergie et de contrôle des émissions carbone. Nos experts en efficacité énergétique ont conçu et développé des solutions mixtes permettant d’intégrer des énergies renouvelables dans la chaîne de valeur énergétique et d’optimiser celle-ci."
        },    
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8 pb-24" id="activites">
            {/* <ScrollToTop/> */}
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-blue-500  font-semibold">
                    Nos domaines d'activités
                </h1>
            </div>
            <div className="mt-14 gap-16 sm:grid sm:grid-cols-2 lg:grid-cols-3 text-justify">
                {
                    faqsList.map((item, idx) => (
                        <div 
                            className="space-y-3 mt-5"
                            key={idx}
                        >
                            <h4 className="text-xl text-gray-700 font-medium">
                                {item.q}
                            </h4>
                            <p className="text-gray-500">
                                {item.a}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}