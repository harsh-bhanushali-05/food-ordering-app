import { React, useContext } from "react";
import items from "./CartInfo";
import DUMMY_MEALS from "../AvailableMealData";
import "./CartStyles.css";
function Cart(props) {
  function FindName(ids) {
    let ans = [];
    DUMMY_MEALS.map((data) => {
      if (data.id == ids) ans = data;
    });
    return ans;
  }
  const ct = useContext(items);
  const CartItem = (
    <ul className="cart-items ">
      {ct.id.map((data) => (
        <li>
          <div className="prod">
            <p>{FindName(data).name}</p>
            <p>{FindName(data).price}</p>
            {/*has to be optimised so as to save the object and not search for the same item 2 times  */}
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="cart">
      <div className="fit">
        {CartItem}
        <div className="total">
          <span>Total Amount</span>
          <span>{ct.Amount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={props.change}>
            CLOSE
          </button>
          <button className="button">ORDER</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
