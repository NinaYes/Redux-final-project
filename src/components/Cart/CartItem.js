import { useDispatch } from "react-redux";
import dataArt from "../Data/dataArt";
import { removeItemFromCart } from "../Redux/cartSlice";

const CartItem = ({cartItem}) => {
    
    const artItems = dataArt.find(item => item.id === cartItem.artId)
    const dispatch = useDispatch();

    return (
        <div>
            <p>{artItems.name}</p>
            <p>{cartItem.quantity} item(s)</p>
            <p>Price: ${artItems.price * cartItem.quantity}</p>
            <span onClick ={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/?size=100&id=1942&format=png&color=FA5252" alt="another shopping cart"/>
            </span> 
        </div>
    )
}

export default CartItem;