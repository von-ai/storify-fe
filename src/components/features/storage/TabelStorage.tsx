'use client';
import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/Button';
import { tabelDatas } from '@/data/tabel-dashboard';
import { columns } from '@/lib/colums';

interface TabelStorageProps {
  storageKey: string;
}

const TabelStorage = () => {
  // const TabelStorage: React.FC<TabelStorageProps> = ({ storageKey }) => {
  const table = useReactTable({
    data: tabelDatas,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <section>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => {
                if (cell.column.columnDef.header === 'Action') {
                  return (
                    <TableCell key={cell.id}>
                      <Button
                        className="mx-1 hover:bg-gray-500 hover:text-white transition ease-in-out duration-300"
                        variant="ghost"
                      >
                        Edit
                      </Button>
                      <Button
                        className="mx-1 hover:bg-gray-500 hover:text-white transition ease-in-out duration-300"
                        variant="secondary"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  );
                }

                return (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TabelStorage;
