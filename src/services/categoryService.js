import pool from '../Utils/db.js';

export const getAllCategories = async () => {
  const result = await pool.query('SELECT * FROM categorias ORDER BY nombre');
  return result.rows;
};