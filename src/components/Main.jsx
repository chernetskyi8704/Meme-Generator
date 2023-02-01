import React from "react";
import "../styles/Main.css";

export function Main() {
  let memes = [];

  (async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      memes = data.data.memes;
    } catch (error) {
      alert("Something went wrong, please refresh the page");
    }
  })();

  let randomMemeImage = "";
  const [memeImage, setMemeImage] = React.useState(randomMemeImage);

  function getRandomMemeData() {
    const randomMemeData = memes[Math.floor(Math.random() * memes.length)];
    setMemeImage((randomMemeImage = randomMemeData.url));
  }

  return (
    <main className="main">
      <section className="section__form">
        <form className="form">
          <input
            type="text"
            className="form__input"
            placeholder="Enter a top text"
          />
          <input
            type="text"
            className="form__input"
            placeholder="Enter a bottom text"
          />
          <button
            type="button"
            className="form__button"
            onClick={getRandomMemeData}
          >
            Get a new meme image
          </button>
        </form>
      </section>
      <section className="section__meme">
        <img
          src={memeImage}
          alt=""
          className="meme__image"
          width="100%"
          height="auto"
        />
      </section>
    </main>
  );
}
