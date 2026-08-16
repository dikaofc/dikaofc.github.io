-- Decoy database dump — SEMUA DATA DI BAWAH INI PALSU.
-- Dibuat biar bot scraper & hunter bug ngira nemu database bocor.
-- Padahal: kena prank. 😹

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
  ('DIKACODE{ini_bukan_flag_asli_goblok}', 'flag palsu buat prank'),
  ('DIKACODE{hunter2_tapi_palsu}', 'masih palsu juga');

-- catatan untuk yang baca: hash di atas cuma MD5 "password" — 
-- itu sengaja biar alat cracker langsung "berhasil" padahal nggak ada DB-nya.
