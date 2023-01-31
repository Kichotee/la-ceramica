import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.webp";
import image10 from "../assets/image10.webp";
import image11 from "../assets/image11.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Products = () => {
	gsap.registerPlugin(ScrollTrigger);
	const tl = gsap.timeline();
	useEffect(() => {
        const cards = gsap.utils.toArray(
            ".slide-image"
        );
		
			tl.fromTo(
				cards[0],
				{
					opacity: 0.8,
					
					x: "-100%",
				},
				{
					opacity: 1,
					duration:0.5,
					x: 0,
					scale: 1,
                    zIndex:1,
                    
				}
                )
                .fromTo(
                    cards[1],
                    {
                        opacity: 0.8,
                        
                        x: "100%",
                    },
                    {
                    duration:0.5,
					opacity: 1,
					x: 0,
					scale: 1,
                    zIndex:2
				}
                )
                .fromTo(
                    cards[2],
                    {
                        opacity: 0.8,
                        y: "-100%",
                    },
                    {
                        duration:0.5,
                        opacity: 1,
                        
                        y: 0,
                        scale: 1,
                        zIndex:2,
				}
			);

		;
        ScrollTrigger.create({
            animation: tl,
            trigger:".productSection",
            end:'+=1300',
            start:'top center',
            duration:4,
            scrub:true,
        });
	});

	const data = [
		{ image: image8, description: "" },
		{ image: image9, description: "" },
		{ image: image10, description: "" },
		{ image: image11, description: "" },
		
	];
	return (
		
       

	
			
				<section className="productSection relative overflow-hidden  h-[140vh]    ">
					{data.map((data) => (
						<div
							className="slide-image w-full h-[140vh]  absolute rounded "
							key={data.image}
						>
							<LazyLoadImage 
                            effect="blur"
								src={data.image}
								alt=""
								className="h-full w-full   rounded object-cover"
							/>
							
						</div>
					))}
				</section>
		
       
		
	);
};

export default Products;
