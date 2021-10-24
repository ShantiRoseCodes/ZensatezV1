import React from 'react';


function AdminQueueView(props) {
    return (
        <div className="AdminQueueView">
            <h2>ORDERS</h2>
            {props.orders.map((element) =>(
                <li>{element.date_time} DISH: {element.dish}  QTY: {element.quantity} TABLE:{element.tablenumber} <button></button> </button></li>
            ))}
        </div>
    );
}

export default AdminQueueView;