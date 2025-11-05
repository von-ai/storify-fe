import { ColumnDef } from '@tanstack/react-table';
import { TabelTypes } from '@/types/dashboard-types';

export const columns: ColumnDef<TabelTypes>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'nama',
    header: 'Nama Barang',
  },
  {
    accessorKey: 'kategori',
    header: 'Category',
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
  },
  {
    accessorKey: 'tanggal',
    header: 'Tanggal Update',
  },
  {
    accessorKey: 'action',
    header: 'Action',
  },
];
