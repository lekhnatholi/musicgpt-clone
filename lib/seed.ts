import pool from '../config/db';

const voices = [
  { name: 'Alice', lang: 'en-US' },
  { name: 'Bob', lang: 'en-GB' },
  { name: 'Carla', lang: 'es-ES' },
  { name: 'Daisuke', lang: 'ja-JP' },
  { name: 'Elena', lang: 'it-IT' },
  { name: 'Franz', lang: 'de-DE' },
  { name: 'Giulia', lang: 'it-IT' },
  { name: 'Hana', lang: 'cs-CZ' },
  { name: 'Ivan', lang: 'ru-RU' },
  { name: 'Julia', lang: 'fr-FR' },
  { name: 'Kenji', lang: 'ja-JP' },
  { name: 'Lars', lang: 'sv-SE' },
  { name: 'Maria', lang: 'pt-PT' },
  { name: 'Nina', lang: 'nl-NL' },
  { name: 'Olga', lang: 'ru-RU' },
  { name: 'Pedro', lang: 'pt-BR' },
  { name: 'Qi', lang: 'zh-CN' },
  { name: 'Rosa', lang: 'es-MX' },
  { name: 'Sven', lang: 'sv-SE' },
  { name: 'Tom', lang: 'en-US' },
];

async function seed() {
  await pool.query(`
    DROP TABLE IF EXISTS voices;
    CREATE TABLE voices (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      lang VARCHAR(32)
    );
  `);

  for (const v of voices) {
    await pool.query('INSERT INTO voices (name, lang) VALUES ($1, $2)', [v.name, v.lang]);
  }

  console.log('Seeded voices table!');
  await pool.end();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});