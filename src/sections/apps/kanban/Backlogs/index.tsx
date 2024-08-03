'use client';
import { useState, useEffect } from 'react';
import { NavItemType } from 'types/menu'; 
import menuItem from 'menu-items';

export default function Backlogs() {
  const [formattedMenu, setFormattedMenu] = useState('');

  useEffect(() => {
    // Accede a menuItem.items directamente aquí
    if (menuItem.items.length > 0) {
      setFormattedMenu(JSON.stringify(menuItem.items, null, 2));
    }
  }, []); // Vacío para que se ejecute solo una vez al montar el componente

  return (
    <div>
      <h2>Datos del Menú:</h2>
      <pre>{formattedMenu}</pre>
    </div>
  );
}