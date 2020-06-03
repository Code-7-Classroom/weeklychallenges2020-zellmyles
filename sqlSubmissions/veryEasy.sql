CREATE DATABASE cars;

USE cars;

CREATE TABLE favCars(
Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
make VARCHAR (255),
model VARCHAR (255),
year INT
);

INSERT INTO favCars (make, model, year)
VALUES ('Infinit', 'G37', 2008),
('Honda', 'Accord', 2001),
('Ford', 'Mustsng GT', 1992);

SELECT * FROM favCars;

INSERT INTO favCars (make, model, year)
VALUES ('Ford', 'F150', 2010),
('Ford', 'Crown Victoria', 1984)



