import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "../pages/LandingPage"
import ClubHQ from "../pages/ClubHQ"
import Events from "../pages/Events"
import ThingsToDo from "../pages/ThingsToDo"
import YourCrew from "../pages/YourCrew"
import NoticeBoard from "../pages/NoticeBoard"
import Tools from "../pages/Tools"

import Layout from "./Layout"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <ClubHQ />
            </Layout>
          }
        />

        {/* Events */}
        <Route
          path="/events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />

        {/* Tasks */}
        <Route
          path="/tasks"
          element={
            <Layout>
              <ThingsToDo />
            </Layout>
          }
        />

        {/* Crew */}
        <Route
          path="/crew"
          element={
            <Layout>
              <YourCrew />
            </Layout>
          }
        />

        {/* Notice Board */}
        <Route
          path="/notices"
          element={
            <Layout>
              <NoticeBoard />
            </Layout>
          }
        />

        {/* Tools */}
        <Route
          path="/tools"
          element={
            <Layout>
              <Tools />
            </Layout>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}