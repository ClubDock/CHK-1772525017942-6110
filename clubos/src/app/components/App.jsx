import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import ClubHQ from "../pages/ClubHQ";
import Events from "../pages/Events";
import ThingsToDo from "../pages/ThingsToDo";
import YourCrew from "../pages/YourCrew";
import NoticeBoard from "../pages/NoticeBoard";
import Tools from "../pages/Tools";

export default function App() {

  const [activePage, setActivePage] = useState("hq");

  const renderPage = () => {
    switch(activePage){
      case "hq": return <ClubHQ />;
      case "events": return <Events />;
      case "tasks": return <ThingsToDo />;
      case "crew": return <YourCrew />;
      case "notice": return <NoticeBoard />;
      case "tools": return <Tools />;
      default: return <ClubHQ />;
    }
  };

  return (
    <div className="appLayout">

      <Sidebar setActivePage={setActivePage} />

      <div className="mainArea">

        <Topbar />

        <div className="pageArea">
          {renderPage()}
        </div>

      </div>

    </div>
  );
}