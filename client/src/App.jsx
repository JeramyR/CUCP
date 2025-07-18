import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import GetInvolved from "./pages/GetInvolved";
import News from "./pages/News";
import Footer from "./components/Footer";
import Donate from "./components/Donate";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/news" element={<News />} />
      </Routes>

      <Donate />
      <Footer />
    </>
  );
}

export default App;
