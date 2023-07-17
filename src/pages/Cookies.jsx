import React from 'react';
import HeaderCareer from '../components/HeaderCareer';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';


function Cookies() {

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

  return (
    <div className="Mentions">
            <HeaderCareer/>
            <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-center">
            <div className="max-w-[55rem]">
                <div className="py-2 my-14">
                    <h3 className="text-3xl text-blue-500  font-semibold md:text-4xl" id="presentation">
                        {i18nextCookieValue === 'fr' ? 'POLITIQUE DE GESTION DES COOKIES' : 'COOKIE MANAGEMENT POLICY'}
                    </h3>
                    <div className="text-gray-500 leading-relaxed mt-3 text-justify pt-10">
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'INFORMATIONS À PROPOS DES COOKIES' : 'INFORMATION ABOUT COOKIES'}</p> 
                        <p>
                            {i18nextCookieValue === 'fr' ? "Lors de la consultation de notre site internet, des cookies sont déposés sur le terminal (ordinateur, tablette, smartphone) avec lequel vous naviguez." 
                            : "When you visit our website, cookies are placed on the device (computer, tablet, smartphone) you are using to browse."}
                        </p>
                    </div>
                    <div className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'QU’EST CE QU’UN COOKIE ?' : 'WHAT IS A COOKIE ?'}
                        </p>    
                        <p>
                            {i18nextCookieValue === 'fr'? "Le cookie est un petit fichier texte déposé dans un espace dédié du disque dur de votre terminal qui va stocker des informations relatives à votre navigation. Il est téléchargé par votre navigateur lors de la visite d’un site internet. Lorsque vous revenez sur ce site en utilisant le même appareil, le cookie et les informations qui y sont stockés sont soit envoyés au site internet qui l’a créé (cookie propriétaire) soit envoyés à un autre site internet auquel il appartient (cookie tiers). Certains cookies sont extrêmement utiles car ils peuvent améliorer l’expérience de l’utilisateur. Par exemple, lorsque vous consultez plusieurs fois un site internet avec un même navigateur, les cookies gardent en mémoire, vos préférences, la manière dont vous utilisez un site et adaptent le contenu affiché pour qu’il soit adapté à vos besoins et intérêts personnels. Selon leur fonction et leur finalité, les cookies peuvent être divisés en quatre catégories : les cookies essentiels, les cookies de mesures d’audience et de statistique, les cookies fonctionnels et les cookies publicitaires." 
                            : 
                            "A cookie is a small text file that is stored in a dedicated space on your device's hard drive and contains information about your browsing. It is downloaded by your browser when you visit a website. When you return to the same site using the same device, the cookie and the information stored in it are either sent back to the website that created it (first-party cookie) or sent to another website to which it belongs (third-party cookie). Some cookies are extremely useful as they can enhance the user experience. For example, when you visit a website multiple times using the same browser, cookies remember your preferences, how you use the site, and adapt the displayed content to suit your personal needs and interests. Based on their function and purpose, cookies can be divided into four categories: essential cookies, audience measurement and statistical cookies, functional cookies, and advertising cookies."}
                        </p>
                    </div>
                    <div className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'QUELLE EST LA DUREE DE CONSERVATION D’UN COOKIE ?' : 'HOW LONG IS A COOKIE STORED ?'}
                        </p>    
                        <p>
                            {i18nextCookieValue === 'fr'? 'Les cookies déposés par DNS France, nos sous-traitants et nos partenaires et les données de navigations recueillies sont conservées pour une durée maximale de 13 mois à compter du dépôt sur votre terminal. A l’expiration de ce délai, votre consentement sera à nouveau nécessaire au dépôt du cookie.' : 'The cookies deposited by DNS France, our subcontractors, and our partners, as well as the collected browsing data, are stored for a maximum period of 13 months from the time they are deposited on your device. At the end of this period, your consent will be required again for the deposit of the cookie.'}
                        </p>
                    </div>
                    <div className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'LES CATEGORIES DE COOKIES' : 'COOKIE CAGETORIES'}</p>    
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'LES COOKIES ESSENTIELS :' : 'ESSENTIAL COOKIES :'}</p>
                        <p>
                            {i18nextCookieValue === 'fr' ? 'Les cookies essentiels, également appelés cookies « strictement nécessaires », assurent des fonctions sans lesquelles le site ne peut pas fonctionner correctement. Ils sont stockés sur votre appareil uniquement pendant la durée de la session d’utilisation du navigateur, et votre consentement n’est pas requis pour ce type de cookie.' 
                            : 
                            'Essential cookies, also known as "strictly necessary" cookies, perform functions without which the website cannot function properly. They are stored on your device only for the duration of the browser session, and your consent is not required for this type of cookie.'}
                        </p>
                    </div>
                    <div className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr' ? 'LES COOKIES DE MESURES D’AUDIENCE ET DE STATISTIQUES :' 
                            : 'AUDIENCE AND STATISTICS COOKIES :'}    
                        </p>    
                        <p>
                            {i18nextCookieValue === 'fr'? "Les cookies de mesures d’audience et de statistique permettent de produire des statistiques anonymes quant à la fréquentation du site (ex : nombre de visites, les pages consultées, le temps passé…). Ces cookies permettent d’adapter le site aux demandes des visiteurs et d’améliorer sa performance et ses fonctionnalités." 
                            : "Cookies for audience measurement and statistics allow for the production of anonymous statistics regarding website traffic (e.g., number of visits, pages viewed, time spent, etc.). These cookies enable the website to be tailored to visitor preferences and enhance its performance and functionality."}
                        </p>
                    </div>
                    <div className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'LES COOKIES FONCTIONNELS :' 
                            : 'FUNCTIONAL COOKIES :'}
                        </p>    
                        <p>
                            {i18nextCookieValue === 'fr'? 'Les cookies fonctionnels permettent à un site internet d’enregistrer des informations qui ont déjà été fournies (ex : le nom de l’utilisateur, la localisation) et d’offrir à l’utilisateur des fonctions améliorées et personnalisées.'
                            :"Functional cookies allow a website to store information that has already been provided (e.g., user's name, location) and provide enhanced and personalized functions to the user."}
                        </p>
                    </div>
                    <div className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'LES COOKIES PUBLICITAIRES :' : 'ADVERTISING COOKIES : '}
                        </p>    
                        <p>
                            {i18nextCookieValue === 'fr'? 'Les cookies publicitaires sont utilisés pour diffuser des publicités qui sont pertinentes pour certains utilisateurs spécifiques et adaptées à leurs intérêts.'
                            :'Advertising cookies are used to deliver advertisements that are relevant to specific users and tailored to their interests.'}
                        </p>
                    </div>
                    <div className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'COMMENT GÉRER ET SUPPRIMER LES COOKIES ?' 
                            : 'HOW TO MANAGE AND DELETE COOKIES ?'}
                        </p>    
                        <p>
                            {i18nextCookieValue === 'fr'? 'Lors de votre première visite sur le site, un bandeau vous informe de la présence de ces cookies et vous invite à les accepter ou les refuser. Les cookies, qui nécessitent votre consentement, seront déposés uniquement si vous y consentez.' 
                        : 'During your first visit to the website, a banner informs you about the presence of these cookies and invites you to accept or refuse them. Cookies that require your consent will only be stored if you give your consent.'}
                        </p>
                        <p className='pt-10'>
                            {i18nextCookieValue === 'fr'? 'Par ailleurs, pour gérer les cookies, la plupart des navigateurs vous permettent de refuser ou d’accepter tous les cookies ou de n’en accepter que certains. Vous trouverez la procédure de gestion et de suppression des cookies à la rubrique aide de votre navigateur, ou directement en cliquant sur les liens suivants :' 
                            : 'Furthermore, to manage cookies, most browsers allow you to refuse or accept all cookies, or only accept certain ones. You can find instructions on how to manage and delete cookies in the help section of your browser, or by clicking on the following links directly:'}
                        </p>
                        <p className='pt-5'>
                            {i18nextCookieValue === 'fr'? 'Pour Chrome, cliquer' : 'For Chrome, click'}&nbsp;
                                <a href="http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647">
                                    {i18nextCookieValue === 'fr'? 'ici' : 'here'}
                                </a>
                        </p>
                        <p className='pt-5'>
                            {i18nextCookieValue === 'fr'? 'Pour Safari, cliquer' : 'For Safari, click'}&nbsp;
                                <a href="http://support.apple.com/kb/HT1677?viewlocale=fr_FR">
                                    {i18nextCookieValue === 'fr'? 'ici' : 'here'}
                                </a>
                        </p>
                        <p className='pt-5'>
                            {i18nextCookieValue === 'fr'? 'Pour Firefox, cliquer' : 'For Firefox, click'}&nbsp;
                                <a href="http://support.mozilla.org/fr/kb/activer-desactiver-cookies?redirectlocale=fr&redirectslug=Activer+et+d%C3%A9sactiver+les+cookies">
                                    {i18nextCookieValue === 'fr'? 'ici' : 'here'}
                                </a>
                        </p>
                        <p className='pt-5'>
                            {i18nextCookieValue === 'fr'? 'Pour Opera, cliquer' : 'For Opera, click'}&nbsp;
                                <a href="http://help.opera.com/Windows/10.20/fr/cookies.html">
                                    {i18nextCookieValue === 'fr'? 'ici' : 'here'}
                                </a>
                        </p>
                        <div className= "text-gray-500 leading-relaxed mt-3 text-justify pt-8"> 
                        <p className='pb-10 text-gray-800 font-bold'>
                            {i18nextCookieValue === 'fr'? 'MISES À JOUR DE LA POLITIQUE DE GESTION DES COOKIES :' 
                            : 'COOKIE POLICY UPDATES :'}
                        </p>    
                        <p>
                            {i18nextCookieValue === 'fr'? 'DNS France se réserve le droit de modifier ou de mettre à jour cette politique lorsque cela devient nécessaire (dernière mise à jour le 07/04/2023), afin de s’adapter aux retours clients, aux changements liés à nos produits et services, ou pour être conforme à de nouvelles exigences légales. Nous vous prions de bien vouloir la consulter régulièrement. Lorsque nous mettons à jour cette politique, nous révisons la date de « dernière mise à jour » en haut de ce document.' 
                            : 'DNS France reserves the right to modify or update this policy as necessary (last updated on 07/04/2023) to adapt to customers feedback, changes related to our products and services, or to comply with new legal requirements. We kindly ask you to regularly consult it. When we update this policy, we revise the "last updated" date at the top of this document.'}
                        </p>
                    </div>
                    </div>
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

export default Cookies;