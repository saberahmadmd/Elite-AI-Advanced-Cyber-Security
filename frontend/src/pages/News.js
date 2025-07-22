import React from 'react';
import './News.css';

const News = () => {
  const newsItems = [
    {
      title: "Elite AI Unveils Next-Gen Threat Detection",
      date: "July 15, 2025",
      category: "Press Release",
      excerpt: "Our new AI threat detection system achieves 99.99% accuracy in identifying zero-day vulnerabilities."
    },
    {
      title: "The Future of AI in Cybersecurity",
      date: "June 28, 2025",
      category: "Research Paper",
      excerpt: "Our latest research explores how adaptive learning AI is revolutionizing enterprise security."
    },
    {
      title: "Elite AI Recognized as Industry Leader",
      date: "June 10, 2025",
      category: "Company News",
      excerpt: "Gartner names Elite AI a Leader in the 2025 Magic Quadrant for AI-Powered Security Solutions."
    },
    {
      title: "Upcoming Webinar: AI Security Best Practices",
      date: "May 30, 2025",
      category: "Event",
      excerpt: "Join our experts as they discuss implementing AI security solutions in hybrid cloud environments."
    },
    {
      title: "New Partnership with CloudTech",
      date: "May 15, 2025",
      category: "Company News",
      excerpt: "Elite AI announces strategic partnership to integrate our AI security with CloudTech's platform."
    },
    {
      title: "Understanding AI-Powered Threat Intelligence",
      date: "April 22, 2025",
      category: "Security Insights",
      excerpt: "How our global threat intelligence network predicts and prevents emerging cyber threats."
    }
  ];

  return (
    <div className="news">
      <section className="hero-news">
        <div className="container">
          <h1>Latest News & Insights</h1>
          <p>Stay updated with the latest developments in AI-powered cybersecurity from Elite AI and our industry experts.</p>
        </div>
      </section>

      <section className="section news-main">
        <div className="container">
          <div className="news-categories">
            <button className="category-btn active">All Updates</button>
            <button className="category-btn">Security Insights</button>
            <button className="category-btn">Research Papers</button>
            <button className="category-btn">Press Releases</button>
            <button className="category-btn">Events</button>
          </div>

          <div className="news-grid">
            {newsItems.map((item, index) => (
              <div key={index} className="news-card">
                <div className="news-category">{item.category}</div>
                <h3 className="news-title">{item.title}</h3>
                <div className="news-date">{item.date}</div>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="/" className="read-more">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;