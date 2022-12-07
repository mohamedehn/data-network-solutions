import hero from "../assets/hero.png"

export default function Hero (){
    
      return (
          <div className="bg-gray-900">
              <header>
                  <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
                  </nav>
              </header>
              <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                  <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                      <h1 className="text-white font-bold text-4xl xl:text-5xl">
                          Data Network Solutions
                          <br/><span className="text-indigo-400"> IT - TELECOM - ENGINEERING</span>
                      </h1>
                     <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                      L'étape la plus importante pour une entreprise, est de passer à la suivante.
                      </p>
                      <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                          <a href="#contact" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                              Nous contacter
                          </a>
                      </div>
                  </div>
                  <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                      <img src={hero} className="w-full mx-auto sm:w-10/12  lg:w-full" alt=""/>
                  </div>
              </section>
          </div>
      )
  }
  