import GameView from 'components/GameView'
import Header from 'components/Header'
import NewGameForm from 'components/NewGameForm'
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Main() {
  const [game, setGame] = useState(null)

  return (
    <>
      {game !== null && (
        <Header onNewGame={() => setGame(null)} title={game.name} />
      )}
      <main>
        {game ? <GameView game={game} /> : <NewGameForm setGame={setGame} />}
      </main>
    </>
  )
}

createRoot(document.getElementById('App')).render(
  <StrictMode>
    <Main />
  </StrictMode>
)
