import { Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        <button>
          <Link to="/users">User Page</Link>
        </button>
        <button>
          <Link to="/admin">Admin Page</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
