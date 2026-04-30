export const successResponse = (res, data, message = 'OK', status = 200) => {
  return res.status(status).json({ success: true, message, data });
};

export const errorResponse = (res, message = 'Error interno', status = 500) => {
  return res.status(status).json({ success: false, message });
};

export const formatPrice = (price) => parseFloat(price).toFixed(2);