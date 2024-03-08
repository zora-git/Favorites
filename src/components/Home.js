import "./Home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="Intro">
        <Link to="/portfolio">
          <h1 className="Hero">
            H<span className="Name">yun</span> J
            <span className="Name">ung</span> Park
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
