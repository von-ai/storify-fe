import React from 'react';
import {
  Card,
  TableStock,
  TableLow,
} from '../features/dashboardFeatures/index';
import { Package2, Album, ChevronsDown } from 'lucide-react';

const DashboardPage = () => {
  return (
    <section className="space-y-6">
      <h1 className="font-bold text-2xl">Welcome Back, Users!</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card icon={Package2} quantity={50} text="Total Barang" />
        <Card icon={Album} quantity={12} text="Total Kategori" />
        <Card icon={ChevronsDown} quantity={5} text="Stock Menipis" />
      </div>
      <h2 className="font-semibold text-xl">Recent Update</h2>
      <div>
        <TableStock />
      </div>
      <h2 className="font-semibold text-xl">Stock Low</h2>
      <div>
        <TableLow />
      </div>
    </section>
  );
};

export default DashboardPage;
