import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Report from "./components/report/Report";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header />
      <div className="menu">
        <MenuIcon fontSize="large" onClick={toggleActive} />
      </div>
      <div className="bodyContent">
        <Navbar isActive={isActive} toggleActive={toggleActive} />
        <main className="main-section">
          <Report />
        </main>
      </div>
    </div>
  );
}

export default App;
