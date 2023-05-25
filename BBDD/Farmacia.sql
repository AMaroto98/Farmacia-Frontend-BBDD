DROP DATABASE IF EXISTS farmacia;
CREATE DATABASE farmacia;
USE farmacia;

CREATE TABLE doctor (
    mail VARCHAR(50) PRIMARY KEY,
    pass VARCHAR(100),
    name VARCHAR(255),
    last_log DATE,
    session INT(10)
);

CREATE TABLE medicine (
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    tmax FLOAT,
    tmin FLOAT
);


CREATE TABLE patient (
    mail VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE xip (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    doctor_mail VARCHAR(50),
    id_medicine INT(10),
    id_patient VARCHAR(50),
    date DATE,
    FOREIGN KEY (doctor_mail) REFERENCES doctor(mail),
    FOREIGN KEY (id_medicine) REFERENCES medicine(id),
    FOREIGN KEY (id_patient) REFERENCES patient(mail)
);