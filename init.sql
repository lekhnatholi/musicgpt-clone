-- init.sql
-- Creates the voices table and seeds initial data

CREATE TABLE IF NOT EXISTS voices (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  lang VARCHAR(32)
);

INSERT INTO voices (name, lang) VALUES
  ('Alice', 'en-US'),
  ('Bob', 'en-GB'),
  ('Carla', 'es-ES'),
  ('Daisuke', 'ja-JP'),
  ('Elena', 'it-IT'),
  ('Franz', 'de-DE'),
  ('Giulia', 'it-IT'),
  ('Hana', 'cs-CZ'),
  ('Ivan', 'ru-RU'),
  ('Julia', 'fr-FR'),
  ('Kenji', 'ja-JP'),
  ('Lars', 'sv-SE'),
  ('Maria', 'pt-PT'),
  ('Nina', 'nl-NL'),
  ('Olga', 'ru-RU'),
  ('Pedro', 'pt-BR'),
  ('Qi', 'zh-CN'),
  ('Rosa', 'es-MX'),
  ('Sven', 'sv-SE'),
  ('Tom', 'en-US'); 