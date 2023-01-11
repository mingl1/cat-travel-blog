import "./App.css";
import Data from "./data";
import Card from "./components/Card";
import Nav from "./components/Nav";
function App() {
  const cards = Data.map((i) => <Card {...i} />);

  return (
    <div className="App">
      <Nav />
      <div className="container">{cards}</div>
    </div>
  );
}

export default App;
