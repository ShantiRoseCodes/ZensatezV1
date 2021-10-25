import React from 'react';
import './Views.css';



function AdminQueueView(props) {

// Strikes through finished tasks
    const handleStrike = event => {
        let li = event.target.closest('li');
        li.classList.add('strike');
    }

    // At first, I thought adding a Boolean in orders table is unnecessary UNTIL I hit refrest.
    // Now considering adding a Complete column to orders in DB with a boolean data type.
    // Using ternary operator to strike through the tasks finished.

    return (
        <div className="AdminQueueView">
            <div className = "container">
            <h2>ORDERS</h2>
            {props.orders.map((element) =>(
                <li onClick={handleStrike}>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"> DATE/TIME </th>
                            <th scope="col"> DISH </th>
                            <th scope="col"> QUANTITY </th>
                            <th scope="col"> TABLE </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{element.date_time}</td>
                            <td>{element.dish}</td>
                            <td>{element.quantity}</td>
                            <td>{element.tablenumber}</td>
                        </tr>
                    </tbody>
                </table>
                </li>
            ))}
            </div>
        </div>
    );
}

export default AdminQueueView;