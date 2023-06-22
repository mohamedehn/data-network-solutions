import { ClipboardDocumentListIcon, UserGroupIcon, GlobeAltIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import React from 'react';


const features = [
  {
    name: 'Conseil & Audit',
    description: "Ensemble, nous trouverons les solutions à vos défis.",
    icon: UserGroupIcon,
    href:'#conseil'
  },
  {
    name: 'Ingénierie',
    description: 'Connaissances approfondies de votre secteur, expertise dans votre domaine de compétences et convictions sur les actions à mener.',
    icon: Cog6ToothIcon,
    href:'#ingenierie'
  },
  {
    name: 'Consulting',
    description: "Nous vous accompagnons de bout en bout dans vos projets",
    icon: ClipboardDocumentListIcon,
    href: 'consulting'
  },
  {
    name: 'Distribution',
    description:'DNS Distribution fournit la technologie dont les entreprises ont besoin',
    icon: GlobeAltIcon,
    href : '#distribution'
  },
]

const featuresEn = [
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
]

export default function Works() {

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
    <div className="bg-white pb-8 sm:py-32 lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-semibold leading-8 text-blue-500 ">{i18nextCookieValue === 'fr'? "Nos métiers" : "Our expertise"}</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {i18nextCookieValue === 'fr'? "Au coeur de la convergence numérique" : "At the heart of digital convergence"}
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            { i18nextCookieValue === 'fr'? features.map((feature) => (
              <a href={feature.href} key={feature.name}>
                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-xl font-semibold leading-8 text-gray-900">{feature.name}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </a>
            )) :
              featuresEn.map((feature) => (
              <a href={feature.href} key={feature.name}>
                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-xl font-semibold leading-8 text-gray-900">{feature.name}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </a>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}
