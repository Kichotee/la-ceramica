import image7 from '../assets/image7.webp'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Store = () => {
    let heading = document.getElementsByClassName('heading');
    let content= document.getElementsByClassName('store-content')
    let button= document.getElementsByClassName('button')
    let image= document.getElementsByClassName('image')


    gsap.registerPlugin(ScrollTrigger)
    useEffect(( )=>{
        const tl = gsap.timeline()
        tl.fromTo(heading,{
            opacity:0,
            y:'500%'
        },{opacity:1, duration:1,y:0,})
        .fromTo(content,{
            opacity:0,
            y:'500%'
        },{opacity:1, duration:0.5,y:0
        })
        .fromTo(image,{
            opacity:0,
            x:'-100%'
            
        },
        {
            opacity:1,
            x:0,
           
            duration:0.5
        })
        .fromTo(button,{
            opacity:0,
           
        },
        {
            opacity:1,
           
            duration:0.5
        })
       
        ScrollTrigger.create({
            animation:tl,
            trigger:heading,
        })
    })
    return ( <>
        <div className=" pt-16 w-full h-[100vh] gap-4 flex ">
            <div className="w-[45%] sm:h-2/3 h-[45%] md:h-max">

        <img src={image7} alt="" className='relative z-40 h-full sm:object-cover md:object-fill image'/>
        </div>
            <div className="w-[40%]  z-40 h-2/3 overflow-hidden">
                
                <div className=" h-1/5 overflow-hidden">

                <h2 className='text-2xl z-40 mb-2 md:mb-4 heading ' ref={(el)=>{heading=el}}>About the store</h2>
                </div>
                <div className="about-store sm:h-2/5 md:h-[60px]  overflow-hidden">


                <p className='store-content'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore non aspernatur laudantium suscipit officia aut.
                </p>
                </div>
                <div className="h-1/3">

            <button  className='btn button my-4 '>Go to sale</button>
                </div>
            </div>

        </div>
    
    </> );
}
 
export default Store;