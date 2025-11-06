'use client';

interface AmountInputProps {
  amount: number;
  onChange: (amount: number) => void;
}

export default function AmountInput({ amount, onChange }: AmountInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Amount
      </label>
      <input
        type="number"
        value={amount}
        min={0}
        step={0.1}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full p-3 rounded-xl border border-gray-300 shadow-sm bg-white text-gray-800 focus:border-green-500 focus:ring-green-500"
      />
    </div>
  );
}
