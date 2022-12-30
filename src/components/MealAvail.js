import {React,useContext} from "react";
import "./MealAvailStyles.css";
import AddCart from "./AddCart";
function MealAvail(props){
return (
<div className="meal">
<h3>{props.name}</h3>
<p className="description">{props.description}</p>
<p className="price">{props.price}</p>
<AddCart/>
</div>);
}
export default MealAvail;