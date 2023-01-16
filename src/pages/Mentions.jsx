import HeaderCareer from "../components/HeaderCareer";
import Footer from "../components/Footer"


function Mentions (){
    return(
        <div className="Mentions">
            <HeaderCareer/>
            <section className="max-w-screen-xl mx-auto py-2 px-4 sm:px-8 md:flex block justify-center">
            <div className="max-w-xl">
                <div className="py-2 my-14">
                    <h3 className="text-3xl text-[#3150f8] font-semibold md:text-4xl" id="presentation">
                        Mentions légales
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3 text-justify pt-10">
                        1 - PROPRIÉTÉ
                        <p>
                            Le présent site est la propriété de la Société DNS Works <br/>
                            Siège social : 40 Rue de Bruxelles 69100 Villeurbanne <br/>
                            Email: contact@datanetworksolutions.fr <br/>
                            Entreprise créée en 2022 – code 7120B - Convention BTP - <br/>
                            SIRET : 90317739200029 <br/>
                            Toute reproduction même partielle est interdite sans autorisation préalable.
                        </p>
                    </p>
                    <p className= "text-gray-500 leading-relaxed mt-3 text-justify pt-5"> 
                        2 - PRESTATAIRES
                        <p>
                            Création / Conception / Développement : Digital Comet <br/>
                            Hébergement : Hostinger
                        </p>
                    </p>
                </div>
            </div>
        </section>
            <Footer/>
        </div>
    )
}

export default Mentions;