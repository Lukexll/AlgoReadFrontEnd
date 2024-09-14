import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
//import { Link } from "react-router-dom";

import Home from './Home/Home';
import About from './About/About';
// ... import other pages

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* ... other routes */}
        </Routes>

    </Router>
  );
}

export default App;