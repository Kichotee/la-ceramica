import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'


const Feedback = () => {
    let cards = useRef()
    let section = useRef()
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    useEffect(()=>{
     
      
      tl.fromTo(section,{
        y:'20%'
    },{duration:1, y:0, })
        tl
        .fromTo(cards,{
            opacity:0.35,
            scale:0,

        },{opacity:1, duration:1, x:0, scale:1})
        
    ;
    ScrollTrigger.create({
        animation:tl,
        trigger:section,
        toggleActions:'restart none none none'
    })
    },[null])
    const data= [{title:'Lovely artistry',content:'Lorem ipsum dolor sit ametwindow.onload consectetur adipisicing elit. Eos quasi, magnam, ea reiciendis recusandae maiores voluptatibus numquam molestias sunt neque '},
    {title:'Quality products!',content:'Lorem ipsum dolor sit ametwindow.onload consectetur adipisicing elit. Eos quasi, magnam, ea reiciendis recusandae maiores voluptatibus numquam molestias sunt neque '},
    {title:'Good Service',content:'Lorem ipsum dolor sit ametwindow.onload consectetur adipisicing elit. Eos quasi, magnam, ea reiciendis recusandae maiores voluptatibus numquam molestias sunt neque '}

]
    return ( <section className="section h-[90vh] py-8 bg-complementary text-primary mt-24   mb-6 flex flex-col" ref={(el)=>{section=el}}>
        <div className="content  text-center w-3/4 mx-auto">
            <h2 className="text-2xl font-bold">What our customers say of us</h2>
            <p className="text-sm ">Lorem ipsum dolor sit ametwindow.onload consectetur adipisicing elit. Eos quasi, magnam, ea reiciendis recusandae maiores voluptatibus numquam molestias sunt neque laborum a reprehenderit beatae inventore.</p>
        </div>
        <div className="box h-3/4  px-6 py-8 flex flex-col md:flex-row  gap-4 w-full  overflow-scroll md:overflow-hidden items-center ">
            {
                data.map(data=>(
                    <div className="card h-[30vh] md:h-max  origin-center " key={data.title} ref={(el)=>{cards=el}}>
                        <div className="basis-[70%] py-2   text-center px-2 pt-5 text-sm chat bg-primary text-complementary  z-40 relative">

                            <p className="font-bold text-lg  ">{data.title}</p>
                            <p className=" font-default">{data.content}</p>
                        </div>
                        <div className="w-10 h-10  border border-primary rounded-full ">
                        </div>
                    </div>
                ))
            }

        </div>

    </section> );
}
 
export default Feedback;