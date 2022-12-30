import {React,useContext} from "react";
import CartInfo from "./CartInfo";
function CartProvider(props){
function additemHandler(event){
    // cartinfo.id=[...CartInfo.id,props.id]
    event.preventDefault();
    console.log("An item has been added");
}
function removeItemHandler(){

}
    const cartinfo={
        id:['m1','m2'],
        Amount:10,
        addItem:additemHandler,
        removeItem:removeItemHandler
    };
return <CartInfo.Provider value={cartinfo}>
    {props.children}
</CartInfo.Provider>;
}
export default CartProvider;