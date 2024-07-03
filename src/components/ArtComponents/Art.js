import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/cartSlice";


const Art = ({art}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div>
            <img src={`./${art.img}.avif`} alt="art"/>
            <h2>{art.name}</h2>
            <p>${art.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={() => {dispatch(addItemToCart({art, quantity}));
        }}>Add to cart</button>
        </div>
    )
}

export default Art;