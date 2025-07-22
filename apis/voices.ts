import pool from '../config/db';

export async function getVoices(page: number = 1, pageSize: number = 5) {
  const offset = (page - 1) * pageSize;
  const voicesResult = await pool.query(
    'SELECT * FROM voices ORDER BY id LIMIT $1 OFFSET $2',
    [pageSize, offset]
  );
  const countResult = await pool.query('SELECT COUNT(*) FROM voices');
  const total = parseInt(countResult.rows[0].count, 10);
  return {
    voices: voicesResult.rows,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}
