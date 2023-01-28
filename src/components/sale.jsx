import image7 from '../assets/image10.webp'

const Sale = () => {
    return ( <>
    <div className="relative h-max">

        <div className=" py-8 w-full h-[100vh] gap-4 flex flex-row-reverse items-center">
            <div className="w-[45%]">

        <img src={image7} alt="" className='relative z-40'/>
            </div>
            <div className="w-[40%] z-40">
                
                <h2 className='text-2xl z-40 mb-4'>About the store</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore non aspernatur laudantium suscipit officia aut.
                </p>
            <button className='btn my-4'>Go to sale</button>
            </div>


        </div>
        <div className="w-[35vw] h-[35vw] bg-[#fad2a1] absolute rounded-full z-0 left-[-2.5%] top-[15%]">  </div>
    </div>

    
    </> );
}
 
export default Sale;