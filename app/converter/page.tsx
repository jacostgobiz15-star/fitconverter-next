'use client';

import React from 'react';
import { FOOD_GROUPS, getFoodSpecByName, type Unit } from '@/data/foods';
import FoodSelector from '@/components/FoodSelector';
import UnitSelector from '@/components/UnitSelector';

function format(n: number, d = 1) {
  return Number(n.toFixed(d));
}

export default function ConverterPage() {
  const [food, setFood] = React.useState<string>(FOOD_GROUPS[0].items[0]);
  const [unit, setUnit] = React.useState<Unit>('g');
  const [amount, setAmount] = React.useState<number>(1);

  const spec = getFoodSpecByName(food);
  const gramsPerUnit = spec.measures[unit] ?? 0;
  const grams = format(amount * gramsPerUnit, 0);

  const scale = grams / 100;
  const calories = format(spec.per100g.kcal * scale, 0);
  const protein = format(spec.per100g.protein * scale, 1);
  const carbs = format(spec.per100g.carbs * scale, 1);
  const fat = format(spec.per100g.fat * scale, 1);

  function plural(u: Unit) {
    return amount === 1 ? u : (u === 'g' ? 'g' : u + 's');
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-4 pb-8">

      <h1 className="text-2xl font-semibold mb-6">Fitness &amp; Nutrition Converter</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Food</label>
          <FoodSelector food={food} setFood={setFood} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Unit</label>
          <UnitSelector food={food} unit={unit} setUnit={setUnit} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            min={0}
            step="0.1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2"
          />
        </div>
      </section>

      <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Conversion Results</h2>

        {/* ✅ MiniMax-style explanatory line */}
        <p className="mb-4 text-gray-800">
          <span className="font-semibold">{amount} {plural(unit)}</span> of{' '}
          <span className="font-semibold">{spec.name}</span> ={' '}
          <span className="font-semibold">{grams} g</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="text-xs uppercase text-gray-500">Calories</div>
            <div className="mt-1 text-2xl font-semibold text-red-600">{calories}</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="text-xs uppercase text-gray-500">Protein</div>
            <div className="mt-1 text-2xl font-semibold text-green-600">{protein}g</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="text-xs uppercase text-gray-500">Carbs</div>
            <div className="mt-1 text-2xl font-semibold text-blue-600">{carbs}g</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="text-xs uppercase text-gray-500">Fat</div>
            <div className="mt-1 text-2xl font-semibold text-amber-600">{fat}g</div>
          </div>
        </div>
      </div>
    </main>
  );
}
