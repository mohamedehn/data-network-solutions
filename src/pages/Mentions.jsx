import HeaderCareer from "../components/HeaderCareer";
import Footer from "../components/Footer"
import { useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";


function Mentions (){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    return(
        <div className="Mentions">
            <HeaderCareer/>
            <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-center">
            <div className="max-w-[55rem]">
                <div className="py-2 my-14">
                    <h3 className="text-3xl text-blue-500  font-semibold md:text-4xl" id="presentation">
                        Mentions légales
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify pt-10">
                        1 - PROPRIÉTÉ <br/>
                        <span>
                            Le présent site est la propriété de DNS France <br/>
                            Siège social : 333 cours du 3ème millénaire 69791 Saint-Priest - Tél : 04 78 70 08 74 <br/>
                            Email: contact@datanetworksolutions.fr <br/>
                            Entreprise/ Association créée en 2021 – Code 7120B - Convention IDCC 1596 - SIRET : 90317739200029 <br/>
                            {/* Directeur de la publication : nom, fonction et entreprise <br/> */}
                            Toute reproduction même partielle est interdite sans autorisation préalable.
                        </span>
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        2 - PRESTATAIRES <br/>
                        <span>
                            Création / Conception / Développement : <br/>
                            Nom entreprise : Coding Corp <br/>
                            SIRET : 95326342300014<br/> 
                            Email : contact@codingcorp.fr <br/>
                            Web : https://mohamedehn.github.io/portfolio <br/>
                            Hébergement : HOSTINGER
                        </span>
                    </p>
                    <h3 className="text-3xl text-blue-500  font-semibold md:text-4xl pt-10" id="presentation">
                        Politique de confidentialité
                    </h3>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        Les internautes accédant au site www.datanetworksolutions.fr peuvent être amenés à fournir des informations nominatives ou 
                        à caractère personnel dans le cadre des services proposés par DNS France.
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        L’entreprise DNS France est responsable de traitement au sens du Règlement (UE) 2016/679 dit Règlement Général pour 
                        la Protection des Données ou « RGPD », pour la collecte et le traitement des données à caractère personnel effectuées 
                        sur le site accessible à l’adresse URL: <br/> https://datanetworksolutions.fr/
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        L’entreprise DNS France traite les données personnelles collectées via son site pour les finalités suivantes :
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                    -	Afin de permettre au visiteur du site d’obtenir des informations sur les services proposés par l&apos;entreprise DNS 
                            France et les conditions d’éligibilité.<br/>
                        Conformément au RGPD, le visiteur du site dispose sur ses données personnelles des droits suivants :<br/>
                        -	Un droit d’accès<br/>
                        -	Un droit de rectification<br/>
                        -	Un droit d’effacement<br/>
                        -	Le cas échéant, d’un droit à la portabilité de ses données<br/>
                        -	Un droit de demander la limitation du traitement de ses données et/ ou de s’y opposer<br/>
                        -	Le cas échéant, un droit de retirer son consentement<br/>
                        -	Un droit de définir des directives relatives au sort de ses données après sa mort<br/>
                        Le visiteur peut exercer ses droits en envoyant soit :<br/>
                        -	Un courriel au Responsable de Traitement de DNS France <br/>
                        -	Un courrier à l’attention du Responsable de Traitement à l’adresse suivante :<br/>
                        DNS France <br/>
                        333 cours du 3ème millénaire<br/>
                        69791 Saint-Priest<br/>
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        Si le visiteur estime que DNS France n’a pas correctement répondu à ses sollicitations, il dispose d’un 
                        droit d’introduire une réclamation auprès de la CNIL. DNS France limite la collecte des données 
                        personnelles au strict nécessaire au regard des finalités des traitements de données, elles sont destinées à 
                        l’association Prestat’air mais sont susceptibles d’être transférées à des organismes publics afin de mieux répondre 
                        à la demande du visiteur.
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        Les données ne sont en aucun cas communiquées, ni vendues, ni cédées, louées et / ou commercialisées à des tiers au 
                        sens du RGPD.
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        Les données sont stockées exclusivement sur le territoire Français et ne font l’objet d’aucun transfert en dehors de 
                        l’Union Européenne.
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        Les données seront conservées tant que le visiteur souhaite recevoir des informations, et le temps nécessaire à la 
                        gestion de sa demande.
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        DNS France veille à ce que toutes les mesures techniques et organisationnelles afin de protéger les 
                        données personnelles soient mises en œuvre, ces règles de confidentialités et de sécurité sont également imposées à 
                        l’ensemble du personnel de DNS France , ainsi qu’à tous les prestataires et sous-traitants travaillant 
                        pour DNS France.
                    </p>
                </div>
                <div className="rounded-md shadow w-[25%] justify-center flex mx-auto mt-10">
                    <NavLink
                        to="/"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base 
                        font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg no-underline"
                    >
                        Accueil
                    </NavLink> 
                </div>
            </div>
        </section>
            <Footer/>
        </div>
    )
}

export default Mentions;