const Order = require('../models/Order');
const Product = require('../models/Product');

exports.getSalesData = async (req, res) => {
    try {
        const sales = await Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    revenue: { $sum: "$totalPrice" },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        const formattedSales = sales.map(sale => ({
            date: sale._id,
            revenue: sale.revenue,
            count: sale.count
        }));

        res.json(formattedSales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStockData = async (req, res) => {
    try {
        const stocks = await Product.find({}, 'name stockQuantity');

        res.json(stocks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPlatformSalesData = async (req, res) => {
    try {
        const platformSales = await Order.aggregate([
            {
                $group: {
                    _id: "$platform",
                    value: { $sum: "$totalPrice" }
                }
            }
        ]);

        const formattedPlatformSales = platformSales.map(sale => ({
            platform: sale._id,
            value: sale.value
        }));

        res.json(formattedPlatformSales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCriticalStockData = async (req, res) => {
    try {
        const criticalStocks = await Product.find({ stockQuantity: { $lt: 10 } }, 'name stockQuantity');

        res.json(criticalStocks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
