import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [emojiShowers, setEmojiShowers] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleReaction = (index, emoji) => {
    setEmojiShowers((prev) => [...prev, { index, emoji }]);
    setTimeout(() => {
      setEmojiShowers((prev) => prev.filter((e) => e.index !== index || e.emoji !== emoji));
    }, 4000); // Emoji shower for 4 seconds
  };

  return (
    <div className="blog-page">
      <h1>Experiences From Our Students In Different Parts</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <h2>{blog.title}</h2>
            {blog.banner && <img src={blog.banner} alt="Banner" />}
            <p>{blog.description}</p>
            <div className="links-list">
              {blog.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link} target="_blank" rel="noopener noreferrer">
                  Related Link {linkIndex + 1}
                </a>
              ))}
            </div>
            <div className="reactions">
              <div className="reaction" onClick={() => handleReaction(index, '😍')}>😍</div>
              <div className="reaction" onClick={() => handleReaction(index, '😂')}>😂</div>
              <div className="reaction" onClick={() => handleReaction(index, '👍')}>👍</div>
              <div className="reaction" onClick={() => handleReaction(index, '🎉')}>🎉</div>
            </div>
            {emojiShowers.filter((e) => e.index === index).map((e, i) => (
              <div key={i} className="emoji-shower">
                {Array.from({ length: 50 }).map((_, j) => (
                  <span key={j} style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh` }}>{e.emoji}</span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
