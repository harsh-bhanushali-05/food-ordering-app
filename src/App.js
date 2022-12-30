import {React,useState} from "react";
import Header from "./components/Header";
import  "./components/AppStyles.css";
import MealSummary from "./components/MealSummary";
import MealAvail from "./components/MealAvail";
import DUMMY_MEALS from "./components/AvailableMealData";
import Cart from "./components/Context/Cart";
import CartProvider from "./components/Context/CartProvider";
function App() {
  const [isopen,cartview]=useState(false);
  function changeView(){
      cartview(prev=>!prev);
  }
  let applyEffect="";
  if(isopen)
  applyEffect="blur";
  return (
    <CartProvider>
  <div className="animating">
    <div className={applyEffect} onClick={isopen?changeView:""}>
      <Header change={changeView}/>
      <MealSummary />
      <div className="menu">
      { DUMMY_MEALS.map((data)=> <MealAvail price={data.price} name={data.name} description={data.description}/>)};
      </div>
      
    </div>
  {isopen?<Cart change={changeView}></Cart>:<></>}
  </div>
  </CartProvider>
);
}

export default App;
