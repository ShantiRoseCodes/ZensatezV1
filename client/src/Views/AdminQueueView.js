import React from 'react';
import './Views.css';



function AdminQueueView(props) {

    // const handleStrike = event => {
    //     event.target.className = "strike";
    // }

    const handleStrike = event => {
        let li = event.target.closest('li');
        li.classList.add('strike');
    }

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