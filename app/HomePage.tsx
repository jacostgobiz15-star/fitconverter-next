// app/HomePage.tsx
export default function HomePage() {
  return (
    <div
      // ⬇️ paste ONLY the <body>…</body> inner HTML between the backticks
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitConverter.net - Stop Guessing Your Macros | Fitness & Nutrition Converter</title>
    <meta name="description" content="Convert cups to grams to calories instantly. The fastest way to measure protein powder, oats, rice, peanut butter, and more. Free fitness nutrition converter tool.">
    <meta name="keywords" content="fitness converter, nutrition calculator, protein powder grams, cups to grams, macro calculator, food conversion, fitness nutrition">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
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
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
        }
    </style>
</head>
<body class="bg-white text-gray-800">
    <!-- Navigation -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 py-4 px-6 sticky-nav border-b border-gray-100">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <i class="fas fa-dumbbell text-2xl gradient-text"></i>
                <span class="text-2xl font-bold gradient-text">FitConverter.net</span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
                <a href="#home" class="font-medium text-gray-700 hover:text-green-600 transition-colors">Home</a>
                <a href="#converter" class="font-medium text-gray-700 hover:text-green-600 transition-colors">Converter</a>
                <a href="#blog" class="font-medium text-gray-700 hover:text-green-600 transition-colors">Blog</a>
                <a href="#about" class="font-medium text-gray-700 hover:text-green-600 transition-colors">About</a>
            </div>
            <button class="md:hidden text-gray-700">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-24 pb-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Stop Guessing Your Macros.<br>
                    <span class="gradient-text">Convert Cups → Grams → Calories</span> Instantly.
                </h1>
                <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    The fastest way to measure protein powder, oats, rice, peanut butter, and more. Get precise macro breakdowns in seconds.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="scrollToConverter()" class="gradient-bg text-white font-semibold py-4 px-8 rounded-2xl text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                        <i class="fas fa-calculator mr-2"></i>
                        Try the Converter
                    </button>
                    <button class="border-2 border-green-600 text-green-600 font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-green-50 transition-all duration-200">
                        <i class="fas fa-play mr-2"></i>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose FitConverter.net?</h2>
                <p class="text-xl text-gray-600">Professional-grade nutrition tools for serious fitness enthusiasts</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-sync-alt text-2xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Instant Conversions</h3>
                    <p class="text-gray-600 text-lg">Convert between cups, scoops, tablespoons, grams, ounces, and milliliters instantly. No more guesswork or manual calculations.</p>
                </div>
                
                <div class="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-chart-pie text-2xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Macro Breakdown</h3>
                    <p class="text-gray-600 text-lg">Get detailed protein, carbs, fat, and calorie information for every food item. Perfect for tracking macros and meal planning.</p>
                </div>
                
                <div class="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                        <i class="fas fa-mobile-alt text-2xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Mobile Friendly</h3>
                    <p class="text-gray-600 text-lg">Works perfectly on any device. Use it at home, in the gym, or at the grocery store. Fast, simple, and always accessible.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Converter Tool -->
    <section id="converter" class="py-16 px-6 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitness & Nutrition Converter</h2>
                <p class="text-xl text-gray-600">Select a food item and measurement to get instant conversions and macro breakdown</p>
            </div>

            <!-- Quick Food Selection -->
            <div class="mb-8">
                <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">Popular Foods</h3>
                <div class="flex flex-wrap justify-center gap-3">
                    <button onclick="selectFood('protein-powder')" class="food-button px-6 py-3 rounded-xl font-medium border-2 border-green-200 text-gray-700 hover:border-green-400">
                        <i class="fas fa-prescription-bottle mr-2"></i>Protein Powder
                    </button>
                    <button onclick="selectFood('oats')" class="food-button px-6 py-3 rounded-xl font-medium border-2 border-green-200 text-gray-700 hover:border-green-400">
                        <i class="fas fa-seedling mr-2"></i>Oats
                    </button>
                    <button onclick="selectFood('rice')" class="food-button px-6 py-3 rounded-xl font-medium border-2 border-green-200 text-gray-700 hover:border-green-400">
                        <i class="fas fa-rice mr-2"></i>Rice
                    </button>
                    <button onclick="selectFood('chicken')" class="food-button px-6 py-3 rounded-xl font-medium border-2 border-green-200 text-gray-700 hover:border-green-400">
                        <i class="fas fa-drumstick-bite mr-2"></i>Chicken Breast
                    </button>
                    <button onclick="selectFood('peanut-butter')" class="food-button px-6 py-3 rounded-xl font-medium border-2 border-green-200 text-gray-700 hover:border-green-400">
                        <i class="fas fa-jar mr-2"></i>Peanut Butter
                    </button>
                    <button onclick="selectFood('olive-oil')" class="food-button px-6 py-3 rounded-xl font-medium border-2 border-green-200 text-gray-700 hover:border-green-400">
                        <i class="fas fa-tint mr-2"></i>Olive Oil
                    </button>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Input Panel -->
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Input Measurements</h3>
                    
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Selected Food</label>
                            <select id="foodSelect" onchange="updateConversion()" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg">
                                <option value="protein-powder">Protein Powder</option>
                                <option value="oats">Oats (Dry)</option>
                                <option value="rice">Rice (Cooked)</option>
                                <option value="chicken">Chicken Breast (Cooked)</option>
                                <option value="peanut-butter">Peanut Butter</option>
                                <option value="olive-oil">Olive Oil</option>
                            </select>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
                                <input type="number" id="amountInput" value="1" min="0" step="0.1" onchange="updateConversion()" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-2">Unit</label>
                                <select id="unitSelect" onchange="updateConversion()" class="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg">
                                    <option value="cup">Cup</option>
                                    <option value="tbsp">Tablespoon</option>
                                    <option value="tsp">Teaspoon</option>
                                    <option value="scoop">Scoop (30g)</option>
                                    <option value="oz">Ounce</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Results Panel -->
                <div class="result-card p-8 rounded-2xl border-2 border-green-100">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Conversion Results</h3>
                    
                    <div class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white p-4 rounded-xl">
                                <div class="text-sm text-gray-600">Grams</div>
                                <div id="gramsResult" class="text-2xl font-bold text-green-600">30g</div>
                            </div>
                            <div class="bg-white p-4 rounded-xl">
                                <div class="text-sm text-gray-600">Ounces</div>
                                <div id="ouncesResult" class="text-2xl font-bold text-blue-600">1.06 oz</div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl">
                            <h4 class="text-lg font-semibold text-gray-900 mb-4">Nutrition Information</h4>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <div class="text-sm text-gray-600">Calories</div>
                                    <div id="caloriesResult" class="text-xl font-bold text-red-500">120</div>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-600">Protein</div>
                                    <div id="proteinResult" class="text-xl font-bold text-green-600">24g</div>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-600">Carbs</div>
                                    <div id="carbsResult" class="text-xl font-bold text-blue-600">3g</div>
                                </div>
                                <div>
                                    <div class="text-sm text-gray-600">Fat</div>
                                    <div id="fatResult" class="text-xl font-bold text-purple-600">2g</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Ad Banner -->
    <div class="py-8 px-6 bg-gray-100">
        <div class="max-w-4xl mx-auto text-center">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <p class="text-sm text-gray-500 mb-2">Advertisement</p>
                <div class="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">🏋️ Premium Kitchen Scale - 40% Off!</h3>
                    <p class="text-gray-600 mb-4">Get precise measurements every time with our recommended digital kitchen scale. Perfect for fitness enthusiasts!</p>
                    <button class="gradient-bg text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all">
                        Shop Now - $29.99
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Newsletter Signup -->
    <section class="py-16 px-6 gradient-bg">
        <div class="max-w-4xl mx-auto text-center">
            <div class="text-white">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Get Your Free Conversion Chart</h2>
                <p class="text-xl mb-8 opacity-90">Download our comprehensive fitness food conversion chart and join 10,000+ fitness enthusiasts getting weekly nutrition tips.</p>
                
                <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="Enter your email" class="flex-1 p-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30">
                    <button class="bg-white text-green-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                        Get Free Chart
                    </button>
                </div>
                
                <p class="text-sm opacity-75 mt-4">No spam, unsubscribe anytime. We respect your privacy.</p>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="py-16 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Fitness & Nutrition Tips</h2>
                <p class="text-xl text-gray-600">Expert advice to optimize your nutrition and reach your fitness goals</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Featured Blog Post -->
                <article class="md:col-span-2 card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div class="h-48 bg-gradient-to-r from-green-400 to-blue-500 relative">
                        <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                            <i class="fas fa-prescription-bottle text-6xl text-white"></i>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="flex items-center mb-4">
                            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Protein</span>
                            <span class="text-gray-500 text-sm ml-4">5 min read</span>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Protein Powder Scoop to Grams Conversion (With Examples)</h3>
                        <p class="text-gray-600 text-lg mb-6">Learn exactly how much protein powder you're consuming. Different brands have different scoop sizes - here's how to measure accurately every time.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                    FC
                                </div>
                                <div class="ml-3">
                                    <div class="text-sm font-medium text-gray-900">FitConverter Team</div>
                                    <div class="text-sm text-gray-500">Dec 15, 2023</div>
                                </div>
                            </div>
                            <button onclick="scrollToConverter()" class="text-green-600 font-semibold hover:text-green-700 transition-colors">
                                Try Converter <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                </article>

                <!-- Sidebar Posts -->
                <div class="space-y-6">
                    <article class="card-hover bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div class="flex items-center mb-3">
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Nutrition</span>
                        </div>
                        <h4 class="text-lg font-bold text-gray-900 mb-2">Oats Nutrition: Cups vs Grams</h4>
                        <p class="text-gray-600 text-sm mb-3">Why weighing oats is more accurate than using cup measurements for macro tracking.</p>
                        <div class="text-xs text-gray-500">3 min read • Dec 12, 2023</div>
                    </article>

                    <article class="card-hover bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div class="flex items-center mb-3">
                            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Meal Prep</span>
                        </div>
                        <h4 class="text-lg font-bold text-gray-900 mb-2">Rice Portions for Muscle Gain</h4>
                        <p class="text-gray-600 text-sm mb-3">Calculate perfect rice portions for your bulking or cutting phases.</p>
                        <div class="text-xs text-gray-500">4 min read • Dec 10, 2023</div>
                    </article>

                    <article class="card-hover bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div class="flex items-center mb-3">
                            <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Tips</span>
                        </div>
                        <h4 class="text-lg font-bold text-gray-900 mb-2">Peanut Butter Measurements</h4>
                        <p class="text-gray-600 text-sm mb-3">Stop eyeballing your peanut butter servings. Here's how to measure it properly.</p>
                        <div class="text-xs text-gray-500">2 min read • Dec 8, 2023</div>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 px-6 bg-gray-50">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About FitConverter.net</h2>
            <p class="text-xl text-gray-600 mb-8">
                We're passionate about making fitness nutrition simple and accurate. No more guessing games with your macros - 
                get precise measurements and nutritional information for all your favorite fitness foods.
            </p>
            <div class="grid md:grid-cols-3 gap-8 mt-12">
                <div class="text-center">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-users text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">10,000+ Users</h3>
                    <p class="text-gray-600">Trusted by fitness enthusiasts worldwide</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-calculator text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">50+ Foods</h3>
                    <p class="text-gray-600">Comprehensive database of fitness foods</p>
                </div>
                <div class="text-center">
                    <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-mobile-alt text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">100% Free</h3>
                    <p class="text-gray-600">Always free, no hidden costs</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="fas fa-dumbbell text-2xl text-green-500"></i>
                        <span class="text-2xl font-bold">FitConverter.net</span>
                    </div>
                    <p class="text-gray-400 mb-6 text-lg">
                        The most accurate fitness and nutrition converter tool. Stop guessing your macros and start measuring with precision.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#converter" class="text-gray-400 hover:text-white transition-colors">Converter Tool</a></li>
                        <li><a href="#blog" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Legal</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">
                    © 2023 FitConverter.net - Fitness Made Simple. All rights reserved.
                </p>
            </div>
        </div>
    </footer>

    <script>
        // Food database with nutrition info per 100g
        const foodDatabase = {
            'protein-powder': {
                name: 'Protein Powder',
                conversions: {
                    'cup': 120, // grams per cup
                    'tbsp': 7.5,
                    'tsp': 2.5,
                    'scoop': 30,
                    'oz': 28.35
                },
                nutrition: { // per 100g
                    calories: 400,
                    protein: 80,
                    carbs: 10,
                    fat: 6
                }
            },
            'oats': {
                name: 'Oats (Dry)',
                conversions: {
                    'cup': 80,
                    'tbsp': 5,
                    'tsp': 1.7,
                    'scoop': 30,
                    'oz': 28.35
                },
                nutrition: {
                    calories: 389,
                    protein: 16.9,
                    carbs: 66.3,
                    fat: 6.9
                }
            },
            'rice': {
                name: 'Rice (Cooked)',
                conversions: {
                    'cup': 195,
                    'tbsp': 12,
                    'tsp': 4,
                    'scoop': 30,
                    'oz': 28.35
                },
                nutrition: {
                    calories: 130,
                    protein: 2.7,
                    carbs: 28,
                    fat: 0.3
                }
            },
            'chicken': {
                name: 'Chicken Breast (Cooked)',
                conversions: {
                    'cup': 140,
                    'tbsp': 9,
                    'tsp': 3,
                    'scoop': 30,
                    'oz': 28.35
                },
                nutrition: {
                    calories: 165,
                    protein: 31,
                    carbs: 0,
                    fat: 3.6
                }
            },
            'peanut-butter': {
                name: 'Peanut Butter',
                conversions: {
                    'cup': 240,
                    'tbsp': 16,
                    'tsp': 5.3,
                    'scoop': 30,
                    'oz': 28.35
                },
                nutrition: {
                    calories: 588,
                    protein: 25.8,
                    carbs: 20,
                    fat: 50
                }
            },
            'olive-oil': {
                name: 'Olive Oil',
                conversions: {
                    'cup': 216,
                    'tbsp': 13.5,
                    'tsp': 4.5,
                    'scoop': 30,
                    'oz': 28.35
                },
                nutrition: {
                    calories: 884,
                    protein: 0,
                    carbs: 0,
                    fat: 100
                }
            }
        };

        function selectFood(foodKey) {
            // Update dropdown
            document.getElementById('foodSelect').value = foodKey;
            
            // Update button styles
            document.querySelectorAll('.food-button').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Update conversion
            updateConversion();
        }

        function updateConversion() {
            const foodKey = document.getElementById('foodSelect').value;
            const amount = parseFloat(document.getElementById('amountInput').value) || 0;
            const unit = document.getElementById('unitSelect').value;
            
            const food = foodDatabase[foodKey];
            
            // Convert to grams
            const gramsPerUnit = food.conversions[unit];
            const totalGrams = amount * gramsPerUnit;
            
            // Convert to ounces
            const ounces = totalGrams / 28.35;
            
            // Calculate nutrition based on grams
            const multiplier = totalGrams / 100;
            const calories = Math.round(food.nutrition.calories * multiplier);
            const protein = Math.round(food.nutrition.protein * multiplier * 10) / 10;
            const carbs = Math.round(food.nutrition.carbs * multiplier * 10) / 10;
            const fat = Math.round(food.nutrition.fat * multiplier * 10) / 10;
            
            // Update display
            document.getElementById('gramsResult').textContent = Math.round(totalGrams * 10) / 10 + 'g';
            document.getElementById('ouncesResult').textContent = Math.round(ounces * 100) / 100 + ' oz';
            document.getElementById('caloriesResult').textContent = calories;
            document.getElementById('proteinResult').textContent = protein + 'g';
            document.getElementById('carbsResult').textContent = carbs + 'g';
            document.getElementById('fatResult').textContent = fat + 'g';
        }

        function scrollToConverter() {
            document.getElementById('converter').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize with default values
        window.addEventListener('DOMContentLoaded', function() {
            selectFood('protein-powder');
            updateConversion();
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });
    </script>
</body>
</html>
    <script id="html_badge_script1">
        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDo2Mmwu2C2vqDGtmtQAGaUX1d7sd02Rxva7UBX8RghRl6g3fK%2BUJ2sFXR3K5%2B5M%2Fa%2Bq9FJn8gQDjycXcGhjeO3Lk6KnIK6SLviLyDkLje4WWGraVxWflIQdVZsxLmV5c4KMAhsmzp2BThGZxLL1ACQPMfbWTJy%2BKQhslmcGkSc2YfcZkO8XqPwwy0ha2Klr7%2BFvtx6Owcqvvw0gpdtc5fMEgEIbJyL4qbcf2dMiciPF6pnhEsY6Durv67wIXF0zZVmkC9ojRTlb9IPhRqFeYYYU8b9bVvK1kGc2CU6wWrkyNtDZvk%2B4jWCfXpk3tCWS80xtEdzBCgswMYfP7d7dkfLT4OGCDHyLuWXOV5mLL5xvL%2BAxr%2FJGu3fyWl50TW62VKfjUhSS%2FHd9Z7Pw43djEzTqiagu8RqZsnBIPlUYh%2FUCY8bymaA0D4MLb8LkR4DPGvUAADlApK3%2FW3swCzSxY3a2IFU6B0THPi1nl26LMpuoUJhOflRtpTjN8qa8KhgRn2NpwWXNADFsL1vp2PCgWFc8%3D";
        window.__genspark_locale = "en-US";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDo2Mmwu2C2vqDGtmtQAGaUX1d7sd02Rxva7UBX8RghRl6g3fK+UJ2sFXR3K5+5M/a+q9FJn8gQDjycXcGhjeO3Lk6KnIK6SLviLyDkLje4WWGraVxWflIQdVZsxLmV5c4KMAhsmzp2BThGZxLL1ACQPMfbWTJy+KQhslmcGkSc2YfcZkO8XqPwwy0ha2Klr7+Fvtx6Owcqvvw0gpdtc5fMEgEIbJyL4qbcf2dMiciPF6pnhEsY6Durv67wIXF0zZVmkC9ojRTlb9IPhRqFeYYYU8b9bVvK1kGc2CU6wWrkyNtDZvk+4jWCfXpk3tCWS80xtEdzBCgswMYfP7d7dkfLT4OGCDHyLuWXOV5mLL5xvL+Axr/JGu3fyWl50TW62VKfjUhSS/Hd9Z7Pw43djEzTqiagu8RqZsnBIPlUYh/UCY8bymaA0D4MLb8LkR4DPGvUAADlApK3/W3swCzSxY3a2IFU6B0THPi1nl26LMpuoUJhOflRtpTjN8qa8KhgRn2NpwWXNADFsL1vp2PCgWFc8=";
    </script>
    
        <script id="html_badge_script2" src="https://www.genspark.ai/html_badge.js"></script>
        
    <script id="html_notice_dialog_script" src="https://www.genspark.ai/notice_dialog.js"></script>
        `,
      }}
    />
  );
}
