CREATE DATABASE books;

USE books;

CREATE TABLE favBooks(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
publishDate VARCHAR(255),
authorFirstName VARCHAR(255),
authorLastName VARCHAR(255)
);

INSERT INTO favBooks(title, publishDate, authorFirstName, authorLastName)
VALUES('Harry Potter and the Goblet of Fire', 'July 8, 2000', 'J.K.', 'Rowling'),
('Harry Potter and the Prisoner of Azkaban', 'July 8, 1999', 'J.K.', 'Rowling'),
('Harry Potter and the Chamber of Secrets', 'July 2, 1998', 'J.K.', 'Rowling'),
('Harry Potter and the Philosopher\'s Stone', 'June 26, 1997', 'J.K.', 'Rowling'),
('Harry Potter and the Order of the Phoenix', 'June 21, 2003', 'J.K.', 'Rowling');



INSERT INTO favBooks(title, publishDate, authorFirstName, authorLastName)
VALUES ('Batman: The Killing Joke', 'March 1998', 'Alan', 'Moore'),
('Batman: The Dark Knight Returns', 'February 1986', 'Frank', 'Miller');

DELETE FROM favBooks ORDER BY publishDate ASC LIMIT 1;
SELECT COUNT(1) FROM favBooks;

SELECT * FROM favBooks;






SELECT COUNT(*) FROM favBooks;

