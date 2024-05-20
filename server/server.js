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
const dashboardRoutes = require('./routes/dashboardRoutes');
const settingsRoutes = require('./routes/settingsRoutes');

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
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/settings', settingsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
