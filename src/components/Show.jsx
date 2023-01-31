import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.webp";
import image10 from "../assets/image10.webp";
import image11 from "../assets/image11.webp";



const Show = () => {
   const data=[{image:image8},{image:image9},{image:image10},{image:image11}]
    return (  

        <div className="flex flex-row-reverse px-8 py-16 md:py-12 gap-4 w-fit h-[70vh] overflow-x-scroll  ">
            {
                data.map(data=>(
                    <img src={data.image} className='w-[60vw] object-cover' alt="" key={data.image} />
                ))
            }
        </div>

    );
}
 
export default Show;