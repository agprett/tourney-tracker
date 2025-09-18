function Tourney () {

  return (
    <div id="tournament-details">
      <header className="tourney-details-header">
        <h3>Tourney name</h3>
        <p>Tourney Format</p>
      </header>

      <div className="tabs">
        <button className="tab-buttons tab-buttons-active">Players</button>
        <button className="tab-buttons">Rounds</button>
        <button className="tab-buttons">Standings</button>
        <button className="tab-buttons">Settings</button>
      </div>

      <div className="tabs-content">
        Content
      </div>
    </div>
  )
}

export default Tourney