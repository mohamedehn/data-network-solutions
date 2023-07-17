import React from "react";
import { NavLink } from "react-router-dom";

export default function Success() {

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
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            {/* <p className="text-3xl font-semibold text-blue-600">Génial ! </p> */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {i18nextCookieValue === 'fr'? 'Le formulaire a été transmis avec succès !' : 'The form has been successfully submitted!'}
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {i18nextCookieValue === 'fr'? "Pour retourner à la page d'accueil, cliquer sur le bouton ci-dessous." : 
                'To return to the homepage, click the button below.'}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {i18nextCookieValue === 'fr'? 'Accueil' : 'Home'} 
              </NavLink>
            </div>
          </div>
        </main>
      </>
    )
  }
  
