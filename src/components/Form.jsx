export default function Form (){
    return (
        <div>
      <section className="text-gray-700 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl text-[#3150f8] font-semibold md:text-4xl">
              Contactez-nous
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Si vous souhaitez collaborer avec notre entreprise ou simplement obtenir des informations, n'hésitez pas à nous transmettre
              votre demande à l'aide du formulaire ci-dessous
            </p>
          </div>
          <form name="contact" method="post" data-netlify="true" encType="multipart/form-data" action="/pages/success/">
          <input type="hidden" name="form-name" value="contact" />
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Nom
                  </label>
                  <input type="text" id="name" name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Prénom
                  </label>
                  <input type="text" id="name" name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="file" className="leading-7 text-sm text-gray-600 block">
                    Pièce jointe
                  </label>
                  <input type="file" id="piece" name="file" className="bg-gray-100 rounded border w-full border-gray-300 focus:border-indigo-500 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-[#3150f8] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </section>
    </div>
    )
}