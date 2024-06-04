import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Success from "./pages/Success";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const isAlert = useSelector((state) => state.alert.isAlert);

  useEffect(() => {
    if (isAlert) {
      alert("hi");
    }
  }, [isAlert]);

  return (
    <div className="w-[100%] h-screen overflow-hidden relative select-none">
      <Header />
      <AnimatePresence initial={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:quiz" element={<Quiz />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
