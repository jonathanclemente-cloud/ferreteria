import * as productService from '../services/productService.js';
import { successResponse, errorResponse } from '../Utils/helpers.js';

export const getAll = async (req, res) => {
  try {
    const { categoria, buscar } = req.query;
    let productos;

    if (buscar) {
      productos = await productService.searchProducts(buscar);
    } else if (categoria) {
      productos = await productService.getProductsByCategory(categoria);
    } else {
      productos = await productService.getAllProducts();
    }

    successResponse(res, productos);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

export const getById = async (req, res) => {
  try {
    const producto = await productService.getProductById(req.params.id);
    if (!producto) return errorResponse(res, 'Producto no encontrado', 404);
    successResponse(res, producto);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

export const create = async (req, res) => {
  try {
    const producto = await productService.createProduct(req.body);
    successResponse(res, producto, 'Producto creado exitosamente', 201);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

export const update = async (req, res) => {
  try {
    const producto = await productService.updateProduct(req.params.id, req.body);
    if (!producto) return errorResponse(res, 'Producto no encontrado', 404);
    successResponse(res, producto, 'Producto actualizado');
  } catch (err) {
    errorResponse(res, err.message);
  }
};

export const remove = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    successResponse(res, null, 'Producto eliminado');
  } catch (err) {
    errorResponse(res, err.message);
  }
};