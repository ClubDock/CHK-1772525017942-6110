import { useState } from "react";
import Login from "../pages/Login";
import ClubHQ from "../pages/ClubHQ";

export default function App() {

  // this stores login state
  const [loggedIn, setLoggedIn] = useState(false);

  // if user is NOT logged in
  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  // if user is logged in
  return (
    <div>
      <ClubHQ />
    </div>
  );
}