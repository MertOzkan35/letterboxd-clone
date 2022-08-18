import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavnarMain from "./Components/Navbar/NavnarMain";
import Pages from "./Pages";
function App() {
  return (
    <div>
      <NavnarMain />
      <Pages />
    </div>
  );
}

export default App;
