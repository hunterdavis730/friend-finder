CREATE DATABASE friends_db;

USE friends_db;

CREATE table friends (
    id integer() NOT NULL auto_increment,
    name VARCHAR(60) NOT NULL,
    photo VARCHAR(300) NOT NULL,
    scores VARCHAR(80) NOT NULL, 
    primary key(id)
)

INSERT INTO friends(name, photo, scores) VALUES ("John", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzT2AJk_n2myzt36Thz8RBGe9mIppdkOQO50FXQsQYZ7kyCXEmhA", "2, 3, 4, 2, 3, 4, 3, 2, 4, 5");
INSERT INTO friends(name, photo, scores) VALUES ("John", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzT2AJk_n2myzt36Thz8RBGe9mIppdkOQO50FXQsQYZ7kyCXEmhA", "2, 3, 4, 2, 3, 4, 3, 2, 4, 5");