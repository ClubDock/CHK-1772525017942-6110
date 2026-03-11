import { useState } from "react"

export default function YourCrew() {

  const [members, setMembers] = useState([
    { name: "Aisha", role: "Leadership", rating: 9.5 },
    { name: "Rahul Patil", role: "Arduino", rating: 8.2 },
    { name: "Neha", role: "Python", rating: 8.8 }
  ])

  function addMember() {

    const name = prompt("Member Name")
    const role = prompt("Core Skill")

    if (!name) return

    const newMember = {
      name,
      role,
      rating: 7
    }

    setMembers([...members, newMember])

  }

  return (

    <div>

      <div className="pageHeader">

        <h1>Your Crew</h1>

        <button className="primaryBtn" onClick={addMember}>
          + Add Member
        </button>

      </div>

      {members.map((m, i) => (

        <div className="memberCard" key={i}>

          <div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>

          <div className="rating">
            ⭐ {m.rating}
          </div>

        </div>

      ))}

    </div>

  )

}