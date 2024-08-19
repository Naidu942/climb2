import React, { useState } from 'react';
import './Blogs.css';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'How to Kickstart Your Startup',
      summary: 'Learn the essential steps to start your own business...',
      content: 'This is the full content of the first blog. It goes into detail about each step, offering tips and advice...',
      image: '/static/images/climb1.jpg', // Replace with your image URL
    },
    {
      id: 2,
      title: 'The Importance of Networking',
      summary: 'Why building a strong network is crucial for your success...',
      content: 'This is the full content of the second blog. It discusses the value of networking and how to effectively connect with others...',
      image: '/public/static/images/climb2.jpg', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Top 10 Entrepreneurial Mistakes',
      summary: 'Avoid these common pitfalls on your entrepreneurial journey...',
      content: 'This is the full content of the third blog. It highlights the most frequent mistakes made by entrepreneurs and how to avoid them...',
      image: '/public/static/images/climb3.jpg', // Replace with your image URL
    },
  ];

  return (
    <div className="blog-page">
      <h2>Blogs</h2>
      {selectedBlog ? (
        <div className="full-blog">
          <img src={selectedBlog.image} alt={selectedBlog.title} className="full-blog-image" />
          <h3>{selectedBlog.title}</h3>
          <p>{selectedBlog.content}</p>
          <button onClick={() => setSelectedBlog(null)}>Back to Blogs</button>
        </div>
      ) : (
        <div className="blog-list">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-summary" onClick={() => setSelectedBlog(blog)}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
