-- schema.sql
-- Defines the voices table for the MusicGPT project

DROP TABLE IF EXISTS voices;

CREATE TABLE voices (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  lang VARCHAR(32)
); 