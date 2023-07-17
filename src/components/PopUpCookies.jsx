import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PopUpCookies = () => {

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

  const [visible, setVisible] = useState(false); //le hook useState permet de gérer l'état de visibilité de notre pop-up de cookies.

//e hook useEffect pour vérifier si l'utilisateur a déjà accepté les cookies. 
//Si ce n'est pas le cas, nous rendons la popup visible en définissant l'état à true
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setVisible(true);
    }
  }, []);

//La méthode handleAccept() est appelée lorsqu'un utilisateur clique sur le bouton Accepter. 
//Elle définit une clé dans le localStorage pour enregistrer le choix de l'utilisateur et cache la popup.
  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
    window.location.reload()
  };

//La méthode handleRefuse() est appelée lorsqu'un utilisateur clique sur le bouton Refuser. 
//Elle définit une clé dans le localStorage pour enregistrer le choix de l'utilisateur et cache la popup.
  const handleRefuse = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setVisible(false);
    window.location.reload()
  };

//Dans le rendu du composant, nous vérifions si la popup doit être affichée en fonction de l'état de visibilité. 
//Si oui, nous affichons le message et les boutons Accepter/Refuser.
  return visible ? (
    <div className="fixed bottom-0 right-0 left-0 z-50 p-4 text-white bg-gray-900 rounded-3xl w-[70%] sm:w-[60%] m-auto">
      <p className="text-gray-400 mt-3 text-base sm:mx-auto sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-justify">
        {i18nextCookieValue === 'fr'? "Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site web. En cliquant sur « Accepter », vous acceptez l’utilisation de cookies à usages techniques nécessaires à son bon fonctionnement, ainsi que des cookies, y compris des cookies tiers, à des fins statistiques, de publicité ou de personnalisation pour vous proposer des services et des offres adaptés. Pour plus d'informations, consultez nos"  
        : 
        'We use cookies to ensure the best experience on our website. By clicking "Accept," you consent to the use of necessary technical cookies for its proper functioning, as well as cookies, including third-party cookies, for statistical, advertising, or customization purposes to provide you with tailored services and offers. For more information, please refer to our'} <NavLink to="/mentions" className="no-underline text-gray-200 font-bold">{i18nextCookieValue === 'fr'? 'mentions légales' : 'legal notice'}</NavLink>.
      </p>
      <div className="flex justify-end pt-2">
        <button
          className="px-4 py-2 mr-2 text-sm font-bold text-blue-500 bg-white rounded hover:bg-slate-400"
          onClick={() => {
            handleAccept(); //appel la fonction et ajoute un cookie avec la valeur "cookiesAccepted=true" et une durée de vie de 1 an
            document.cookie = "cookiesAccepted=true; max-age=31536000";
          }}
        >
          {i18nextCookieValue === 'fr' ? 'Accepter' : 'Accept'}
        </button>
        <button
          className="px-4 py-2 text-sm font-bold text-red-500 bg-white rounded hover:bg-slate-400"
          onClick={() => {
            handleRefuse(); //appel la fonction handleRefuse et ajoute un cookie avec la valeur "cookiesAccepted=false" et une durée de vie de 1 an
            document.cookie = "cookiesAccepted=false; max-age=31536000";
          }}
        >
          {i18nextCookieValue === 'fr'? 'Refuser' : 'Decline'}
        </button>
      </div>
    </div>
  ) : null;
};

export default PopUpCookies;