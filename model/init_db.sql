DROP TABLE IF EXISTS menu; 
DROP TABLE IF EXISTS orders; 
 
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
    tablenumber SMALLINT,
    dish VARCHAR(200),
    quantity SMALLINT
); 

 
INSERT INTO menu (category, dish, details, imagefile, price)  
    VALUES ('tapas', 'Patatas Bravas', 'fried potatoes with salsa brava', 'https://spanishsabores.com/wp-content/uploads/2016/03/DSC07129.jpg', 2.50); 


INSERT INTO orders (tablenumber, dish, quantity)
    VALUES (1, 'Patatas Bravas', 1);
    