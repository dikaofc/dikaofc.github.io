-- hayoloo 😹

CREATE DATABASE dikaofc_prod;
USE dikaofc_prod;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

INSERT INTO users (username, password_hash, email, is_admin) VALUES
  ('admin', '5f4dcc3b5aa765d61d8327deb882cf99', 'root@dikaofc.tech', TRUE),
  ('root', '5f4dcc3b5aa765d61d8327deb882cf99', 'root@localhost', TRUE),
  ('dikaofc', '5f4dcc3b5aa765d61d8327deb882cf99', 'dikasukasukaa@gmail.com', FALSE);

CREATE TABLE flags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  value VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);

INSERT INTO flags (value, description) VALUES
  ('DIKACODE{goblok}', 'ngapain?'),
  ('DIKACODE{hunter2}', 'asli ni awokawok');