import React from 'react';



function UserMenuView(props) {
    
    return (
        <div className="UserMenuView">
            <h2>Menu</h2>
            <p>You will soon see a list of orders here.</p>
            <ul>
                {props.menu.map((element) => (
                    <li key={element.id}>
                     {element.dish} {element.description} {element.price} 
                    </li>
                ))
                }</ul>
        </div>
    );
}

export default UserMenuView;