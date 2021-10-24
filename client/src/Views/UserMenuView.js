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
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addOrder(orderItems);
    setOrderItems(emptyForm);
  }


    return (
        <div className="UserMenuView">
            <div className="container">
            <h3>Enter your table number.</h3>
            <form onSubmit = {handleSubmit}>
            <label>TABLE NUMBER:<input name="tablenumber" value={orderItems.tablenumber} onChange={handleChange} type="number" min="1" max="10"/></label>
            <h2>Menu</h2>
            <p>Choose the items you would like to order and hit submit.</p>
            <ul>
                
                {props.menu.map((element) => (
                    <li key={element.id}> 
                    <div className="row">
                    
                    <div className="col-md">
                    <img src={element.imagefile} className="img-fluid img-thumbnail rounded float-left" width="200" height="200"/>
                    </div>
                    
                    <div className="col-md">
                    <button type = "button" name="dish" value = {orderItems.dish = element.dish} onChange={handleChange}> {element.dish} </button> 
                    <br/> {element.details}
                    </div>
                    
                    <div className="col-sm"> 
                     EU{element.price}
                    </div>  

                    <div className="col-sm"> 
                    <input name="quantity" value={orderItems.quantity} type="number" onChange={handleChange} min="1" max="10"/>
                    </div>
                    </div>    
                    </li>
                ))
                }
                
            </ul>
                <button type="submit">SUBMIT ORDER</button>    
            </form>
            </div>
        </div>
    );
}

export default UserMenuView;