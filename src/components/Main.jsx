import React from "react";
import "../styles/Main.css";

export function Main() {
  const [memesData, setMemesData] = React.useState([]);

  React.useEffect(() => {
    function fetchData() {
      fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setMemesData(data.data.memes));
    }
    fetchData();
  }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  function getRandomMemeData() {
    const randomMemeData = memesData[Math.floor(Math.random() * memesData.length)];
    const randomMemeUrl = randomMemeData.url;
    setMeme(prevMeme => ({
      ...prevMeme,
      topText: "",
      bottomText: "",
      randomImage: randomMemeUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main className="main">
      <section className="section__form">
        <form className="form">
          <input
            type="text"
            name="topText"
            value={meme.topText}
            className="form__input"
            placeholder="Enter a top text"
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            className="form__input"
            placeholder="Enter a bottom text"
            onChange={handleChange}
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
          src={meme.randomImage}
          alt=""
          className="meme__image"
          width="100%"
          max-height="440px"
        />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </section>
    </main>
  );
}
