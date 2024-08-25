import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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
        <Route path="/acm-web/" element={<Home />} />
        <Route path="/acm-web/about" element={<About />} />
        <Route path="/acm-web/team" element={<TeamPage />} />
        <Route path="/acm-web/*" element={<NoPage />} />
        <Route path="/acm-web/resources" element={<ResourcesPage />} />
        <Route path="/acm-web/community" element={<CommunityPage />} />
        <Route path="/acm-web/contact" element={<ContactPage />} />
        <Route path="/acm-web/events" element={<EventsPage />} />
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

reportWebVitals();
