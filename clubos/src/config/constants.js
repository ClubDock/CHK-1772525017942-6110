// ─── NAV ITEMS ────────────────────────────────────────────────
export const NAV = [
  { id: "clubhq",   label: "Club HQ",      icon: "🏠" },
  { id: "events",   label: "Events",        icon: "📅" },
  { id: "things",   label: "Things To Do",  icon: "✅" },
  { id: "crew",     label: "Your Crew",     icon: "👥" },
  { id: "notices",  label: "Notice Board",  icon: "🔔" },
  { id: "tools",    label: "Tools",         icon: "🔧" },
];

// ─── TASKS ────────────────────────────────────────────────────
export const TASKS = {
  open: [
    { title: "Design Event Banner",  assignee: "Aisha", date: "Apr 10", color: "#ef4444" },
    { title: "Order Drone Parts",    assignee: "Karan", date: "Apr 12", color: "#f59e0b" },
  ],
  inprogress: [
    { title: "Prepare Workshop Slides", assignee: "Rahul", date: "Apr 11", color: "#ef4444" },
    { title: "Update Club Website",     assignee: "Neha",  date: "Apr 20", color: "#22c55e" },
  ],
  submitted: [
    { title: "Poster Design Submission", assignee: "Rahul", date: "Apr 8", color: "#f59e0b" },
    { title: "Research Sensor Modules",  assignee: "Sana",  date: "Apr 9", color: "#22c55e" },
  ],
  completed: [
    { title: "Build Drone Frame",   assignee: "Karan", date: "", color: "#ef4444" },
    { title: "Plan Guest Speaker",  assignee: "Aisha", date: "", color: "#f59e0b" },
  ],
};

// ─── MEMBERS ──────────────────────────────────────────────────
export const MEMBERS = [
  {
    name: "Aisha", role: "President", skill: "Leadership",
    score: 9.5, section: "PRESIDENT", joined: "Aug 2024",
  },
  {
    name: "Rahul Patil", role: "Core Team", skill: "Arduino",
    score: 8.2, section: "CORE TEAM", joined: "Jan 2026",
    contributions: [
      { name: "Poster Design",     status: "done"    },
      { name: "Drone Calibration", status: "pending" },
    ],
  },
  { name: "Neha",  role: "Core Team", skill: "Python",      score: 8.8, section: "CORE TEAM", joined: "Jan 2026" },
  { name: "Karan", role: "Member",    skill: "Hardware",    score: 7.9, section: "MEMBER",    joined: "Feb 2026" },
  { name: "Sana",  role: "Member",    skill: "3D Modeling", score: 7.5, section: "MEMBER",    joined: "Feb 2026" },
];

// ─── EVENTS ───────────────────────────────────────────────────
export const EVENTS = [
  {
    type: "Workshop", typeColor: "#3b82f6",
    title: "Robotics Workshop",
    desc: "Hands-on session on building and programming autonomous robots using Arduino.",
    date: "April 12, 2026", time: "10:00 AM – 1:00 PM", location: "Lab 204, Tech Block",
    attendees: 8, status: null,
  },
  {
    type: "Meeting", typeColor: "#8b5cf6",
    title: "Team Review Meeting",
    desc: "Monthly progress review and goal-setting for Q2 club activities.",
    date: "April 15, 2026", time: "4:00 PM – 5:30 PM", location: "Conference Room B",
    attendees: 12, status: null,
  },
  {
    type: "Showcase", typeColor: "#10b981",
    title: "Demo Day Showcase",
    desc: "Public showcase of all club projects to faculty and fellow students.",
    date: "April 28, 2026", time: "2:00 PM – 6:00 PM", location: "Main Auditorium",
    attendees: 34, status: null,
  },
  {
    type: "Meeting", typeColor: "#8b5cf6",
    title: "Orientation & Onboarding",
    desc: "Welcome session for new members joining the Robotics Club.",
    date: "March 1, 2026", time: "11:00 AM – 12:00 PM", location: "Seminar Hall 1",
    attendees: 20, status: "Done",
  },
];

// ─── NOTICES ──────────────────────────────────────────────────
export const NOTICES = [
  { title: "Meeting Tomorrow!", body: "Core team meeting at 5pm in Lab 204. Please be on time.", author: "Aisha", time: "2h ago",  tag: "Announcement" },
  { title: "Workshop Prep",     body: "All members need to prepare their Arduino kits before the workshop on April 12.", author: "Rahul", time: "1d ago",  tag: "Task" },
  { title: "New Resources Available", body: "Check the Tools section for updated 3D modeling guides and sensor datasheets.", author: "Neha", time: "3d ago", tag: "Info" },
];

// ─── ACTIVITY ─────────────────────────────────────────────────
export const ACTIVITY = [
  { icon: "✅", text: 'Rahul Completed "Poster Design"',          time: "2h ago" },
  { icon: "👤", text: "Neha joined the club.",                     time: "3h ago" },
  { icon: "📋", text: 'New notice "Meeting Tomorrow!"',           time: "5h ago" },
  { icon: "✅", text: "Karan submitted Drone Calibration",        time: "1d ago" },
  { icon: "📅", text: "Robotics Workshop scheduled for April 12", time: "2d ago" },
];

// ─── TOOLS ────────────────────────────────────────────────────
export const TOOLS = [
  { name: "Resource Library",      desc: "Access guides, datasheets, and learning materials.", icon: "📚", color: "#3b82f6" },
  { name: "File Sharing",          desc: "Upload and share project files with your team.",      icon: "📁", color: "#8b5cf6" },
  { name: "Meeting Scheduler",     desc: "Schedule and manage team meetings efficiently.",       icon: "🗓", color: "#10b981" },
  { name: "Budget Tracker",        desc: "Track club expenses and manage budgets.",              icon: "💰", color: "#f59e0b" },
  { name: "Poll Creator",          desc: "Create polls to gather member feedback.",              icon: "📊", color: "#ef4444" },
  { name: "Certificate Generator", desc: "Generate certificates for events and achievements.",   icon: "🏆", color: "#06b6d4" },
];
