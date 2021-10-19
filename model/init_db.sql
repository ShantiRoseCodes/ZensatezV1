DROP TABLE IF EXISTS students; 
DROP TABLE IF EXISTS classes; 
 
CREATE TABLE classes ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(100), 
    teacher VARCHAR(100) 
); 
 
CREATE TABLE students ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    first_name VARCHAR(100), 
    last_name VARCHAR(100), 
    FOREIGN KEY(class_id) REFERENCES classes(id) 
); 
 
INSERT INTO classes (title, teacher)  
    VALUES ('Intro to Express', 'Hernandez'); 
INSERT INTO students (first_name, last_name, class_id)  
    VALUES ('Michael', 'Goleman', 1);