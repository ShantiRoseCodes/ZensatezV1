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

const handleClick = (event) => {
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
                
                <div className="form-group">
                <label for="inputTableNumber">TABLE NUMBER:<input id="inputTableNumber" className="form-control border border-dark" name="tablenumber" value={orderItems.tablenumber} onChange={handleChange} type="number" min="1" max="10"/></label>
                </div>
            
                <h2>Menu</h2>
                <p>Choose the items you would order, choose the quantity and hit submit.</p>
            
            <ul>
                
                {props.menu.map((element) => (
                    <li key={element.id}> 
                    <div className="row">
                    
                    <div className="col-md">
                    <img src={element.imagefile} className="img-fluid img-thumbnail rounded float-left" width="200" height="200"/>
                    </div>
                    
                    <div className="col-md">
                    <button type = "button" class="btn btn-secondary btn-sm" name="dish" value = {element.dish} onClick={handleClick}> {element.dish} </button> 
                    <br/> {element.details}
                    <br/> {element.category}
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