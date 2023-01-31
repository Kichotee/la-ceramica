import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
import '../App.css'
import { useRef, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import gsap from 'gsap'

const Hero = () => {
    let img1 = useRef()
    let img2 = useRef()
    let img3 = useRef()

     useEffect(()=>{
        let mm= gsap.matchMedia()

        mm.add('(min-width:420px)', ()=>{

            gsap.fromTo(img1,{
                opacity:0,
                y:'-50%',
            },{
                duration:2,
                opacity:1,
                y:0
            })
            gsap.fromTo(img2,{
                y:'50%',
                opacity:0,
            },{
                duration:2,
                y:0,
                opacity:1
            })
            gsap.fromTo(img3,{
                y:'-50%',
                opacity:0,
                
            },{
                y:0,
                duration:2,
                opacity:1
            })
        })
        mm.add('(max-width:400px)',()=>{
            gsap.fromTo(img3,{opacity:0.5, scale:1.5, y:0},{opacity:1, scale:1, duration:4})
        })
    })
    return (  <>
    <div className="grid grid-cols-3  h-[100vh] max-h-screen w-screen overflow-hidden">
        <div className="grid-1 hidden relative w-full h-full md:block " ref={(el)=>{img1=el}}>
            <LazyLoadImage effect='blur' width={screen.width/3} src={image1} alt="" className='w-full h-[100vh] lg:h-[100vh] object-cover '/>
            <div className="box  absolute w-48  h-[20%]  top-[50%] left-[50%] flex   flex-col items-center translate-x-[-50%] ">
                <h2>Sets</h2>
                <button className='btn'>See all</button>
            </div>
        </div>
        <div className="grid-2 hidden  md:block relative w-full h-full" ref={(el)=>{img2=el}}>
            <LazyLoadImage effect='blur' width={screen.width/3} src={image3} alt="" className='w-full   h-[100vh] md:h-[100vh] sm:object-cover'/>
            <div className="box absolute w-48  h-[20%]  top-[50%] left-[50%] flex flex-col items-center  translate-x-[-50%] ">
                <h2>Sets</h2>
                <button className='btn'>See all</button>
            </div>
        </div>
        <div className="grid-3   col-span-3  md:col-span-1 block relative w-full h-full" ref={(el)=>{img3=el}}>
            <LazyLoadImage effect='blur' width={screen.width>500? screen.width/3 :screen.width } src={image2} alt="" className='w-full  h-[100vh] md:h-[100vh] object-cover'/>
            <div className="box absolute w-48  h-[20%]  top-[50%] left-[50%] flex  flex-col items-center  translate-x-[-50%] ">
                <h2>Sets</h2>
                <button className='btn'>See all</button>
            </div>
        </div>
    </div>
        
    
    </>);
}
 
export default Hero;