import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaAlignJustify, FaCartPlus, FaHeart } from 'react-icons/fa'

const Nav = () => {
    let [activeMenu, setActiveMenu] = useState(false);
    let toggle = () => {
        setActiveMenu(!activeMenu	);
	};
      

	
	class AllMenu{
		constructor(menu){
			this.menu = useRef()
		}

	}
	let mobileMenu= new AllMenu('menu')
	let deskMenuItemOne= new AllMenu('menu')
	let deskMenuItemTwo= new AllMenu('menu')

    useEffect(()=>{

		window.onload= gsap.fromTo(mobileMenu.menu,{
               opacity:0,
            },{
                
               opacity:1,
                duration:0.5
            })
			gsap.from(deskMenuItemOne.menu,{
				opacity:0,
				scale:0
			 })
			gsap.from(deskMenuItemTwo.menu,{
				opacity:0,
				scale:0
			 })
			setTimeout(() => {
				gsap.to(deskMenuItemOne.menu,{
					 
					opacity:1,
					scale:1,
					 duration:0.5
				 })
				gsap.to(deskMenuItemTwo.menu,{
					 
					opacity:1,
					scale:1,
					 duration:0.5
				 })
			}, 2000); 
        
        
    })
	
	return (
		<>
			<nav className="px-8 md:px-32 flex justify-between absolute overflow-hidden duration-500 top-0 h-[10vh]  z-20 left-0 w-screen items-center">
				<div className="brand sm:text-lg font-bold md:text-2xl">
					La ceramica
				</div>
				{screen.width > 500 ? (
					<>
						<ul   ref={el=>deskMenuItemOne.menu=el} className=" items-center w-[50%] justify-evenly hidden md:flex">
							<li>Catalog</li>
							<li>Shipping and Payment</li>
							<li>About us</li>
						</ul>

						<div  ref={el=>deskMenuItemTwo.menu=el} className="icons w-[15%]  hidden md:flex">
							<ul className="flex w-full justify-between">
								
                                <FaCartPlus/>
								<FaHeart></FaHeart>
							</ul>
						</div>
					</>
				) : (
					<>
						<div className="text-3xl block md:hidden" onClick={()=>toggle()}>
                            <FaAlignJustify/>
                        </div>
					</>
				)}
				{activeMenu ==true  && (
                    <div className="relative z-50">
					<ul className="mobileMenu fixed right-0 bg-complementary top-0 w-[60vw] z-60 h-screen  flex items-center flex-col py-[25%] justify-around text-primary" ref={(el)=>{mobileMenu.menu=el}}>
                        <FaAlignJustify className=" absolute top-4 text-primary text-3xl right-4" onClick={()=>setActiveMenu(false)}/>

						<li>Catalog</li>
						<li>Shipping and Payment</li>
						<li>About us</li>
						<li>cart</li>
						<li>Favorite</li>
					</ul>

                    </div>
				)}
			</nav>
		</>
	);
};

export default Nav;
