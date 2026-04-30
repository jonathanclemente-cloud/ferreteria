import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorHandler, notFound } from './Middlewares/errorHandler.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Para obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../html')));
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/contenido_multimedia', express.static(path.join(__dirname, '../contenido_multimedia')));

// Rutas de la API
app.use('/api/productos', productRoutes);

// Ruta principal → sirve el index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

// Middleware de rutas no encontradas y errores
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});