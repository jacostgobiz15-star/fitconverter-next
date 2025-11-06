import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Fitness & Nutrition Blog | FitConverter.net",
  description:
    "Expert fitness and nutrition tips, conversion guides, meal prep advice, and macro tracking strategies.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-24 pb-16 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fitness & Nutrition Blog
          </h1>
          <p className="text-xl text-gray-600">
            Expert advice to optimize your nutrition and reach your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* ✅ Restored Brand Gradient Header */}
              <div className="h-48 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 flex items-center justify-center">
                <i className="fas fa-utensils text-white text-6xl opacity-90"></i>
              </div>

              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center mb-3 gap-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.description}
                </p>

                {/* Date + Link */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
