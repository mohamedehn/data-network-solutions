export default function CareerCard () {

    const posts = [
        {
            title: "Conducteur de travaux",
            desc: "Le conducteur de travaux est celui qui planifie et contrôle les travaux de construction, ou d'aménagements paysagers. Il encadre une équipe de techniciens et d'ouvriers avec l'aide d'un ou plusieurs chefs de chantier.",
            img: "https://f.hellowork.com/obs-static-images/seo/ObsJob/conducteur-de-travaux.jpg",
            authorName: "",
            date: "19 Décembre 2022",
            href: ""
        },
        {
            title: "Technicien mobile",
            desc: "La fibre optique constitue l'avenir des réseaux haut débit. Le technicien fibre optique est donc actuellement un métier très porteur, en charge de garantir l'équipement de l'intégralité du territoire. La nécessité de maintenance et de mise à jour assure de plus un bon niveau de recrutements pour de nombreuses années à venir. Avis aux candidats passionnés de technologie.",
            img: "http://www.sysoco.fr/wp-content/uploads/JBY-PPI-FH-Lecate-1022x1024.jpg",
            authorName: "DNS",
            date: "Jan 4 2022",
            href: ""
        },
        {
            title: "Technicien Fibre",
            desc: "La fibre optique constitue l'avenir des réseaux haut débit. Le technicien fibre optique est donc actuellement un métier très porteur, en charge de garantir l'équipement de l'intégralité du territoire. La nécessité de maintenance et de mise à jour assure de plus un bon niveau de recrutements pour de nombreuses années à venir. Avis aux candidats passionnés de technologie.            ",
            img: "http://www.sysoco.fr/wp-content/uploads/JBY-PPI-FH-Lecate-1022x1024.jpg",
            authorName: "DNS",
            date: "Jan 4 2022",
            href: ""
        },
        {
            title: "Développeur Fullstack",
            desc: "La fibre optique constitue l'avenir des réseaux haut débit. Le technicien fibre optique est donc actuellement un métier très porteur, en charge de garantir l'équipement de l'intégralité du territoire. La nécessité de maintenance et de mise à jour assure de plus un bon niveau de recrutements pour de nombreuses années à venir. Avis aux candidats passionnés de technologie.",
            img: "http://www.sysoco.fr/wp-content/uploads/JBY-PPI-FH-Lecate-1022x1024.jpg",
            authorName: "DNS",
            date: "Jan 4 2022",
            href: ""
        }
    ]
    
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Offres d'emplois
                </h1>
                <p className="mt-3 text-gray-500">
                    Rejoignez l'aventure DNS
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md object-cover" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    {/* <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div> */}
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
