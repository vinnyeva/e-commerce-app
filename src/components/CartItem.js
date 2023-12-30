import { NavLink } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {

    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

    const {image, id, title, amount, price} = item;
    return (
        <div className="flex gap-x-4 border-b lg:px-6 w-full font-light text-gray-400 border-gray-200">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                <NavLink to={`/product/${id}`}>
                    <img src={image} alt='product' className="max-w-[80px]" />
                </NavLink>
                <div className="flex justify-between w-full flex-col">
                    <div className="flex justify-between mb-2">
                        <NavLink to={`/product/${id}`} className='text-sm hover:underline uppercase font-medium'>{title}</NavLink>
                        <button className="text-xl cursor-pointer"  onClick={() => removeFromCart(id)}>
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="flex h-[36px] gap-x-2 rounded-sm items-center">
                        <div className="flex flex-1 h-full max-w-[100px] rounded-sm border-primary font-medium text-sm  items-center justify-between">
                            <div onClick={() => decreaseAmount(id)} className="bg-red flex-1 h-full flex justify-center items-center">
                                <IoMdRemove />
                            </div>
                            <p className="h-full justify-center items-center px-2 flex">{amount}</p>
                            <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center">
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className="flex justify-around items-center flex-1">$ {price}</div>
                        <div className="flex-1 flex items-center font-medium justify-end text-primary">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;