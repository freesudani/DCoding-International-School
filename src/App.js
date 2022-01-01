import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Programs from "./pages/Programs";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const sendMsgHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/programs" element={<Programs />} />
          <Route
            path="/contact"
            onSendmsg={sendMsgHandler}
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
