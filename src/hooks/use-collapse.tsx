'use client';
import { useSidebar } from '@/components/ui/sidebar';
import React from 'react';

export const LayoutOpen = ({ children }: { children: React.ReactNode }) => {
  const { open } = useSidebar();
  return (
    <main
      className={`pr-8 transition-all duration-150 ease-in-out ${
        open ? 'min-w-[83.2vw]' : 'min-w-[96.7vw]'
      }`}
    >
      {children}
    </main>
  );
};
