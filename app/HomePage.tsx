// app/HomePage.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { FOOD_GROUPS, getFoodSpecByName, Unit } from './data/foods';

// ---- Types (avoids TS “implicit any” warnings)
type FoodGroup = { label: string; items: string[] };

const ALL_FOODS: string[] = (FOOD_GROUPS as FoodGroup[]).flatMap(
  (g: FoodGroup) => g.items
);

// Simple fuzzy matcher so your “Popular Foods” buttons work
function pickFoodByAlias(...aliases: string[]): string {
  const hay = ALL_FOODS.map((s) => s.toLowerCase());
  for (const a of aliases) {
    const needle = a.toLowerCase();
    const idx = hay.findIndex((s) => s.includes(needle));
    if (idx !== -1) return ALL_FOODS[idx];
  }
  return ALL_FOODS[0] || '';
}

export default function HomePage() {
  // State
  const [selectedFood, setSelectedFood] = useState<string>('');
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<Unit>('cup');

  // Default to Protein Powder if present
  useEffect(() => {
    const initial =
      pickFoodByAlias('protein powder', 'whey', 'casein', 'soy', 'pea') ||
      ALL_FOODS[0] ||
      '';
    setSelectedFood(initial);
  }, []);

  // Current spec from DB
  const spec = useMemo(
    () => (selectedFood ? getFoodSpecByName(selectedFood) : null),
    [selectedFood]
  );

  // Units for this food
  const availableUnits: Unit[] = useMemo(() => {
    if (!spec) return [];
    return Object.keys(spec.measures) as Unit[];
  }, [spec]);

  // Ensure unit exists for this food
  useEffect(() => {
    if (!spec) return;
    if (!availableUnits.includes(unit)) setUnit(availableUnits[0] ?? 'g');
  }, [spec, availableUnits, unit]);

  // Conversions + nutrition
  const grams = useMemo(() => {
    if (!spec) return 0;
    const gramsPerUnit = spec.measures[unit] ?? 100;
    return Math.max(0, Math.round((amount || 0) * gramsPerUnit));
  }, [spec, unit, amount]);

  const ounces = useMemo(
    () => (grams ? Math.round((grams / 28.35) * 100) / 100 : 0),
    [grams]
  );

  const nutrition = useMemo(() => {
    if (!spec || grams <= 0) return null;
    const m = grams / 100;
    return {
      kcal: Math.round(spec.per100g.kcal * m),
      protein: Math.round(spec.per100g.protein * m * 10) / 10,
      carbs: Math.round(spec.per100g.carbs * m * 10) / 10,
      fat: Math.round(spec.per100g.fat * m * 10) / 10,
    };
  }, [spec, grams]);

  const scrollToConverter = () =>
    document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const popular = [
    { label: 'Protein Powder', aliases: ['protein powder', 'whey', 'casein', 'soy', 'pea'] },
    { label: 'Oats', aliases: ['oats'] },
    { label: 'Rice', aliases: ['rice (cooked)', 'rice'] },
    { label: 'Chicken Breast', aliases: ['chicken breast (cooked)', 'chicken breast', 'chicken'] },
    { label: 'Peanut Butter', aliases: ['peanut butter'] },
    { label: 'Olive Oil', aliases: ['olive oil'] },
  ];

  return (
    <>
      {/* Global helpers you used before */}
      <style jsx global>{`
        .gradient-bg {
          background: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%);
        }
        .gradient-text {
          background: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-hover {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .sticky-nav {
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.95);
        }
        .food-button {
          transition: all 0.2s ease-in-out;
        }
        .food-button:hover {
          transform: scale(1.02);
        }
        .food-button.active {
          background: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%);
          color: white;
        }
        .result-card {
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.05) 0%,
            rgba(59, 130, 246, 0.05) 100%
          );
        }
      `}</style>

      {/* ======= PAGE ======= */}
      <div className="bg-white text-gray-800 min-h-screen">
        {/* Nav */}
        <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 py-4 px-6 sticky-nav border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <i className="fas fa-dumbbell text-2xl gradient-text" />
              <span className="text-2xl font-bold gradient-text">FitConverter.net</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a onClick={scrollToConverter} className="font-medium text-gray-700 hover:text-green-600 transition-colors cursor-pointer">Home</a>
              <a onClick={scrollToConverter} className="font-medium text-gray-700 hover:text-green-600 transition-colors cursor-pointer">Converter</a>
              <a href="#blog" className="font-medium text-gray-700 hover:text-green-600 transition-colors">Blog</a>
              <a href="#about" className="font-medium text-gray-700 hover:text-green-600 transition-colors">About</a>
            </div>
            <button className="md:hidden text-gray-700">
              <i className="fas fa-bars text-xl" />
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section id="home" className="pt-24 pb-16 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Stop Guessing Your Macros.
                <br />
                <span className="gradient-text">Convert Cups → Grams → Calories</span> Instantly.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The fastest way to measure protein powder, oats, rice, peanut butter, and more. Get precise macro breakdowns in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={scrollToConverter} className="gradient-bg text-white font-semibold py-4 px-8 rounded-2xl text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  <i className="fas fa-calculator mr-2" />
                  Try the Converter
                </button>
                <button className="border-2 border-green-600 text-green-600 font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-green-50 transition-all duration-200">
                  <i className="fas fa-play mr-2" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose FitConverter.net?</h2>
              <p className="text-xl text-gray-600">Professional-grade nutrition tools for serious fitness enthusiasts</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-sync-alt text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Conversions</h3>
                <p className="text-gray-600 text-lg">Convert between cups, scoops, tablespoons, grams, ounces, and milliliters instantly.</p>
              </div>

              <div className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-chart-pie text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Macro Breakdown</h3>
                <p className="text-gray-600 text-lg">Get detailed protein, carbs, fat, and calories for every item.</p>
              </div>

              <div className="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-mobile-alt text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Friendly</h3>
                <p className="text-gray-600 text-lg">Use it at home, in the gym, or at the grocery store.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Converter */}
        <section id="converter" className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitness &amp; Nutrition Converter</h2>
              <p className="text-xl text-gray-600">Select a food item and measurement to get instant conversions and macro breakdown</p>
            </div>

            {/* Popular Foods */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Popular Foods</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {popular.map(({ label, aliases }) => {
                  const target = pickFoodByAlias(...aliases);
                  const active = selectedFood === target;
                  return (
                    <button
                      key={label}
                      onClick={() => setSelectedFood(target)}
                      className={`food-button px-6 py-3 rounded-xl font-medium border-2 border-green-200 text-gray-700 hover:border-green-400 ${active ? 'active' : ''}`}
                      title={target || label}
                    >
                      <i className="fas fa-circle mr-2" /> {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Panel */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Input Measurements</h3>

                <div className="space-y-6">
                  {/* Food select */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Selected Food</label>
                    <select
                      id="foodSelect"
                      value={selectedFood}
                      onChange={(e) => setSelectedFood(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                    >
                      <option value="">Choose a food…</option>
                      {(FOOD_GROUPS as FoodGroup[]).map((group: FoodGroup) => (
                        <optgroup key={group.label} label={group.label}>
                          {group.items.map((name: string) => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Amount + Unit */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
                      <input
                        type="number"
                        min={0}
                        step="0.1"
                        value={Number.isFinite(amount) ? amount : 0}
                        onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Unit</label>
                      <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value as Unit)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
                      >
                        {availableUnits.map((u) => (
                          <option key={u} value={u}>
                            {u === 'g' ? 'grams' : u === 'tbsp' ? 'tablespoon' : u === 'tsp' ? 'teaspoon' : u}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="result-card p-8 rounded-2xl border-2 border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Conversion Results</h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-sm text-gray-600">Grams</div>
                      <div id="gramsResult" className="text-2xl font-bold text-green-600">{grams}g</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-sm text-gray-600">Ounces</div>
                      <div id="ouncesResult" className="text-2xl font-bold text-blue-600">{ounces.toFixed(2)} oz</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Nutrition Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Calories</div>
                        <div id="caloriesResult" className="text-xl font-bold text-red-500">
                          {nutrition ? nutrition.kcal : 0}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Protein</div>
                        <div id="proteinResult" className="text-xl font-bold text-green-600">
                          {nutrition ? `${nutrition.protein}g` : '0g'}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Carbs</div>
                        <div id="carbsResult" className="text-xl font-bold text-blue-600">
                          {nutrition ? `${nutrition.carbs}g` : '0g'}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Fat</div>
                        <div id="fatResult" className="text-xl font-bold text-purple-600">
                          {nutrition ? `${nutrition.fat}g` : '0g'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
