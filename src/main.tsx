import Header from 'components/Header'
import { StrictMode, useStore } from 'react'
import { createRoot } from 'react-dom/client'

function Main() {
  const [game, setGame] = useState(null)

  return (
    <StrictMode>
      <Header hasGame={game !== undefined} onNewGame={() => setGame(null)} />
      <main>
        {game ? <GameView game={game} /> : <NewGameForm setGame={setGame} />}
      </main>
    </StrictMode>
  )
}

createRoot(document.getElementById('App')).render(Main)
