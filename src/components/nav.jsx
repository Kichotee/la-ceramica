const Nav = () => {
    return ( <>
    <nav className="px-32 flex justify-between absolute top-0 h-[10vh] border z-20 left-0 w-full items-center">
        <div className="brand  text-2xl">
            La ceramica
        </div>

        <ul className="flex items-center w-[50%] justify-evenly">
            <li>Catalog</li>
            <li>Shipping and Payment</li>
            <li>About us</li>
        </ul>

        <div className="icons w-[15%] ">
            <ul className="flex w-full justify-between">
            <li>cart</li>
            <li>Favorite</li></ul>
        </div>

    </nav>
    
    </> );
}
 
export default Nav;