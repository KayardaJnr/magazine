import './Articles.css';
const Articles = ({title, content, author}) => {
  return (
    <section className="articles" id="articles">
        <h2>Latest Articles</h2>
        <div className="article-list">
            <article className="article-item">
                <h3>The Future of Tech: What to Expect in 2024</h3>
                <p>Explore the upcoming trends and innovations that will shape the tech industry in 2024.</p>
            </article>
            <article className="article-item">
                <h3>AI in Everyday Life: Benefits and Challenges</h3>
                <p>An in-depth look at how artificial intelligence is transforming our daily routines and the potential hurdles we may face.</p>
            </article>
            <article className="article-item">
                <h3>Cybersecurity Essentials: Protecting Your Digital Life</h3>
                <p>Learn the best practices for safeguarding your personal information and staying secure online.</p>
            </article>
            <article className="article-item">
                <h3>Top Programming Languages to Learn in 2024</h3>
                <p>A guide to the most in-demand programming languages and why you should consider learning them this year.</p>
            </article>  
            <article className="article-item">
                <h3>Blockchain Beyond Cryptocurrency: Real-World Applications</h3>
                <p>Discover how blockchain technology is being utilized in various industries beyond just digital currencies.</p>
            </article>
        </div>

    </section>
    ); 
};

export default Articles;