import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../Redux/cartSlice";
import cartTwo from "./CartTwo.png"

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>
            <img className="cartIcon" src={cartTwo} alt="shopping cart" /> 
            <h3 className="price">TOTAL: ${totalPrice} </h3>
            {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem} />)}   
        </div>
    )
}

export default Cart;