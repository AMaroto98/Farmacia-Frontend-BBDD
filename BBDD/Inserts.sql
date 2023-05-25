USE farmacia;

INSERT INTO doctor (mail, pass, name) VALUES ('antonio@gmail.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'Antonio'), 
('maria@gmail.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'Maria');

INSERT INTO medicine (name, tmax, tmin) VALUES ('Paracetamol', 10.5, 2.3), ('Imurel', 8.7, 1.5), ('Enantyum', 15.2, 3.1), ('Enandol', 20.6, 8.4), ('Amoxicilina', 18.1, 2.3), ('Prednisona', 30.6, 5.1), ('Omeprazol', 10.4, 3.3), ('Nolotil', 35.1, 1.5);

INSERT INTO patient (mail, name) VALUES ('patricia@gmail.com', 'Patricia Martinez Jover'), ('alfredo@gmail.com', 'Alfredo Duro Alcover'),  ('carlos@gmail.com', 'Carlos García López'), ('laura@gmail.com', 'Laura Pérez Torres'), ('miguel@gmail.com', 'Miguel Rodríguez Fernández'), ('ana@gmail.com', 'Ana Jiménez Ruiz'), ('luisa@gmail.com', 'Luisa Moreno Vargas'), ('david@gmail.com', 'David Sánchez Pérez'), ('javier@gmail.com', 'Javier Ruiz Torres');

INSERT INTO xip (doctor_mail, id_medicine, id_patient, date) VALUES 
('antonio@gmail.com', 1, 'patricia@gmail.com', '2023-09-20'), 
('antonio@gmail.com', 3, 'patricia@gmail.com', '2023-10-10'),
('antonio@gmail.com', 4, 'david@gmail.com', '2023-12-01'), 
('antonio@gmail.com', 5, 'javier@gmail.com', '2023-08-13'),
('antonio@gmail.com', 6, 'carlos@gmail.com', '2023-11-14'), 
('antonio@gmail.com', 7, 'laura@gmail.com', '2023-06-12'),
('maria@gmail.com', 2, 'alfredo@gmail.com', '2023-12-21'),
('maria@gmail.com', 1, 'alfredo@gmail.com', '2023-12-21');


-- 1234 pass: 03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4