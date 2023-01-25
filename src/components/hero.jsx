import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
import '../App.css'

const Hero = () => {
    return (  <>
    <div className="grid grid-cols-3 h-[100vh] max-h-screen   w-full overflow-hidden">
        <div className="grid-1 relative w-full ">
            <img src={image1} alt="" className='w-full  '/>
            <div className="box absolute w-48  h-[20%]  top-[50%] left-[50%] flex   flex-col items-center translate-x-[-50%] ">
                <h2>Sets</h2>
                <button className='btn'>See all</button>
            </div>
        </div>
        <div className="grid-2 relative w-full h-full">
            <img src={image3} alt="" className='w-full '/>
            <div className="box absolute w-48  h-[20%]  top-[50%] left-[50%] flex flex-col items-center  translate-x-[-50%] ">
                <h2>Sets</h2>
                <button className='btn'>See all</button>
            </div>
        </div>
        <div className="grid-3 relative w-full h-full">
            <img src={image2} alt="" className='w-full '/>
            <div className="box absolute w-48  h-[20%]  top-[50%] left-[50%] flex  flex-col items-center  translate-x-[-50%] ">
                <h2>Sets</h2>
                <button className='btn'>See all</button>
            </div>
        </div>
    </div>
        
    
    </>);
}
 
export default Hero;