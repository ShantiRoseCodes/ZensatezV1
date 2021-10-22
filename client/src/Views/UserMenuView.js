import { useState } from "react";

function UserMenuView(props) {

let [orders, setOrders] = useState([]);
let [table, setTable] = useState([]);
let [orderItems, setOrderItems] = useState({

});
    return (
        <div className="UserMenuView">
            <h3>Enter your table number.</h3>
            <form>
            <label>TABLE NUMBER:<input name="table" type="number" min="1" max="10"/></label>
            <h2>Menu</h2>
            <p>Choose your order by clicking the button below.</p>
            <ul>
                {props.menu.map((element) => (
                    <li key={element.id}>
                     {element.dish} {element.description} {element.price} 
                     <input name={element.dish} type="number" min="1" max="10"/>
                    </li>
                ))
                }</ul>

                <h3>ORDER SUMMARY</h3>
                <p>Please check your order and hit the submit button when you are ready.</p>

                <button type="submit">SUBMIT ORDER</button>    
            </form>
        </div>
    );
}

export default UserMenuView;