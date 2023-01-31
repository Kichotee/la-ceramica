import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaAlignJustify, FaCartPlus, FaHeart } from 'react-icons/fa'

const Nav = () => {
    let [activeMenu, setActiveMenu] = useState(false);
    let toggle = () => {
        setActiveMenu(!activeMenu	);
	};
      

	let menu= useRef()
    useEffect(()=>{
         gsap.fromTo(menu,{
               opacity:0,
            },{
                
               opacity:1,
                duration:0.5
            })
        
        
    })
	
	return (
		<>
			<nav className="px-8 md:px-32 flex justify-between absolute overflow-hidden duration-500 top-0 h-[10vh] border z-20 left-0 w-screen items-center">
				<div className="brand sm:text-lg font-bold md:text-2xl">
					La ceramica
				</div>
				{screen.width > 500 ? (
					<>
						<ul className=" items-center w-[50%] justify-evenly hidden md:flex">
							<li>Catalog</li>
							<li>Shipping and Payment</li>
							<li>About us</li>
						</ul>

						<div className="icons w-[15%]  hidden md:flex">
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
					<ul className="mobileMenu fixed right-0 bg-complementary top-0 w-[60vw] z-60 h-screen  flex items-center flex-col py-[25%] justify-around text-primary" ref={(el)=>{menu=el}}>
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
