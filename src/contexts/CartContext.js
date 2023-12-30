import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    //  Cart State
    const [cart, setCart] = useState([]);

    // Item amount state
    const [itemAmount, setitemAmount] = useState(0);

    // Total price
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
},[cart]);
    //  update amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0);
            setitemAmount(amount)
        }
    }, [cart])

    // function to add to cart
    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1};
        //  function to  check if item is already in cart
        const cartItem = cart.find(item => {
            return item.id === id;
        });
        // If item already exists in cart, increase it's amount by 1 else set it's amount to 1
        if (cartItem) {
            const newCart  = [...cart].map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
 };

    // Function to remove an item from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart);
    }

    // Funtion to clear cart
    const clearCart = () => {
        setCart([]);
    }

    const increaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id);
        addToCart(cartItem, id);
    }

    const decreaseAmouunt = (id) => {
        const cartItem = cart.find(item => {
            return item.id === id
        });
        if (cartItem) {
            const newCart  = cart.map(item => {
                if (item.id === id){
                    return { ...item, amount: cartItem.amount - 1}
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
                removeFromCart(id);
        }
    }

    console.log(cart);
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmouunt, itemAmount, total }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;