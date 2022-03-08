import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import { UserContext } from "./contexts/UserContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#455d7a",
    },
    secondary: {
      main: "#455d7a",
    },
  },
});

function App() {
  const [user, setUser] = useState({
    username: "grumpy19",
  });

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/topics/:topic_slug" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
