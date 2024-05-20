import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

const Dashboard = () => {
    const [salesData, setSalesData] = useState([]);
    const [stockData, setStockData] = useState([]);
    const [platformSalesData, setPlatformSalesData] = useState([]);
    const [criticalStockData, setCriticalStockData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: sales } = await axios.get('/api/dashboard/sales');
            setSalesData(sales);

            const { data: stocks } = await axios.get('/api/dashboard/stocks');
            setStockData(stocks);

            const { data: platformSales } = await axios.get('/api/dashboard/platform-sales');
            setPlatformSalesData(platformSales);

            const { data: criticalStocks } = await axios.get('/api/dashboard/critical-stocks');
            setCriticalStockData(criticalStocks);
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Günlük Satış Cirosu</h2>
                <LineChart width={600} height={300} data={salesData}>
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

            <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Platform Bazlı Satış Cirosu</h2>
                <PieChart width={600} height={300}>
                    <Pie data={platformSalesData} dataKey="value" nameKey="platform" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                        {platformSalesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>

            <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Kritik Stok</h2>
                <ul>
                    {criticalStockData.map((item) => (
                        <li key={item._id}>
                            {item.name} - {item.stockQuantity} adet
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default Dashboard;
