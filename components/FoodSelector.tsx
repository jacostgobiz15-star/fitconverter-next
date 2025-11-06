'use client';

import React from 'react';
import { FOOD_GROUPS } from '@/data/foods';

type Props = {
  food: string;
  setFood: (f: string) => void;
};

export default function FoodSelector({ food, setFood }: Props) {
  return (
    <select
      value={food}
      onChange={(e) => setFood(e.target.value)}
      className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
    >
      {FOOD_GROUPS.map((group) => (
        <optgroup
          key={group.label}
          label={group.label}
          className="text-gray-700 font-semibold"
          // ✅ Forces visible group label color
          style={{ color: '#222', fontWeight: 600 }}
        >
          {group.items.map((name) => (
            <option
              key={name}
              value={name}
              className="text-gray-900"
              // ✅ Ensures readable option text color
              style={{ color: '#111' }}
            >
              {name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}
