import { VisibilityOutlined, Settings, DeleteForeverOutlined } from "@mui/icons-material"

function TourneyRow () {

  return (
    <tr>
      <td>this is a test anbd a longer test</td>
      <td>Date</td>
      <td>Players</td>
      <td>Format</td>
      <td>
        <button className="green"><VisibilityOutlined /></button>
        <button className="meh"><Settings /></button>
        <button className="red"><DeleteForeverOutlined /></button>
      </td>
    </tr>
  )
}

export default TourneyRow