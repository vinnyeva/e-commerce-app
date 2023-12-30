import logo from './../images/logo.png';
import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "./../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isActive, setisActive] = useState(false);
    const {isOpen, setIsOpen} = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    // Add event listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setisActive(true) : setisActive(false);
        })
    })

    return (
        <header className={`${isActive ? 'bg-white p-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
            <div className='container mx-auto flex items-center justify-between h-full'>
                <NavLink to='/'>
                    <img src={ logo } alt='Logo' />
                </NavLink>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
                    <BsBag className="text-2xl" />
                    <div className='bg-red-500 absolute flex -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full justify-center items-center'>{itemAmount}</div>
                </div>
            </div>
        </header>
    );
}

export default Header;