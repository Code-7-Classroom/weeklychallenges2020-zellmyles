CREATE DATABASE movies;

USE movies;

CREATE TABLE favMovies(
title VARCHAR (255),
releasedate VARCHAR (255),
rating varchar (255),
ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

INSERT INTO favMovies (title, releaseDate, rating)
VALUES ('The Dark Knight', 'July 14, 2008', 'PG-13'),
('Blade Runner', 'June 25, 1982', 'R'),
('Blade Runner 2049', 'October 6, 2017', 'R'),
('Spider-Man', 'May 3, 2002', 'PG-13'),
('Harry Potter and the Goblet of Fire', 'November 18, 2005', 'PG-13'),
('Drive', 'September 16, 2011', 'R'),
('The Place Beyond the Pines', 'April 19, 2013', 'R'),
('The Wood', 'July 16, 1999', 'R'),
('Star Wars: Episode III - Revenge of the Sith', 'May 19, 2005', 'PG-13'),
('Rush Hour', 'Sepember 18, 1998', 'PG-13');

SELECT * FROM favMovies;

INSERT INTO favMovies (title, releaseDate, rating)
Values ('Waves', 'November 15, 2019', 'R'),
('Public Enemies', 'July 1, 2009', 'R');

SELECT title, releaseDate FROM favMovies WHERE title LIKE "%s%" ORDER BY releaseDate ASC; 

ALTER TABLE favMovies
ADD COLUMN directorFirstName VARCHAR(255), 
ADD COLUMN directorLastName VARCHAR(255);

UPDATE favMovies
SET directorFirstName = 'Christopher', directorLastName = 'Nolan'
WHERE ID = 1;
UPDATE favMovies
SET directorFirstName = 'Ridley',directorLastName = 'Scott'
WHERE ID = 2;
UPDATE favMovies
SET directorFirstName = 'Denis', directorLastName = 'Villeneuve'
WHERE ID = 3;
UPDATE favMovies
SET directorFirstName = 'Sam', directorLastName = 'Raimi'
WHERE ID = 4;
UPDATE favMovies
SET directorFirstName = 'Mike', directorLastName = 'Newell'
WHERE ID = 5;
UPDATE favMovies
SET directorFirstName = 'Nicolas', directorLastName = 'Refn'
WHERE ID = 6;
UPDATE favMovies
SET directorFirstName = 'Derek', directorLastName = 'Cianfrance'
WHERE ID = 7;
UPDATE favMovies
SET directorFirstName = 'Rick', directorLastName = 'Famuyiwa'
WHERE ID = 8;
UPDATE favMovies
SET directorFirstName = 'George', directorLastName = 'Lucas'
WHERE ID = 9;
UPDATE favMovies
SET directorFirstName = 'Brett', directorLastName = 'Ratner'
WHERE ID = 10;
UPDATE favMovies
SET directorFirstName = 'Trey', directorLastName = 'Schults'
WHERE ID = 11;
UPDATE favMovies
SET directorFirstName = 'Michael', directorLastName = 'Mann'
WHERE ID = 12;

SELECT CONCAT(directorFirstName, ' ', directorLastName) AS director FROM favMovies;

SELECT * FROM favMovies ORDER BY directorLastName ASC;

SELECT directorLastName
FROM favMovies
WHERE directorLastName
REGEXP '^[.*[abcdefghijklmnopqABCDEFGHIJKLMNOPQ].*$]' 
AND directorLastName
NOT REGEXP '^[.*[rstuvwxyzRSTUVWXYZ].*$]'

LIMIT 3;






