import DUMMY_MEALS from "../AvailableMealData";
import CartInfo from "./CartInfo";
function CartProvider(props) {
  function FindPrice(ids) {
    let ans = [];
    DUMMY_MEALS.map((data) => {
      if (data.id == ids) ans = data;
    });
    return ans;
  }
  function additemHandler(event) {
    // event.preventDefault();
    cartinfo.id = [...cartinfo.id, event.target.value];
    cartinfo.Amount += FindPrice(event.target.value).price;
    console.log(cartinfo);
  }
  function removeItemHandler() {}
  const cartinfo = {
    id: [],
    Amount: 0,
    addItem: additemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartInfo.Provider value={cartinfo}>{props.children}</CartInfo.Provider>
  );
}
export default CartProvider;
