import { useState } from "react";


function UserMenuView(props) {

const emptyForm = {
    tablenumber: "",
    dish: "",
    quantity: ""
};

let [orderItems, setOrderItems] = useState(emptyForm);

// handleChange for the text input and select inputs part of the form.
const handleChange = (event) => {
    setOrderItems({...orderItems, [event.target.name]: event.target.value});
  }

// a handleClick for the button that inputs the dish's value into the form.
  const handleClick = (event) => {
    setOrderItems({...orderItems, [event.target.name]: event.target.value});
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addOrder(orderItems);
    setOrderItems(emptyForm);
  }

// Considering ternary operator to group lists into categories?

    return (
        <div className="UserMenuView">
            <div className="container">
                <h3>Enter your table number.</h3>
                <form onSubmit = {handleSubmit}>
                
                <div className="form-group">
                <label className="font-weight-bold" for="inputTableNumber">TABLE NUMBER:</label>
                <div className="col-4">
                <input id="inputTableNumber" className="form-control border border-dark" name="tablenumber" value={orderItems.tablenumber} onChange={handleChange} type="number" min="1" max="10"/>
                </div>
                </div>
            
                <h2>Menu</h2>
                <p>Choose the items you would like to order, choose the quantity and hit submit.</p>
            
            <ul>
                
                {props.menu.map((element) => (
                    <li key={element.id}> 
                    <div className="row">
                    
                    <div className="col-md">
                    <img src={element.imagefile} className="img-fluid img-thumbnail rounded float-left" width="200" height="200"/>
                    </div>
                    
                    <div className="col-md">
                    <button type = "button" class="btn btn-secondary btn-sm" name="dish" value = {element.dish} onClick={handleClick}> {element.dish} </button> 
                    <p className="font-italic"> {element.details} </p>
                    <span className="badge badge-info"> {element.category} </span>
                    </div>
                    
                    <div className="col-sm"> 
                     EU{element.price}
                    </div>  
                    
                    </div>    
                    </li>
                ))
                }
            </ul>

            <div className = "form-group">
            <label for="quantity">QUANTITY</label>
            <div className="col-4">
            <input id="quantity" class="form-control border border-dark" name="quantity" value={orderItems.quantity} type="number" onChange={handleChange} min="1" max="10"/>
            </div>
            </div>    
            
            <button type="submit" className="btn btn-primary btn-lg">SUBMIT ORDER</button>    
            
            </form>
            </div>
        </div>
    );
}

export default UserMenuView;