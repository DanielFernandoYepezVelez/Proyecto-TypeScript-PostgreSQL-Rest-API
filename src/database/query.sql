CREATE DATABASE typescriptdatabase;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);

INSERT INTO users
  (name, email)
VALUES
  ('daniel', 'danipez.02@gmail.com'),
  ('fernando', 'fernando.02@gmail.com');
