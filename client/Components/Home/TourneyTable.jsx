import { useState } from "react"

import TourneyRow from './TourneyRow.jsx'

function TourneyTable () {
  const [tournaments, setTournaments] = useState(4)

  const tournamentRows = () => {
    let rows = []

    for(let i = 0; i < tournaments; i++) {
      rows.push(<TourneyRow key={i}/>)
    }

    return rows
  }

  return (
    <table className="tournaments-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Players</th>
          <th>Format</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tournamentRows()}
      </tbody>
    </table>
  )
}

export default TourneyTable