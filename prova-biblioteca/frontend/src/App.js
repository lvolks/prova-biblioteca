import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <RoutesConfig />
    </Router>
  );
}

export default App;
