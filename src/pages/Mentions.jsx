import HeaderCareer from "../components/HeaderCareer";
import Footer from "../components/Footer"
import { useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";


function Mentions (){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);

    const i18nextCookieValue = getCookieValue('i18next');

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
    
    return(
        <div className="Mentions">
            <HeaderCareer/>
            <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-center">
            <div className="max-w-[55rem]">
                <div className="py-2 my-14">
                    <h3 className="text-3xl text-blue-500  font-semibold md:text-4xl" id="presentation">
                        {i18nextCookieValue === 'fr'? 'Mentions légales' : 'Legal Notice'}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify pt-10">
                        1 - {i18nextCookieValue === 'fr'? 'PROPRIÉTÉ' : 'PROPERTY'} <br/>
                        <span>
                            {i18nextCookieValue === 'fr'? 'Le présent site est la propriété de ' : 'The present website is owned by'} DNS France <br/>
                            {i18nextCookieValue === 'fr'? 'Siège social' : 'Head office'} : 333 cours du 3ème millénaire 69791 Saint-Priest - {i18nextCookieValue === 'fr'? 'Tél' : 'Phone'} : 04 78 70 08 74 <br/>
                            Email: contact@datanetworksolutions.fr <br/>
                            {i18nextCookieValue === 'fr'? 'Entreprise créée en 2021' : 'Company established in 2021'} – Code 7120B - Convention IDCC 1596 - SIRET : 903 177 392 00029 <br/>
                            {/* Directeur de la publication : nom, fonction et entreprise <br/> */}
                            {i18nextCookieValue === 'fr' ? 'Toute reproduction même partielle est interdite sans autorisation préalable.' : 
                            'Any reproduction, even partial, is prohibited without prior authorization.'}
                        </span>
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        2 - {i18nextCookieValue === 'fr'? 'PRESTATAIRES' : 'SERVICE PROVIDERS'}<br/>
                        <span>
                            {i18nextCookieValue === 'fr' ? 'Création / Conception / Développement' : 'Creation / Design / Development'} : <br/>
                            {i18nextCookieValue === 'fr' ? 'Nom entreprise' : 'Company Name'}: Coding Corp <br/>
                            SIRET : 953 263 423 00014<br/> 
                            Email : contact@codingcorp.fr <br/>
                            Web : http://codingcorp.fr/<br/>
                            Hébergement : HOSTINGER
                        </span>
                    </p>
                    <h3 className="text-3xl text-blue-500  font-semibold md:text-4xl pt-10" id="presentation">
                        {i18nextCookieValue === 'fr'? 'Politique de confidentialité' : 'Privacy Policy'}
                    </h3>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8">
                        {i18nextCookieValue === 'fr'? 'Les internautes accédant au site www.datanetworksolutions.fr peuvent être amenés à fournir des informations nominatives ou à caractère personnel dans le cadre des services proposés par DNS France.' : 'Internet users accessing the website www.datanetworksolutions.fr may be required to provide personal or personally identifiable information as part of the services offered by DNS France.'} 
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8">
                        {i18nextCookieValue === "fr"? 'L’entreprise DNS France est responsable de traitement au sens du Règlement (UE) 2016/679 dit Règlement Général pour la Protection des Données ou « RGPD », pour la collecte et le traitement des données à caractère personnel effectuées sur le site accessible à l’adresse URL:' : 'DNS France is the data controller within the meaning of Regulation (EU) 2016/679, known as the General Data Protection Regulation or "GDPR," for the collection and processing of personal data carried out on the website accessible at the URL:'}<br/> https://datanetworksolutions.fr/
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        {i18nextCookieValue === 'fr'? 'L’entreprise DNS France traite les données personnelles collectées via son site pour les finalités suivantes :' : 'DNS France processes the personal data collected through its website for the following purposes:'}
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                    -	{i18nextCookieValue === 'fr'? 'Afin de permettre au visiteur du site d’obtenir des informations sur les services proposés par l&apos;entreprise DNS France et les conditions d’éligibilité.' : 'In order to provide visitors of the website with information about the services offered by DNS France and the eligibility conditions.'}<br/>
                        {i18nextCookieValue === 'fr'? 'Conformément au RGPD, le visiteur du site dispose sur ses données personnelles des droits suivants :' : 'In accordance with the GDPR, visitors of the website have the following rights regarding their personal data:'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Un droit d’accès' : 'Right of access'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Un droit de rectification' : 'Right of rectification'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Un droit d’effacement' : 'Right to erasure'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Le cas échéant, d’un droit à la portabilité de ses données' : 'Where applicable, right to data portability'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Un droit de demander la limitation du traitement de ses données et/ ou de s’y opposer' : 'Right to request restriction of processing and/or object to processing'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Le cas échéant, un droit de retirer son consentement' : 'Where applicable, right to withdraw consent'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Un droit de définir des directives relatives au sort de ses données après sa mort' : 'Right to define directives concerning the fate of personal data after death'}<br/>
                        {i18nextCookieValue === 'fr'? 'Le visiteur peut exercer ses droits en envoyant soit :' : 'Visitors can exercise their rights by sending:'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Un courriel au Responsable de Traitement de DNS France' : 'An email to the Data Controller of DNS France'}<br/>
                        -	{i18nextCookieValue === 'fr'? 'Un courrier à l’attention du Responsable de Traitement à l’adresse suivante :' : 'A letter addressed to the Data Controller at the following address :'}<br/>
                        DNS France <br/>
                        333 cours du 3ème millénaire<br/>
                        69791 Saint-Priest<br/>
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8">
                        {i18nextCookieValue === 'fr'? "Si le visiteur estime que DNS France n’a pas correctement répondu à ses sollicitations, il dispose d’un droit d’introduire une réclamation auprès de la CNIL. DNS France limite la collecte des données personnelles au strict nécessaire au regard des finalités des traitements de données, elles sont destinées à l'entreprise DNS France mais sont susceptibles d’être transférées à des organismes publics afin de mieux répondre à la demande du visiteur." : "If the visitor believes that DNS France has not properly addressed their requests, they have the right to lodge a complaint with the CNIL (Commission Nationale de l'Informatique et des Libertés). DNS France limits the collection of personal data to what is strictly necessary for the purposes of data processing. The data is intended for DNS France but may be transferred to public organizations in order to better respond to the visitor's request."}
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8">
                        {i18nextCookieValue === 'fr' ? 'Les données ne sont en aucun cas communiquées, ni vendues, ni cédées, louées et / ou commercialisées à des tiers au sens du RGPD.' : 'The data is not disclosed, sold, transferred, rented, and/or marketed to third parties, as defined by the GDPR.'}
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8">
                        {i18nextCookieValue === 'fr' ? 'Les données sont stockées exclusivement sur le territoire Français et ne font l’objet d’aucun transfert en dehors de l’Union Européenne.' : 'The data is stored exclusively within the French territory and is not transferred outside of the European Union.'}
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8">
                        {i18nextCookieValue === 'fr' ? 'Les données seront conservées tant que le visiteur souhaite recevoir des informations, et le temps nécessaire à la gestion de sa demande.' : 'The data is stored exclusively within the French territory and is not transferred outside of the European Union.'} 
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8">
                        {i18nextCookieValue === 'fr'? 'DNS France veille à ce que toutes les mesures techniques et organisationnelles afin de protéger les données personnelles soient mises en œuvre, ces règles de confidentialités et de sécurité sont également imposées à l’ensemble du personnel de DNS France , ainsi qu’à tous les prestataires et sous-traitants travaillant pour DNS France.' : 'DNS France ensures that all necessary technical and organizational measures are implemented to protect personal data. These privacy and security rules are also imposed on all DNS France staff, as well as on any service providers and subcontractors working for DNS France.'} 
                    </p>
                </div>
                <div className="rounded-md shadow w-[25%] justify-center flex mx-auto mt-10">
                    <NavLink
                        to="/"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base 
                        font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg no-underline"
                    >
                        {i18nextCookieValue === 'fr' ? 'Accueil' : 'Home'}
                    </NavLink> 
                </div>
            </div>
        </section>
            <Footer/>
        </div>
    )
}

export default Mentions;