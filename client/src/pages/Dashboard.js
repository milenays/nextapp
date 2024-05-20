import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Günlük Satış Cirosu</h2>
                        <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg">
                            {/* Grafik Bileşeni Buraya Gelecek */}
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Platform Bazlı Satış Cirosu</h2>
                        <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg">
                            {/* Grafik Bileşeni Buraya Gelecek */}
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Kritik Stok</h2>
                        <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg">
                            {/* Grafik Bileşeni Buraya Gelecek */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
