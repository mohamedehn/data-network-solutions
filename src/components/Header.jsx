import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ClipboardDocumentListIcon, UserGroupIcon, GlobeAltIcon, Cog6ToothIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const [lang, setLang] = useState('fr');
  const [text, setText] = useState({
    company: 'Votre entreprise',
    about: 'Qui sommes-nous ?',
    activities: 'Activités',
    careers: 'Carrières',
    contact: 'Contact',
    solutions: [
      {
        name: 'Conseil et Audit',
        description: 'Ensemble, nous trouverons les solutions à vos défis.',
        href: '#conseil',
        icon: UserGroupIcon,
      },
      {
        name: 'Ingénierie',
        description: 'Connaissances approfondies de votre secteur, expertise dans votre domaine de compétences et convictions sur les actions à mener.',
        href: '#ingenierie',
        icon: Cog6ToothIcon,
      },
      {
        name: 'Consulting',
        description: 'Nous vous accompagnons de bout en bout dans vos projets.',
        href: '#consulting',
        icon: ClipboardDocumentListIcon,
      },
      {
        name: 'Distribution',
        description: 'DNS Distribution fournit la technologie dont les entreprises ont besoin',
        href: '#distribution',
        icon: GlobeAltIcon,
      },
    ],
  });

  const changeLanguage = () => {
    if (lang === 'fr') {
      setLang('en');
      setText({
        company: 'Your Company',
        about: 'About Us',
        activities: 'Activities',
        careers: 'Careers',
        contact: 'Contact',
        solutions: [
          {
            name: 'Consulting and Audit',
            description: 'Together, we will find solutions to your challenges.',
            href: '#consulting',
            icon: UserGroupIcon,
          },
          {
            name: 'Engineering',
            description: 'In-depth knowledge of your industry, expertise in your field, and strong beliefs in the actions to be taken.',
            href: '#engineering',
            icon: Cog6ToothIcon,
          },
          {
            name: 'Consulting',
            description: 'We accompany you from start to finish in your projects.',
            href: '#consulting',
            icon: ClipboardDocumentListIcon,
          },
          {
            name: 'Distribution',
            description: 'DNS Distribution provides the technology that businesses need',
            href: '#distribution',
            icon: GlobeAltIcon,
          },
        ],
      });
    } else {
      setLang('fr');
      setText({
        company: 'Votre entreprise',
        about: 'Qui sommes-nous ?',
        activities: 'Activités',
        careers: 'Carrières',
        contact: 'Contact',
        solutions: [
          {
            name: 'Conseil et Audit',
            description: 'Ensemble, nous trouverons les solutions à vos défis.',
            href: '#conseil',
            icon: UserGroupIcon,
          },
          {
            name: 'Ingénierie',
            description: 'Connaissances approfondies de votre secteur, expertise dans votre domaine de compétences et convictions sur les actions à mener.',
            href: '#ingenierie',
            icon: Cog6ToothIcon,
          },
          {
            name: 'Consulting',
            description: 'Nous vous accompagnons de bout en bout dans vos projets.',
            href: '#consulting',
            icon: ClipboardDocumentListIcon,
          },
          {
            name: 'Distribution',
            description: 'DNS Distribution fournit la technologie dont les entreprises ont besoin',
            href: '#distribution',
            icon: GlobeAltIcon,
          },
        ],
      });
    }
  };

  const france = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 216.504 128.088"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M216.252 127.836V.252h-216v127.584h216z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#27569f" d="M71.748 127.836V.252H.252v127.584h71.496z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#cc2136" d="M216.252 127.836V.252h-71.496v127.584h71.496z"/><path fill="none" stroke="#000" stroke-width=".504" stroke-miterlimit="2.613" d="M216.252 127.836V.252h-216v127.584h216z"/></svg>
  const uk = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 216.156 107.929"><g fill-rule="evenodd" clip-rule="evenodd" stroke-width=".216" stroke-miterlimit="2.613"><path fill="#2c6698" stroke="#000" d="M.396.251h214.92v107.065H.396V.251z"/><path d="M128.268 75.275l65.16 32.4h22.033V97.02l-53.568-25.703-33.625-.145v4.103zM87.444 75.42l-65.16 32.4H.252V97.164L53.82 71.459l33.624-.143v4.104zM128.484 32.795l65.232-32.4h22.031v10.656l-53.641 25.704-33.622.145v-4.105zM87.373 32.795L22.14.396H.108v10.656l53.64 25.704 33.625.144v-4.105z" fill="#fff" stroke="#fff"/><path fill="#fff" stroke="#fff" d="M.468 36.18h214.848v35.064H.468V36.18z"/><path fill="#fff" stroke="#fff" d="M87.516.468h40.681v106.921H87.516V.468z"/><path fill="#b01842" stroke="#b01842" d="M95.004.108h25.705v107.281H95.004V.108zM.252 107.389L71.82 71.604h15.696l-72 36.072s-15.264 0-15.264-.287zM128.771 36.251L200.484.323h15.623l-71.711 35.928s-15.625.289-15.625 0zM.612 8.388l58.104 27.936H73.62L.684 2.339S.612 9.108.612 8.388zM215.172 100.26l-58.607-28.943-15.768-.072 74.375 36.287v-7.272z"/><path d="M128.053 33.156l1.152-.216-1.008 4.319s0-3.96-.144-4.103z" fill="#fff" stroke="#fff"/><path fill="#b01842" stroke="#b01842" d="M.468 44.459h214.848V63.18H.468V44.459z"/></g></svg>
  
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
          <a href="#presentation" className="text-base font-medium text-blue-600 hover:text-gray-900">{lang === 'fr' ? 'Qui sommes-nous ?' : 'About Us'}</a>
          <a href="#activites" className="text-base font-medium text-blue-600 hover:text-gray-900">{lang === 'fr' ? 'Activités' : 'Activities'}</a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-blue-600' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span className='text-[#3150f8]'>{lang === 'fr' ? 'Métiers' : 'Scopes'}</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-blue-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {text.solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a href="#contact" className="text-base font-medium text-blue-600 hover:text-gray-900">
              Contact
            </a>
            <NavLink to="/carrieres" className="text-base font-medium text-blue-600 hover:text-gray-900">
            {lang === 'fr' ? 'Carrières' : 'Careers'}
            </NavLink>
            <button onClick={changeLanguage} className='flex'>{lang === 'fr'? uk : france}</button>
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
                  <button onClick={changeLanguage} className='flex'>{lang === 'fr'? uk : france}</button>

                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {text.solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
