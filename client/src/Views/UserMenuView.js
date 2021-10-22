import React from 'react';

// Add buttons for each order
// 


function UserMenuView(props) {
    return (
        <div className="UserMenuView">
            <h3>Enter your table number.</h3>
            <form>
            <label>TABLE NUMBER:<input name="tableNumber" type="number" min="1" max="10"/></label>
            <h2>Menu</h2>
            <p>Choose your order by clicking the button below.</p>
            <ul>
                {props.menu.map((element) => (
                    <li key={element.id}>
                     {element.dish} {element.description} {element.price} 
                     <input name={element.dish} type="number" value="quantity" min="1" max="10"/>
                    </li>
                ))
                }</ul>

                <h3>ORDER SUMMARY</h3>
                <button type="submit">SUBMIT ORDER</button>    
            </form>
        </div>
    );
}

export default UserMenuView;