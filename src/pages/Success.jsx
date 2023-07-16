import React from "react";
import { NavLink } from "react-router-dom";

export default function Success() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-3xl font-semibold text-blue-600">Génial ! </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Le formulaire a été transmis avec succès</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Pour retourner à la page d'accueil, cliquer sur le bouton ci-dessous.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Accueil
              </NavLink>
            </div>
          </div>
        </main>
      </>
    )
  }
  

// import { NavLink } from "react-router-dom";
// import React from "react";


// export default function Success (){
//     return(
//         <div>
//             <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
//                 <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
//                     <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-[#3150f8]">Génial</p>
//                     <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Le formulaire a été transmis avec succès</p>
//                     <NavLink to="/">
//                         <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Pour retourner à la page d'accueil, cliquer ici</p>
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     )
// }