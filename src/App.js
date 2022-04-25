import { useState } from 'react'
import Popup from './components/common/Popup/Popup'
import './styles/App.scss'

function App() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <div>
        <button onClick={handleToggle} id="buttonClickMe">
          Click me!
        </button>
        {toggle ? (
          <Popup
            handleToggle={handleToggle}
            position="left"
            idOwner="buttonClickMe"
          />
        ) : (
          true
        )}
      </div>
    </div>
  )
}

export default App
