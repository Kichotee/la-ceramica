import image7 from '../assets/image10.webp'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Sale = () => {
    gsap.registerPlugin(ScrollTrigger)
    let saleImg= useRef()
    useEffect(()=>{
        gsap.fromTo(saleImg,{autoAlpha:0, scale:0},{autoAlpha:1, scale:1, scrollTrigger:{
            duration:2,
            trigger:document.getElementsByClassName('sale')
        }})
    })
    return ( <>
    <div className="relative h-max">

        <div className=" sale py-8   px-8 w-full h-[80vh] md:h-[100vh]  gap-4 flex md:flex-row-reverse flex-col items-center">
            <div className="md:w-[45%] w-full">

        <img src={image7} alt="" className='relative z-40' ref={(el)=>{saleImg=el}}/>
            </div>
            <div className="md:w-[40%] w-full z-40 text-right md:text-left">
                
                <h2 className='text-2xl z-40 mb-4'>About the store</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore non aspernatur laudantium suscipit officia aut.
                </p>
            <button className='btn my-4'>Go to sale</button>
            </div>


        </div>
        <div className="w-[70vw] h-[70vw] md:w-[35vw] md:h-[35vw] bg-[#fad2a1] absolute rounded-full z-0 right-0 md:left-[-2.5%] md:top-[15%]
        top-[30%]">  </div>
    </div>

    
    </> );
}
 
export default Sale;