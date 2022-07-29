import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import Main from "../pages/Main";
import Menu from "../pages/Menu";

// Components
import NavBar from "../components/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
        {/* Dirigir todo lo que sea diferente hacia la pantalla principal */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
