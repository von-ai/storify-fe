import React from 'react';
import { DashboardCardProps } from '@/types/dashboard-types';

const Card = ({ icon: Icon, quantity, text }: DashboardCardProps) => {
  return (
    <section className="w-auto h-auto bg-white text-center py-5 px-10 space-y-3 shadow rounded-2xl hover:">
      <div className="flex justify-center">
        <Icon width={50} height={50} />
      </div>
      <div className="font-bold text-3xl">{quantity}</div>
      <div className="font-semibold text-xl">{text}</div>
    </section>
  );
};

export default Card;
