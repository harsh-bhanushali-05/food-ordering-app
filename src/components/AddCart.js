import "./AddCartStyles.css";
import {React,useContext} from "react";
import items from "./Context/CartInfo";
function AddCart(){
    const ct=useContext(items);
return (<div className="form">
<form>
    <button onClick={ct.addItem}>+ADD</button>
</form>
</div>);
}
export default AddCart;