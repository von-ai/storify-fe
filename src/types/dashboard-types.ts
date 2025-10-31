import { LucideIcon } from 'lucide-react';

export interface DashboardCardProps {
  icon: LucideIcon;
  quantity: number;
  text: string;
}

export type TabelTypes = {
  id: string;
  nama: string;
  kategori: string;
  stock: number;
  tanggal: Date;
};
