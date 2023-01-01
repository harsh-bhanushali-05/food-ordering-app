import "./AddCartStyles.css";
import {React,useContext} from "react";
import items from "./Context/CartInfo";
function AddCart(props){
    const ct=useContext(items);
return (<div className="form">
<form>
    <button type="button" onClick={ct.addItem} value ={props.id}>+ADD</button>
</form>
</div>);
}
export default AddCart;