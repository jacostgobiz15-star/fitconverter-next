import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  // ✅ If post doesn't exist, show 404 page
  if (!post) {
    return notFound();
  }

  return (
    <main className="pt-24 pb-16 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="text-green-600 hover:text-green-700 font-semibold mb-6 inline-block"
        >
          ← Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>{post.date}</span>
          {post.readTime && <span className="ml-4">{post.readTime}</span>}
        </div>

        {/* ✅ Blog Article Content Styled */}
        <article
          className="prose prose-gray max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}
