import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<World />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/jerrygameagents" element={<Home />} />
                <Route path="/project/:goto" element={<ProjectDetails />} />
                {/* <Route path="/ProceduralGeneration_RL" element={<Home />} /> */}
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>
    );
}

export default App;
