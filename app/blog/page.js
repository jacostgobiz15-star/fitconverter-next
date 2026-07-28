import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const BlogPage = () => {
  const posts = getPostList(); // Function to retrieve posts
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getPostList();
  return { props: { posts }};
}

async function getPostList() {
  // Logic to read posts from a content directory
  const postsDir = path.join(process.cwd(), 'src/posts');
  const filenames = fs.readdirSync(postsDir);
  return filenames.map(filename => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return { title: data.title, slug: filename.replace(/\.md$/, ''), date: data.date };
  });
}

export default BlogPage;