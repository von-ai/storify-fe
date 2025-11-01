import { Button } from '@/components/ui/Button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { tabelDatas } from '@/data/tabel-dashboard';

import React from 'react';

const TableStock = () => {
  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-gray-900 transition ease-in-out duration-300">
            <TableHead>ID</TableHead>
            <TableHead>Nama Barang</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Stock Barang</TableHead>
            <TableHead>Tanggal Update</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tabelDatas.slice(0, 5).map((data) => (
            <TableRow
              key={data.id}
              className="hover:bg-gray-100 transition ease-in-out duration-10"
            >
              <TableCell className="font-medium">{data.id}</TableCell>
              <TableCell>{data.nama}</TableCell>
              <TableCell>{data.kategori}</TableCell>
              <TableCell>{data.stock}</TableCell>
              <TableCell>{data.tanggal.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end my-3">
        <Button>Lihat Selengkapnya</Button>
      </div>
    </section>
  );
};

export default TableStock;
