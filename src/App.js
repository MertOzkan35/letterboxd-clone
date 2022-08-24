import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavnarMain from "./Components/Navbar/NavnarMain";
import Footer from "./Components/Footer/Footer";
import CreateModal from "./Components/Modals/CreateModal";

import Pages from "./Pages";
function App() {
  return (
    <div>
      <NavnarMain />
      <Pages />
      <Footer />
      <CreateModal />
    </div>
  );
}

export default App;
