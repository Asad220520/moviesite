import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/popular" element={<Popular />} />
          <Route path="/topRated" element={<TopRated />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
