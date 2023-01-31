import image1 from '../assets/image11.webp'
import image2 from '../assets/image8.webp'
import { FaAddressCard, FaMailBulk, FaPhone } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';


const FormPage = () => {
gsap.registerPlugin(ScrollTrigger)
let section=useRef()
    useEffect(()=>{
    const tl =gsap.timeline()
    tl.fromTo(section,{
        opacity:0,
        y:'40%'
    },{
        opacity:1,
        y:0,
        duration:0.8
    })
    ScrollTrigger.create({
        animation:tl,
        trigger:section
    })
    })
    const data = [
        {icon:FaAddressCard, description:'Address '  ,content:'No. 2 Muda lawal'},
        {icon:FaMailBulk, description:'Email '  ,content:'Timiprecious@gmail.com'},
        {icon:FaPhone, description:'Phone Number' ,content:'+23477766677' }
    ]
    return ( <>
    <section ref={el=>section=el} className=" h-[90vh] w-screen  md:grid grid-cols-3" >
        <div className=" h-full w-full hidden md:block">

            <img src={image2} alt="" className=" h-[90vh] w-full  object-cover" />
        </div>
        <div className=" hidden md:flex bg-primary h-full w-full  items-center ">
            <div className="w-2/3  mx-auto  flex flex-col items-center justify-center gap-4 h-2/3 ">
              {
                data.map(data=>(
                    <div key={data.icon}>
                    
                    
                    <div className=" flex w-full gap-4 mt-2 h-1/3">
                     <data.icon className='text-2xl '/>
                     <div className="font-bold">{data.description}</div>
                    </div>
                    <div className="w-full h-1/2 text-sm font-default">{data.content} </div>
                    </div>

                ))
              }
            </div>
        </div>
        <div className=" form-box h-full w-full px-6 relative ">
            <h2 className='relative z-30 pt-8  w-2/3 mx-auto text-primary'>
                Fill out the form and we wll <br /> contact you!
            </h2>
            <img src={image1} alt="" className=" absolute h-[90vh] w-full top-0 left-0 z-10 opacity-80 filter object-cover" />
            <form action="" className='w-2/3  mx-auto flex flex-col items-center md:justify-start justify-center mt-6 gap-4 md:h-full h-1/2 z-30 opacity-1 relative'>
                <fieldset>
                    <label className='font-default ext-md text-complementary' htmlFor="Name">Name</label>
                    <input type="email" name="" id="" className='h-1/3 w-full bg-complementary/40   inputs border-complementary border'/>
                </fieldset>
                
                <fieldset>
                    <label  className='font-default text-sm text-complementary'htmlFor="phone number">Phone number</label>
                    <input type="telephone" name="" id="" className='h-1/3 w-full bg-complementary/40 inputs border-complementary border'/>
                </fieldset>
                
                <fieldset>
                    <label  className='font-default text-md text-complementary'htmlFor="Email">Message</label>
                    <textarea type="email" name="" id="" className='h-1/3 w-full bg-complementary/40 inputs border-complementary border '/>
                </fieldset>
              

                <button className="btn h-12 text-xs w-2/3 mx-auto border-none bg-primary">Reach out to us!!</button>
                
                
            </form>
        </div>

    </section>
    
    
    </>);
}
 
export default FormPage;