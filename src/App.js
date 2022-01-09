import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Programs from "./pages/Programs";
import "./App.css";
import Footer from "./components/Footer";
import Extracurricular from "./pages/Extracurricular";
import Regular from "./pages/Regular";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sendMsgHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <Router>
        <Navbar
          sidebar={sidebar}
          setSidebar={setSidebar}
          showSidebar={showSidebar}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="programs">
            <Route path="extra" element={<Extracurricular />} />
            <Route path="regular" element={<Regular />} />
            <Route index element={<Programs />} />
          </Route>

          <Route
            path="/contact"
            onSendmsg={sendMsgHandler}
            element={<Contact />}
          />
        </Routes>
        <Footer
          sidebar={sidebar}
          setSidebar={setSidebar}
          showSidebar={showSidebar}
        />
      </Router>
    </>
  );
}

export default App;
