import { VisibilityOutlined, Settings, DeleteForeverOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router"

function TourneyRow () {
  const navigate = useNavigate()

  

  const viewTournament = () =>  {
    navigate('/tournament')
  }

  const viewSettings = () => {
    console.log('Will edit some settings maybe')
  }

  const deleteTournament = () => {
    console.log('Bring up delete confirm')
  }

  return (
    <tr>
      <td>this is a test anbd a longer test</td>
      <td>Date</td>
      <td>Players</td>
      <td>Format</td>
      <td>
        <button className="green" onClick={viewTournament} ><VisibilityOutlined /></button>
        <button className="meh" onClick={viewSettings}><Settings /></button>
        <button className="red" onClick={deleteTournament}><DeleteForeverOutlined /></button>
      </td>
    </tr>
  )
}

export default TourneyRow