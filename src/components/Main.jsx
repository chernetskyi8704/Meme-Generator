import "../styles/Main.css";

export function Main() {
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
          <button type="submit" className="form__button">
            Get a new meme image
          </button>
        </form>
      </section>
    </main>
  );
}
