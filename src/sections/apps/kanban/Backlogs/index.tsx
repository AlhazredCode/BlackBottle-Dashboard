'use client';
import { useState, useEffect } from 'react';
import { NavItemType } from 'types/menu'; 
import { useGetProducts } from 'api/products';

export default function Backlogs() {
 
  const {products} = useGetProducts();


  return (
    <div>
      <h2 color='white'>ssDatos del Menú:</h2>
      <h2 color='white'>{JSON.stringify(products)}</h2>
    </div>
  );
}