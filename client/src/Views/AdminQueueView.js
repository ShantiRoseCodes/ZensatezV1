import React from 'react';
import './Views.css';



function AdminQueueView(props) {

    const handleStrike = event => {
        event.target.className = "strike";
        }

    return (
        <div className="AdminQueueView">
            <h2>ORDERS</h2>
            {props.orders.map((element) =>(
                <li onClick={handleStrike}>
                {element.date_time} DISH: {element.dish}  QTY: {element.quantity} TABLE:{element.tablenumber} 
                </li>
            ))}
        </div>
    );
}

export default AdminQueueView;