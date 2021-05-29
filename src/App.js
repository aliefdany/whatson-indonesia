import { render } from "react-dom";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

render(<App />, document.getElementById("root"));
