// app/layout.tsx
export const metadata = {
  title: 'FitConverter.net - Stop Guessing Your Macros | Fitness & Nutrition Converter',
  description:
    'Convert cups to grams to calories instantly. The fastest way to measure protein powder, oats, rice, peanut butter, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Tailwind via CDN to match your current design instantly */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        {/* ✅ Font Awesome icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
