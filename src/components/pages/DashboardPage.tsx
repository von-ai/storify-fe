import React from 'react';
import { Card, TableStock } from '../features/dashboardFeatures/index';
import { Package2 } from 'lucide-react';

const DashboardPage = () => {
  return (
    <section className="space-y-6">
      <h1 className="font-bold text-2xl">Selamat Datang, Users!</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
      </div>
      <h2 className="font-semibold text-xl">Stok Barang</h2>
      <div>
        <TableStock />
      </div>
    </section>
  );
};

export default DashboardPage;
