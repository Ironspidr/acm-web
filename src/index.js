import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  createHashRouter,
} from "react-router-dom";

import Home from "./templates/home";
import About from "./templates/about";
import ContactPage from "./templates/contactForm";
import TeamPage from "./templates/teamPage";
import NoPage from "./templates/nopage";
import CommunityPage from "./templates/community";
import ResourcesPage from "./templates/resources";
import EventsPage from "./templates/events";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
