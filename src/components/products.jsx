import image8 from '../assets/image8.webp'
import image9 from '../assets/image9.webp'
import image10 from '../assets/image10.webp'
import image11 from '../assets/image11.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
// import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination'
import {   Navigation, Pagination } from 'swiper';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';



const Products = () => {
    let screenwidth= screen.width
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    const cards= document.querySelectorAll('.slide-image')
    useEffect(()=>{

        cards.forEach(card => {
            tl.fromTo(card,{
                opacity:0.8,
                scale:0,
                x:'500%'
            },{opacity:1, duration:1,x:0, scale:1})
            
        });
        ScrollTrigger.create({
            animation:tl,
            trigger:document.getElementsByClassName('mySwiper'),
            toggleActions:'restart none  none'
        })

            let screenwidth= screen.width

    })

    const data= [
        {image:image8, description:''},
        {image:image9, description:''},
        {image:image10, description:''},
        {image:image11, description:''},
        // {image:image8, description:''},
    ]
    return ( 
    <>
    <header className="flex pt-6 md:pt-24 px-8 md:px-32 justify-between text-xl mb-4">
            <p>Popular categories</p>
            <p>
                see all
            </p>
        </header>
        <div className="px-8 md:px-32">



     <Swiper
                  spaceBetween={30}
                  modules={[Navigation, Pagination]}
                  slidesPerView={screenwidth>375?3:2}
                  touchRatio={1.5}
                 
                  navigation={true}
                  effect={"flip"}
                 
                  className=" h-[80vh] w-full flex mySwiper"
                >

                    {
                        data.map(data=>(
                            <SwiperSlide className="slide-image box-1 h-[50vh] rounded mt-8 " key={data.image}>
                            <img src={data.image} alt="" className='h-[40vh] w-[300px] md:w-[80%] rounded object-cover'/> 
                            <div className="h-[10vh] w-[80%]">
                                <h2>Lorem</h2>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                         </SwiperSlide>


                        ))
                    }
    
                    
                </Swiper>

        </div>

    
    </> );
}
 
export default Products;