import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#455d7a",
    },
    secondary: {
      main: "#455d7a"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/topics/:topic_slug" element={<Articles />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
