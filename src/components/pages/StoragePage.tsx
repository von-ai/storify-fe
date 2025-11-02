import React from 'react';
import { Button } from '../ui/Button';
import { TabelStorage } from '../features/storage';

const Storagepage = () => {
  return (
    <section className="space-y-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Storage</h1>
        <Button>+ Tambah Barang</Button>
      </div>
      {/* //TODO Search Barang 
      
      //TODO Filter 
      
      //TODO Tabel data */}
      <TabelStorage />
    </section>
  );
};

export default Storagepage;
