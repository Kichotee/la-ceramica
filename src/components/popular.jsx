import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'

import image6 from '../assets/image6.webp'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const data= [
    {image:image4, description:'home-decor'},
    {image:image5, description:'Chinaware'},
    {image:image6, description:'utensils'}
]


const Popular = () => {
    let images= useRef()
    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{

        const box= document.querySelectorAll('.box-1')
        box.forEach(image => {
            gsap.fromTo(image,{
                opacity:0.8,
                x:'240vw'
            },{opacity:1, duration:0.5,x:'-100%', scrollTrigger:{
                trigger:box,
            scrub:true,

            toggleActions:'play none restart none'
            }})
            
        });
       
    })
    return ( < >
    <section id='section' className="overflow-hidden px-8 md:px-32 pt-16 w-full h-[100vh] flex flex-col items-center z-50 overflow-x-hidden ">
        <header className="flex w-full justify-between md:text-xl mb-4">
            <p>Popular categories</p>
            <p>
                see all
            </p>
            
        </header>
        <div className="showcase flex md:grid h-[50vh] w-[240vw] grid-cols-3 gap-4 cursor-pointer text-primary">
               {data.map(data=>
                (
            <div  ref={(el)=>{images=el}} key={data.image}  className="box-1 h-[70vh] bg-black rounded relative z-10 md:z-40 w-[80vw] overflow-hidden">
                 <img src={data.image} className='h-full w-full md:w-full rounded opacity-70 object-cover hover:scale-[90%] origin-top-left duration-500' alt="" />
                <h2 className='absolute z-50 top-[50%]  text-center w-full h-8 text-slate-100 capitalize'>{data.description}</h2>
            </div>
                
               ))}
        </div>
        <div className="w-[200vw] h-[200vw] md:w-[65vw] md:h-[65vw]  bg-[#fad2a1] absolute rounded-full z-0 right-[-7.5%] top-[25%]">  </div>

    </section>
    </> );
}
 
export default Popular;