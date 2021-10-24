import { useState } from "react";

function UserMenuView(props) {

const emptyForm = {
    tablenumber: "",
    dish: "",
    quantity: ""
};

let [orderItems, setOrderItems] = useState(emptyForm);

const handleChange = (event) => {
    setOrderItems({...orderItems, [event.target.name]: event.target.value});
    console.log(event.target.name);
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addOrder(orderItems);
    setOrderItems(emptyForm);
  }


    return (
        <div className="UserMenuView">
            <h3>Enter your table number.</h3>
            <form onSubmit = {handleSubmit}>
            <label>TABLE NUMBER:<input name="tablenumber" value={orderItems.tablenumber} onChange={handleChange} type="number" min="1" max="10"/></label>
            <h2>Menu</h2>
            <p>Choose the items you would like to order and hit submit.</p>
            <ul>
                {props.menu.map((element) => (
                    <li key={element.id}> 
                     <button name="dish" value = {orderItems.dish = element.dish}> {element.dish} </button>        EU{element.price} <br/> {element.details}
                     <input name="quantity" value={orderItems.quantity} type="number" onChange={handleChange} min="1" max="10"/>
                    </li>
                ))
                }</ul>
                <button type="submit">SUBMIT ORDER</button>    
            </form>
        </div>
    );
}

export default UserMenuView;