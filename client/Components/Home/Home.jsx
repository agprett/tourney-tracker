import { useNavigate } from "react-router"

import TourneyTable from "./TourneyTable.jsx"

function Home () {
  const navigate = useNavigate()

  const createNewTournament = () => {
    navigate('/new-tournament')
  }

  return (
    <main className="tournaments-view" >
      <h4>Your Tournaments</h4>
      <button className="new-tourney-btn" onClick={createNewTournament}>New Tournament</button>
      <TourneyTable />
    </main>
  )
}

export default Home