import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Form (){

  // les variable ci-dessous permettent de récupérer les cookies et ainsi vérifier si ils sont accepté ou non
  // on interviendra ensuite sur le bouton envoyer afin de le rendre inactif si les cookies ont été rejetées ou en attente de choix
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie.split(';').find(cookie => cookie.trim().startsWith('cookiesAccepted='));
    const isAccepted = cookiesAccepted && cookiesAccepted.split('=')[1] === 'true';
    // @ts-ignore
    setIsCookiesAccepted(isAccepted);
  }, []);

//fonction qui permettra d'afficher un message d'alerte
  function handleClick() {
    if (!isCookiesAccepted) {
      alert("Veuillez accepter les cookies pour continuer.");
    }
  }
  
  // function qui permet de bloquer l'envoi du formulaire, de supprimer les cookies du local storage, de refresh la page + afficher popUpCookies
  const acceptCookies = (event) => {
    event.preventDefault();
    localStorage.removeItem("cookiesAccepted");
    window.location.reload();
  };


    return (
        <div>
      <section className="text-gray-700 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl text-blue-500  font-semibold md:text-4xl">
              Contactez-nous
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Si vous souhaitez collaborer avec notre entreprise ou simplement obtenir des informations, n'hésitez pas à nous transmettre
              votre demande à l'aide du formulaire ci-dessous
            </p>
          </div>
          <form name="contact" method="post" data-netlify="true" encType="multipart/form-data" action="../pages/Success/">
          <input type="hidden" name="form-name" value="contact" />
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Nom
                  </label>
                  <input type="text" id="name" name="name" required
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Prénom
                  </label>
                  <input type="text" id="name" name="name" required
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="tel" className="leading-7 text-sm text-gray-600">
                    Téléphone
                  </label>
                  <input
                    type="number"
                    id="tel"
                    name="tel"
                    required
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="file" className="leading-7 text-sm text-gray-600 block">
                    Pièce jointe
                  </label>
                  <input type="file" id="piece" name="file" className="bg-gray-100 rounded border w-full border-gray-300 focus:border-blue-500 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              {/* <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-[#3150f8] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Envoyer
                </button>
              </div> */}
              {isCookiesAccepted ? 
                  <div className="sm:col-span-2 sm:justify-end block p-2">
                  <button
                    type="submit"
                    onClick={handleClick}
                    disabled={!isCookiesAccepted} // permet de vérifier si l'utilisateur à accepté ou non les cookies
                    className="mt-3 md:mt-0 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 
                    px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 
                    focus:ring-[#9aabb2] focus:ring-offset-2 sm:w-auto"
                  >
                    Envoyer
                  </button> 
                  </div> :
                  <div>
                    <button onClick={acceptCookies}>Merci d&apos;accepter au préalable les cookies en cliquant ici</button>
                  </div>
                }
            </div>
          </div>
          </form>
        </div>
      </section>
    </div>
    )
}