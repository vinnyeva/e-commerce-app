import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {

    const { addToCart } = useContext(CartContext);
    const { id, image, category, title, price } = product;
    return (
        <div>
            {/* Button */}
            <div className="border border-[#0004E] rounded-lg h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img src={image} className='max-h-[160px] group-hover:scale-110 transition duration-300' alt='product' />
                    </div>
                    <div className="absolute top-6 -right-11 group-hover:right-5 p-1 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button onClick={() => addToCart(product, id)}>
                            <div className="flex justify-center bg-ash-500 items-center text-white w-12 h-12">
                                <BsPlus className="text-3xl" />
                            </div>
                        </button>
                        <NavLink to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
                            <BsEyeFill />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div>
                {/* Category and title */}
                <div className="text-sm capitalize text-gray-500">{category}</div>
                <NavLink to={`/product/${id}`}><h2 className="font-bold mb-2">{title}</h2></NavLink>
                <h2 className="font-medium">{price}</h2>
            </div>
        </div>
    );
}

export default Product;