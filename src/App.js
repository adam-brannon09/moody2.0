import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
