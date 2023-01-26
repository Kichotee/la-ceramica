const Feedback = () => {
    const data= [1,2,3]
    return ( <section className="h-[90vh] py-8 bg-complementary/60  mb-6 flex flex-col">
        <div className="content text-[] text-center w-3/4 mx-auto">
            <h2 className="text-2xl font-bold">Lorem, ipsum dolor.</h2>
            <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi, magnam, ea reiciendis recusandae maiores voluptatibus numquam molestias sunt neque laborum a reprehenderit beatae inventore.</p>
        </div>
        <div className="box h-3/4  px-6 py-8 flex gap-4 w-full items-center">
            {
                data.map(data=>(
                    <div className="card">
                        <div className="basis-[70%] text-center px-2 pt-5 text-sm chat  z-40 relative">

                            <p className="font-bold text-lg">lorem</p>
                            <p className="leading-[0.85]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, natus.</p>
                        </div>
                        <div className="w-10 h-10  bg-primary rounded-full ">
                        </div>
                    </div>
                ))
            }

        </div>

    </section> );
}
 
export default Feedback;