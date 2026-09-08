import { createContext, useContext, useState } from "react";
import "./cart.css";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product) => {
        setCart((currentCart) => {
            const existingItem = currentCart.find((item) => item.id === product.id);

            if (existingItem) {
                return currentCart.map((item) => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item);
            }

            return [...currentCart, { ...product, quantity: 1 }];
        });
    };

    const removeItem = (productId) => {
        setCart((currentCart) => currentCart
            .map((item) => item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item)
            .filter((item) => item.quantity > 0));
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);



const Cart = () => {
    const { cart, addItem, removeItem } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="CartWrapper">
            <button
                className="CartButton"
                type="button"
                aria-label={`Open cart with ${itemCount} items`}
                onClick={() => setIsOpen((open) => !open)}
            >
                <svg className="Icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M17 18a2 2 0 1 1-2 2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12c0 .14.11.25.25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 1 1-2 2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" />
                </svg>
                {itemCount > 0 && <span className="CartCount">{itemCount}</span>}
            </button>

            {isOpen && (
                <div className="CartPanel">
                    <div className="CartPanelHeader">
                        <h2>Your cart</h2>
                        <button type="button" className="CartClose" onClick={() => setIsOpen(false)} aria-label="Close cart">&times;</button>
                    </div>

                    {cart.length === 0 ? (
                        <p className="CartEmpty">Your cart is waiting for something special.</p>
                    ) : (
                        <div className="CartItems">
                            {cart.map((item) => (
                                <div className="CartItem" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <div className="CartItemDetails">
                                        <h3>{item.name}</h3>
                                        <p>
                                            {item.price} &middot; Qty {item.quantity}
                                            <label>
                                                <span className="sr-only">Size</span>
                                                <select defaultValue="M" aria-label={`Select size for ${item.name}`}>
                                                    <option value="M">M</option>
                                                    <option value="L">L</option>
                                                    <option value="XL">XL</option>
                                                    <option value="2XL">2XL</option>
                                                    <option value="3XL">3XL</option>
                                                </select>
                                            </label>
                                        </p>
                                        <button type="button" onClick={() => removeItem(item.id)}>Remove one</button>
                                    </div>
                                    <button className="CartAdd" type="button" onClick={() => addItem(item)} aria-label={`Add another ${item.name}`}>+</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;