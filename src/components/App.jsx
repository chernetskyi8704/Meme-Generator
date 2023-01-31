import "../styles/App.css";
import { Header } from "../components/Header.jsx";
import { Main } from "../components/Main.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}
