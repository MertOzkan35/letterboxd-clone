import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavnarMain from "./Components/Navbar/NavnarMain";
import Footer from "./Components/Footer/Footer";

import Pages from "./Pages";
function App() {
  return (
    <div>
      <NavnarMain />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
