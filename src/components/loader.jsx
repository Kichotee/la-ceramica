import '../app.css'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const Loader = () => {

    let page= useRef('')

    useEffect(( )=>{


        setTimeout(() => {
            gsap.to(page,{
             opacity:0,
             duration:0.8   
            })
    
        },5000)
    })
    return (  
    
        <div ref={el=>page=el}  className="pageloader">

        <div className="spinner"></div>
    </div>

    
    );
}
 
export default Loader;