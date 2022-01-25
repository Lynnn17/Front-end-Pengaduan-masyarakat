import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Container } from "react-bootstrap";
import Home from "./components/Home";

function App() {
  return (
    <div className="par">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
