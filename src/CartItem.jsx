import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity, addItem } from './CartSlice';

function CartItem({ onContinueShopping }) {
    const dispatch = useDispatch();
    
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    const handleUpdateQuantity = (item, quantity) => {
        dispatch(updateQuantity({ name: item.name, quantity }));
    };

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    // Retrieve cart items from Redux state
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="cart-item">
            <h2>Shopping Cart</h2>
            <button onClick={onContinueShopping}>Continue Shopping</button>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.cost}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => handleUpdateQuantity(item, item.quantity + 1)}>Increase Quantity</button>
                        <button onClick={() => handleUpdateQuantity(item, item.quantity - 1)}>Decrease Quantity</button>
                        <button onClick={() => handleAddItem(item)}>Add More</button>
                        <button onClick={() => handleRemoveItem(item)}>Remove Item</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CartItem;
