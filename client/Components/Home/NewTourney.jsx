import { useState } from "react"
import { useNavigate } from "react-router"

function NewTourney () {
  const [name, setName] = useState('')
  const [players, setPlayers] = useState('')
  const [format, setFormat] = useState('null')
  const [groupings, setGroupings] = useState('null')

  
  const navigate = useNavigate()
  

  const cancelNewTournament = () => {
    navigate('/')
  }

  const createNewTournament = (e) => {
    e.preventDefault()
 
    console.log(name)
    console.log(format)
    // navigate('/tournament')
  }

  return (
    <div id="new-tourney-form-wrapper">
      <h3>New Tournament</h3>
      <form id="new-tourney-form">
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
        <textarea
          placeholder="Players(separate lines for each name)"
          value={players}
          onChange={e => setPlayers(e.target.value)}
        />
        <select value={format} onChange={e => setFormat(e.target.value)}>
          <option value={'null'} disabled>Select Format</option>
          <option value={"commander"}>Commander</option>
          <option value={"standard"}>Standard</option>
          <option value={"draft"}>Draft</option>
        </select>
        <select value={groupings} onChange={e => setGroupings(e.target.value)}>
          <option value={'null'} disabled>Select Groupings</option>
          <option value={"standard"}>Random</option>
          <option value={"commander"}>Swiss</option>
        </select>
        <div id="new-tourney-btn-wrapper">
          <button onClick={cancelNewTournament}>Cancel</button>
          <button onClick={(e) => createNewTournament(e)}>Create</button>
        </div>  
      </form>
    </div>
  )
}

export default NewTourney