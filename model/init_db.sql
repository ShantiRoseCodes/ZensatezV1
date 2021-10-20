DROP TABLE IF EXISTS menu; 
DROP TABLE IF EXISTS orders; 
DROP TABLE IF EXISTS items;
 
CREATE TABLE menu ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    category VARCHAR(100), 
    dish VARCHAR(200),
    details VARCHAR(500),
    imagefile VARCHAR(500),
    price DEC(5,2)
); 
 
CREATE TABLE orders ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date_time DATETIME DEFAULT NOW(),
    tablenumber SMALLINT
); 

CREATE TABLE items (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dish VARCHAR(200),
    quantity SMALLINT,
    order_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
 
INSERT INTO menu (category, dish, details, imagefile, price)  
    VALUES ('tapas', 'Patatas Bravas', 'fried potatoes with salsa brava', 'patatasbravas.jpg', 2.50); 

INSERT INTO orders (tablenumber)  
    VALUES (1);

INSERT INTO items (dish, quantity, order_id)
    VALUES ('Patatas Bravas', 1, 1);