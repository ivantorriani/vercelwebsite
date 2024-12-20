'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Comment from '../../components/Comment';

// Define the expected structure for the Blog data
interface IComment {
  user: string;
  comment: string;
  time: string;
}

interface Blog {
  title: string;
  description: string;
  image: string;
  date: string;
  comments?: IComment[];
}

async function getBlog(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${slug}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

// Remove the manual typing of `params` here, as Next.js automatically infers it
export default function BlogPost({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const [user, setUser] = useState('');
  const [commentText, setCommentText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch Blog Post and Comments
  useEffect(() => {
    async function fetchData() {
      const fetchedBlog = await getBlog(params.slug);
      if (!fetchedBlog) {
        notFound();
      }
      setBlog(fetchedBlog);
      setComments(fetchedBlog.comments || []);
    }
    fetchData();
  }, [params.slug]);

  // Handle Comment Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !commentText) return;

    setIsSubmitting(true);

    const newComment = {
      user,
      comment: commentText,
      time: new Date().toISOString(),
    };

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${params.slug}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    });

    setComments((prev) => [...prev, newComment]);
    setUser('');
    setCommentText('');
    setIsSubmitting(false);
  };

  if (!blog) return null;

  return (
    <div>
      {/* Blog Content */}
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      {blog.image && (
        <Image 
          src={blog.image} 
          alt={blog.title} 
          width={500} // Specify the width
          height={300} // Specify the height
        />
      )}
      <p>{new Date(blog.date).toLocaleDateString()}</p>

      {/* Comments Section */}
      <div>
        <h2>Comments</h2>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            comment={{ user: comment.user, comment: comment.comment, time: new Date(comment.time) }}
          />
        ))}

        {/* Add Comment Form */}
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Your comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Add Comment'}
          </button>
        </form>
      </div>
    </div>
  );
}
