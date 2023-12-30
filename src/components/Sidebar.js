import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
// import CartItem from './CartItem';
import { FiTrash2 } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi"
import React from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from './CartItem';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total, itemAmount } = useContext(CartContext);

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex items-center justify-between py-6 border-b">
                <h2 className="text-sm font-semibold uppercase">Shopping Bag({itemAmount})</h2>
                <div onClick={handleClose} className="flex items-center cursor-pointer justify-center w-8 h-8">
                    <FiArrowRight className='text-2xl'/>
                </div>
            </div>
            <div  className="h-[380px] flex flex-col gap-y-2 lg:h-[380px] overflow-y-auto overflow-x-hidden border-b border-b-primary">
                {cart.map(item => {
                return <CartItem item={item} />
            })}
            </div>
            <div className="flex justify-between mt-2 p-3 rounded-md mb-2 bg-slate-200 items-center">
                <div>
                    <p><span>Total</span>$ {parseFloat(total).toFixed(2)}</p>
                </div>
                <button onClick={clearCart} className='bg-red-300 rounded-md p-3'>
                    <FiTrash2 />
                </button>
            </div>
            <NavLink to='/' className='bg-gray-200 justify-center mb-2 p-3 flex items-center text-primary w-full font-medium'>View Cart</NavLink>
            <NavLink to='/' className='bg-primary justify-center p-3 flex items-center text-white w-full font-medium'>Checkout</NavLink>
        </div>
    );
}

export default Sidebar;