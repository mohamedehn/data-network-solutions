import React from "react";
import job from "../job.json";
import { useParams } from "react-router-dom";
import HeaderCareer from "../components/HeaderCareer";
import Footer from "../components/Footer";
import Error from "./Error";

export default function Job () {

    const params = useParams();

    const product = job.find((offer) => params.id === offer.id) 

    if (product === undefined){
        return <Error/>
    }
 
    //const { pictures } = product
    
        return(
            <div className="jobDetail">
                <HeaderCareer/>
                {
                    job.filter((offer) => offer.id === params.id).map((data, index)=>(
                        <div className="" key={data.id - index}>
                            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">{data.title}</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500"></dt> 
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Intitulé du poste</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.title}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Date de publication</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.date}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Rémunération</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">A déterminer selon le profil</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Description</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.desc}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Vous êtes :</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        {/* <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">
                                                <span className="ml-2 w-0 flex-1 truncate"></span>
                                            </div>
                                            </li>
                                        </ul> */}
                                        </dd>
                                    </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <Footer/>
            </div>
        )
};    
