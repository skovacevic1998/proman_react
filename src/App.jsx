import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Footer, Homepage, Navbar, ReactProjects } from "./component";
import "./css/default.css";
import videoBg from "./assets/backgroundvideo.mp4";

function App() {

  return (
    <Router>
      <div className="main_div">
        <video className="video_bg" autoPlay loop muted>
          <source src={videoBg} type="video/mp4"/>
        </video>
        <div className="component_div">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content_div">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/reactprojects" element={<ReactProjects />} />
            </Routes>
          </div>
          <div className="footer_div"><Footer/></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
