import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Footer = () => {
    return ( <>
        <footer className="md:h-[40vh] h-[60vh] bg-[#fad2a1] pt-8 px-2 flex flex-col gap-y-12 md:grid grid-cols-4 text-center ">
            <p className=" justify-self-center font-bold">La Ceramica</p>
            <div className=" flex flex-col h-1/3 md:h-full w-full px-2 items-center md:items-start justify-evenly  md:px-6 gap-6 text-left">
                <p>Shipping and payment</p>
                <p> Store addresses</p>
                <p> shippping and returns</p>
            </div>
            <div className=" flex flex-col h-1/3 md:h-full w-full px-6 gap-6 text-center md:text-left items-center md:items-start">
                <p>About us</p>
                <p> Vacancies</p>
                
            </div>



        </footer>
    
    </> );
}
 
export default Footer;