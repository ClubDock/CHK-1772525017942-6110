import React, { useState } from "react";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import ClubHQ from "../pages/ClubHQ";
import Events from "../pages/Events";
import ThingsToDo from "../pages/ThingsToDo";
import YourCrew from "../pages/YourCrew";
import NoticeBoard from "../pages/NoticeBoard";
import Tools from "../pages/Tools";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("clubhq");

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  let CurrentPage;

  switch (page) {
    case "events":
      CurrentPage = <Events />;
      break;
    case "tasks":
      CurrentPage = <ThingsToDo />;
      break;
    case "crew":
      CurrentPage = <YourCrew />;
      break;
    case "notice":
      CurrentPage = <NoticeBoard />;
      break;
    case "tools":
      CurrentPage = <Tools />;
      break;
    default:
      CurrentPage = <ClubHQ />;
  }

  return (
    <div style={{ display: "flex", height: "100vh", background: "#090e1a" }}>
      <Sidebar page={page} setPage={setPage} onSignOut={() => setLoggedIn(false)} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div style={{ padding: "20px", overflow: "auto" }}>{CurrentPage}</div>
      </div>
    </div>
  );
}