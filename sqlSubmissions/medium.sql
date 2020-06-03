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