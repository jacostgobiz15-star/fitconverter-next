'use client';

import React from 'react';
import { getFoodSpecByName, type Unit } from '@/data/foods';

type Props = {
  food: string;
  unit: Unit;
  setUnit: (u: Unit) => void;
};

export default function UnitSelector({ food, unit, setUnit }: Props) {
  const measures = getFoodSpecByName(food).measures;
  const units = Object.keys(measures) as Unit[];

  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value as Unit)}
      className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2"
    >
      {units.map((u) => (
        <option key={u} value={u}>
          {u}
        </option>
      ))}
    </select>
  );
}
