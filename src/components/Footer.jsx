import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { FaInstagram, FaMailchimp, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return ( <>
        <footer className="md:h-[30vh] h-[60vh] bg-complementary text-sm text-primary font-sans pt-6 pb-8 px-2 flex flex-col gap-y-12 md:grid grid-cols-4 text-center ">
            <p className=" justify-self-center font-sans font-bold ">La Ceramica</p>
            <div className=" flex flex-col h-1/3 md:h-full w-full px-2 items-center md:items-start justify-evenly md:justify-between  md:px-6 gap-6 text-left">
                <p>Shipping and payment</p>
                <p> Store addresses</p>
                <p> shippping and returns</p>
            </div>
            <div className=" flex flex-col h-1/3 md:h-full w-full px-6 gap-6 text-center md:text-left items-center md:items-start">
                <p>About us</p>
                <p> Vacancies</p>
                
            </div>
            <div className=" flex flex-col h-1/3 md:h-full w-full px-6 gap-6 text-center md:text-left items-center md:items-start">
                <div className="flex h-1/2 flex-row w-full justify-center md:justify-start gap-8">

                    <FaInstagram className='text-xl'/>
                    <FaMailchimp className='text-xl'/>
                    <FaPhoneAlt className='text-xl'/>
                
                </div>
                <div className="h-1/2">
                    <button className="btn h-full">
                        Contact-us
                    </button>
                </div>
            </div>



        </footer>
    
    </> );
}
 
export default Footer;