import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Footer = () => {
    return ( <>
        <footer className="h-[40vh] bg-[#fad2a1] pt-8 px-2 grid grid-cols-4 ">
            <p className=" justify-self-center ">La Ceramica</p>
            <div className="box-1 flex flex-col h-full w-full px-6 gap-6 text-left">
                <p>Shipping and payment</p>
                <p> Store addresses</p>
                <p> shippping and returns</p>
            </div>
            <div className="box-1 flex flex-col h-full w-full px-6 gap-6 text-left">
                <p>About us</p>
                <p> Vacancies</p>
                
            </div>



        </footer>
    
    </> );
}
 
export default Footer;