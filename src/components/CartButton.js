import {React,useState} from "react";
import "./CartButtonStyle.css";
import CartIcon from "./CartIcon";
import Cart from "./Context/Cart";
function CartButton(props){
    const [isopen,cartview]=useState(false);
return(<div>
<div className="badge">
    <button className="button" type="submit" onClick={props.change}>
    <span className="icon">
    <CartIcon />
    </span>
    <span>Cart</span>
    </button>
</div>
{isopen?<Cart change={props.change}/>:<p/>}
</div>
);
}
export default CartButton;