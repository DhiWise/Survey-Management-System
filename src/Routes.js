import React from "react";
import SyncwithGoogle from "pages/SyncwithGoogle";
import Groups from "pages/Groups";
import Home1 from "pages/Home1";
import Login from "pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/syncwithgoogle" element={<SyncwithGoogle />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
