export default function Sidebar({ setActivePage }) {
  return (
  <div className="sidebar">

  <h2>ClubDock</h2>

  <button onClick={() => setActivePage("hq")}>
    🏠 Club HQ
  </button>

  <button onClick={() => setActivePage("events")}>
    📅 Events
  </button>

  <button onClick={() => setActivePage("tasks")}>
    ✅ Things To Do
  </button>

  <button onClick={() => setActivePage("crew")}>
    👥 Your Crew
  </button>

  <button onClick={() => setActivePage("notice")}>
    📢 Notice Board
  </button>

  <button onClick={() => setActivePage("tools")}>
    🛠 Tools
  </button>

</div> 
  )}