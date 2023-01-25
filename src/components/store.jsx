import image7 from '../assets/image7.webp'

const Store = () => {
    return ( <>
        <div className=" pt-16 w-full h-[100vh] gap-4 flex ">
            <div className="w-[45%]">

        <img src={image7} alt="" className='relative z-40'/>
            </div>
            <div className="w-[40%] z-40">
                <h2 className='text-2xl z-40'>About the store</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore non aspernatur laudantium suscipit officia aut.
                </p>
            </div>

        </div>
    
    </> );
}
 
export default Store;