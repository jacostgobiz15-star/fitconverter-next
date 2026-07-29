import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const PostPage = ({ content, title, date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'src/posts');
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/posts', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return { props: { content, title: data.title, date: data.date }};
}

export default PostPage;