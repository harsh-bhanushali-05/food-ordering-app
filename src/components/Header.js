import "./HeaderStyle.css";
import CartButton from "./CartButton";
function Header(props){
    return (<div>
        <div className="header">
            <h1>ReactMeal</h1>
            <CartButton change={props.change}/>
        </div>
        <img className="main-image" src="https://cdn.winsightmedia.com/platform/files/public/2018-04/background/buffet-line_1524090634.jpg" alt="The image could not be loaded due to network issues " />
        </div>
    )
}
export default Header;