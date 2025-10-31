import React from 'react';
import Card from '../features/dashboardFeatures/Card';
import { Package2 } from 'lucide-react';
import TableStock from '../features/dashboardFeatures/TableStock';

const DashboardPage = () => {
  return (
    <section className="space-y-3">
      <div className="grid grid-cols-3 gap-4">
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
        <Card icon={Package2} quantity={12} text="Jumlah Barang" />
      </div>
      <div>
        <TableStock />
      </div>
    </section>
  );
};

export default DashboardPage;
