import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import EditPage from "./component/EditPage";
import RegistrationDetailsPage from "./component/RegistrationDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/registration-details" element={<RegistrationDetailsPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
