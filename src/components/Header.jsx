import "../styles/Header.css";

export function Header() {
  return (
    <header className="header">
      <img
        src="../public/images/troll-face.png"
        alt=""
        className="header__logo"
        height="45px"
        width="55px"
      />
      <h2 className="header__title">Meme Generator</h2>
      <p className="header__subtitle">React Course - Project 3</p>
    </header>
  );
}
