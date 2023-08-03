import React from "react";

export default function CareerContact() {

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

    return (
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-5xl">
            {i18nextCookieValue === 'fr' ? 'Candidature' : 'Application'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {i18nextCookieValue === 'fr' ? "Pour postuler, il vous suffit de nous transmettre un curriculum vitae ainsi qu'une lettre de motivation à l'adresse ci-dessous" : 
            
            'To apply, simply send us your resume and a cover letter to the address below'} :
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <a href="mailto:contact@datanetworksolutions.fr">contact@datanetworksolutions.fr</a> 
          </p>
        </div>
      </div>
    )
  }
  