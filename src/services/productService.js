import pool from '../Utils/db.js';

export const getAllProducts = async () => {
  const result = await pool.query(
    'SELECT * FROM productos ORDER BY created_at DESC'
  );
  return result.rows;
};

export const getProductById = async (id) => {
  const result = await pool.query(
    'SELECT * FROM productos WHERE id = $1', [id]
  );
  return result.rows[0];
};

export const getProductsByCategory = async (categoria) => {
  const result = await pool.query(
    'SELECT * FROM productos WHERE categoria = $1 ORDER BY nombre', [categoria]
  );
  return result.rows;
};

export const searchProducts = async (query) => {
  const result = await pool.query(
    `SELECT * FROM productos 
     WHERE nombre ILIKE $1 OR descripcion ILIKE $1
     ORDER BY nombre`,
    [`%${query}%`]
  );
  return result.rows;
};

export const createProduct = async (data) => {
  const { nombre, descripcion, precio, precio_anterior, categoria, marca, imagen, stock, badge } = data;
  const result = await pool.query(
    `INSERT INTO productos 
     (nombre, descripcion, precio, precio_anterior, categoria, marca, imagen, stock, badge)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
     RETURNING *`,
    [nombre, descripcion, precio, precio_anterior, categoria, marca, imagen, stock, badge]
  );
  return result.rows[0];
};

export const updateProduct = async (id, data) => {
  const { nombre, descripcion, precio, precio_anterior, categoria, marca, imagen, stock, badge } = data;
  const result = await pool.query(
    `UPDATE productos SET 
     nombre=$1, descripcion=$2, precio=$3, precio_anterior=$4,
     categoria=$5, marca=$6, imagen=$7, stock=$8, badge=$9
     WHERE id=$10 RETURNING *`,
    [nombre, descripcion, precio, precio_anterior, categoria, marca, imagen, stock, badge, id]
  );
  return result.rows[0];
};

export const deleteProduct = async (id) => {
  await pool.query('DELETE FROM productos WHERE id = $1', [id]);
};