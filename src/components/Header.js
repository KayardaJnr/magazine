import "./Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <h1> Ihifix Magazine</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
