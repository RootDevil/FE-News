import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic_slug" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
