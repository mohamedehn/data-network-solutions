// @ts-nocheck
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

  //on initialise un objet contenant les différentes partis du formulaire afin de les initialiser avec "an empty strings"
  const formInitialDetails = {
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    message : "",
  };

  const i18nextCookieValue = getCookieValue('i18next');

  const [formDetails, setFromDetails] = useState(formInitialDetails); 
  const [buttonText, setButtonText] = useState(i18nextCookieValue === 'fr'? 'Envoyer' : "Submit"); //gestion de l'état du bouton envoyer
  const [status, setStatus] = useState({});
  const navigate = useNavigate(); // pour rediriger sur la page de confirmation

  const onFormUpdate = (category, value) =>{
    setFromDetails({
      ...formDetails,
      [category] : value,
    })
  };

  //function pour envoyer l'email
  const handleSubmit = async (e) =>{
    e.preventDefault(); //pour éviter que la page se rafraichisse
    setButtonText("Envoi en cours")
    let response = await fetch("/api/contact", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json;charset=utf-8"
      },
      body : JSON.stringify(formDetails) //pour transformer l'objet en strings
    });
    let result = await response.json();
    setButtonText("Envoyé");
    setFromDetails(formInitialDetails);
    if (result.code === 200){
      setStatus({success : true, message : "Formulaire envoyé avec succès!"});
      navigate("/success")
    }else {
      setStatus({danger : false, message : "Un problème est survenue..."})
    }
  }

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
        <div>
      <section className="text-gray-700 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl text-blue-500  font-semibold md:text-4xl">
              {i18nextCookieValue === 'fr'? "Contactez-nous" : "Contact us"}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

              {i18nextCookieValue === 'fr' ? 
              "Si vous souhaitez collaborer avec notre entreprise ou simplement obtenir des informations, n'hésitez pas à nous transmettre votre demande à l'aide du formulaire ci-dessous"
              : 
              "Please feel free to submit your request or inquire about collaborating with our company by using the form provided below."}
            </p>
          </div>
          <form onSubmit={handleSubmit} action="../pages/Success/">
          <input type="hidden" name="form-name" value="contact" />
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                     {i18nextCookieValue === 'fr'? 'Nom' : "Last Name"}
                  </label>
                  <input type="text" id="last-name" name="name" 
                    required
                    value={formDetails.lastName}
                    autoComplete="family-name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    {i18nextCookieValue === 'fr'? 'Prénom' : "First Name"}
                  </label>
                  <input type="text" id="name" name="first-name" required
                    value={formDetails.firstName}
                    autoComplete="given-name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
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
                    value={formDetails.email}
                    autoComplete="email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                    {i18nextCookieValue === 'fr'? 'Téléphone' : "Phone"}
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    required
                    value={formDetails.phone}
                    autoComplete="tel"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
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
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              {/* <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="file" className="leading-7 text-sm text-gray-600 block">
                    {i18nextCookieValue === 'fr'? 'Pièce jointe' : "File"}
                  </label>
                  <input type="file" id="piece" name="file" className="bg-gray-100 rounded border w-full border-gray-300 focus:border-blue-500 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                </div>
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
                    {buttonText}
                  </button>
                  {status.message && (
                    <div>
                      <p className={status.success === false ? "danger, text-red-700" : "success, text-green-600"}>
                        {status.message}
                      </p>
                    </div>
                  )}
                  </div> :
                  <div>
                    <button onClick={acceptCookies}>
                      {i18nextCookieValue === 'fr'? 'Merci d&apos;accepter au préalable les cookies en cliquant ici' : 
                        'Please accept cookies by clicking here'}
                    </button>
                  </div>
                }
            </div>
          </div>
          </form>
        </div>
      </section>
    </div>
    )
};
export default Form