import image4 from '../assets/image3.webp'
import image5 from '../assets/image5.webp'
import image6 from '../assets/image6.webp'
import image7 from '../assets/image7.webp'
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



const Products = () => {
    const data= [
        {image:image8, description:''},
        {image:image9, description:''},
        {image:image10, description:''},
        {image:image11, description:''},
        {image:image8, description:''},
    ]
    return ( 
    <>
    <header className="flex pt-24 px-32 justify-between text-xl mb-4">
            <p>Popular categories</p>
            <p>
                see all
            </p>
        </header>
        <div className="px-32">



     <Swiper
                  spaceBetween={0}
                  modules={[Navigation, Pagination]}
                  slidesPerView={4}
                  touchRatio={1.5}
                 
                  navigation={true}
                  effect={"flip"}
                 
                  className=" h-[80vh] w-full flex mySwiper"
                >

                    {
                        data.map(data=>(
                            <SwiperSlide className="slide-image box-1 h-[50vh] rounded mt-8 " key={data.description}>
                            <img src={data.image} alt="" className='h-[40vh] w-[80%] rounded object-cover'/> 
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