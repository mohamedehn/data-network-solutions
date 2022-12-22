import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import HeaderCareer from "../components/HeaderCareer"
import CareerCard from "../components/CareerCard"
import Form from "../components/Form"
import { useEffect } from "react";


export default function Career () {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    return(
        <div>
            <HeaderCareer/>
            <CareerCard/>
            <Form/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

