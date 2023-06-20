//import ScrollToTop from "./ScrollToTop"
import React from "react"


export default function Activities () {

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

    const faqsListEn = [
        {
            q: "IT Center",
            a: "In the face of this digital era, where digital technology has become an essential tool that offers development opportunities as well as threats related to data security, it has become crucial for a company to benefit from high-performance IT solutions in order to remain competitive in its market and effectively protect its infrastructure. Our goal is to provide tailored solutions to each company, enabling the integration of increasingly intelligent technologies into organizations while ensuring optimal data security, with the aim of increasing revenue and facing competition. DATA, Cloud, AI, Hosting, Cybersecurity, and Web & Mobile Development are the main areas where our IT experts accompany you 24/7 on-site or remotely",
        },
        {
            q: "Telecom Center",
            a: "Nowadays, telecommunications have great importance and a crucial role in the functioning of a company, opening the way to multiple innovations and new business models. At the core of our business, our mission is to support operators, communities, and partner companies in the design, construction, and maintenance of the networks of the future, both fixed and mobile. From engineering to supervision to deployment, our FTTx, transmission, and mobile experts accompany you 24/7 on-site or remotely."
        },
        {
            q: "Energies Center",
            a: "With the acceleration of digital transformation in companies and the massive deployment of next-generation networks, energy sources are increasingly being relied upon to meet growing consumption needs. Operators are undertaking major projects aimed at reducing the energy footprint of network installations and maximizing the use of renewable energy. Our mission is to support you in the field of energy transition and provide advice on an investment strategy in energy sources and carbon emissions control. Our energy efficiency experts have designed and developed hybrid solutions that integrate renewable energy into the energy value chain and optimize its utilization."
        },    
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8 pb-24" id="activites">
            {/* <ScrollToTop/> */}
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-blue-500  font-semibold">
                    {i18nextCookieValue === 'fr'? "Nos domaines d'activités" : "Our activity fields"}
                </h1>
            </div>
            <div className="mt-14 gap-16 sm:grid sm:grid-cols-2 lg:grid-cols-3 text-justify">
                {
                    i18nextCookieValue === 'fr'? 
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
                    :
                    faqsListEn.map((item, idx) => (
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