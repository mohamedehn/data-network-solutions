import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import posts from "../job.json"
import React from "react"

export default function CareerCard () {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
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
                            <NavLink to ={`/Job/${items.id}`} key={items.id}>
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
                                    <p className="text-gray-400 text-sm mt-1">{items.intro}</p>
                                </div>
                            </NavLink>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
