const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const integrationRoutes = require('./routes/integrationRoutes');
const orderRoutes = require('./routes/orderRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const supplyRoutes = require('./routes/supplyRoutes');

dotenv.config({ path: './.env' });

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/integrations', integrationRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/warehouse', warehouseRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/supplies', supplyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
