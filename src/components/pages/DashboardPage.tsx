import React from 'react';
import Card from '../features/dashboardFeatures/Card';
import { Package2 } from 'lucide-react';

const DashboardPage = () => {
  return (
    <section className="min-w-screen">
      <div className="grid grid-cols-3 gap-3">
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
      </div>
    </section>
  );
};

export default DashboardPage;
