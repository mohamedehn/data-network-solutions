import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';




export default function Header() {
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



  const languages = [
    {
      code : 'fr',
      name : 'français',
      flag : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 216.504 128.088"><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M216.252 127.836V.252h-216v127.584h216z"/><path fillRule="evenodd" clipRule="evenodd" fill="#27569f" d="M71.748 127.836V.252H.252v127.584h71.496z"/><path fillRule="evenodd" clipRule="evenodd" fill="#cc2136" d="M216.252 127.836V.252h-71.496v127.584h71.496z"/><path fill="none" stroke="#000" strokeWidth=".504" strokeMiterlimit="2.613" d="M216.252 127.836V.252h-216v127.584h216z"/></svg>
    },
    {
      code : 'en',
      name : "english",
      flag : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 216.156 107.929"><g fillRule="evenodd" clipRule="evenodd" strokeWidth=".216" strokeMiterlimit="2.613"><path fill="#2c6698" stroke="#000" d="M.396.251h214.92v107.065H.396V.251z"/><path d="M128.268 75.275l65.16 32.4h22.033V97.02l-53.568-25.703-33.625-.145v4.103zM87.444 75.42l-65.16 32.4H.252V97.164L53.82 71.459l33.624-.143v4.104zM128.484 32.795l65.232-32.4h22.031v10.656l-53.641 25.704-33.622.145v-4.105zM87.373 32.795L22.14.396H.108v10.656l53.64 25.704 33.625.144v-4.105z" fill="#fff" stroke="#fff"/><path fill="#fff" stroke="#fff" d="M.468 36.18h214.848v35.064H.468V36.18z"/><path fill="#fff" stroke="#fff" d="M87.516.468h40.681v106.921H87.516V.468z"/><path fill="#b01842" stroke="#b01842" d="M95.004.108h25.705v107.281H95.004V.108zM.252 107.389L71.82 71.604h15.696l-72 36.072s-15.264 0-15.264-.287zM128.771 36.251L200.484.323h15.623l-71.711 35.928s-15.625.289-15.625 0zM.612 8.388l58.104 27.936H73.62L.684 2.339S.612 9.108.612 8.388zM215.172 100.26l-58.607-28.943-15.768-.072 74.375 36.287v-7.272z"/><path d="M128.053 33.156l1.152-.216-1.008 4.319s0-3.96-.144-4.103z" fill="#fff" stroke="#fff"/><path fill="#b01842" stroke="#b01842" d="M.468 44.459h214.848V63.18H.468V44.459z"/></g></svg>
    }
  ]
  
  return (
    <Popover className="relative bg-white z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/">
              {/* <span className="sr-only">Your Company</span> */}
              <img className="h-14 w-auto sm:h-16" src={logo} alt=""/>
            </NavLink>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            
            <NavLink to="/" className="text-base font-medium text-blue-600 hover:text-gray-900">
              {i18nextCookieValue === 'fr'?
              "Accueil" : "Home" }
            </NavLink>

            <Popover as='nav'>
            {languages.map(({ code, flag, name }) => {
              if (code === i18next.language) {
                return null; // Ignorer le rendu du bouton si la langue actuelle correspond à celle du bouton
              }

              return (
                <button key={name} onClick={() => {
                  i18next.changeLanguage(code);
                  window.location.reload();
                }} className='flex'>{flag}</button>
              );
            })}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-12 w-auto" src={logo} alt="Your Company"/>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                  {languages.map(({ code, flag, name }) => {
                    if (code === i18next.language) {
                      return null; // Ignorer le rendu du bouton si la langue actuelle correspond à celle du bouton
                    }

                    return ( 
                      <button key={name} onClick={() => {
                        i18next.changeLanguage(code);
                        window.location.reload();
                      }} className='flex'>{flag}</button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
