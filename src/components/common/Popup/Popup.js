import PropTypes from 'prop-types'
import { useEffect } from 'react'
import Portal from '../../Portal/Portal'
import './Popup.scss'

const Popup = ({ position, idOwner, handleToggle }) => {
  //computed position of popup component
  useEffect(() => {
    const owner = document.getElementById(idOwner)
    const ownerPosition = owner.getBoundingClientRect()
    const popUp = document.getElementById('popup')
    const popUpPosition = popUp.getBoundingClientRect()
    const HALF_OF_ELEMENT = 2
    switch (position) {
      case 'left':
        popUp.style.left = ownerPosition.x - popUpPosition.width + 'px'
        popUp.style.top =
          ownerPosition.y +
          ownerPosition.height / HALF_OF_ELEMENT -
          popUpPosition.height / HALF_OF_ELEMENT +
          'px'
        break
      case 'right':
        popUp.style.left = ownerPosition.x + ownerPosition.width + 'px'
        popUp.style.top =
          ownerPosition.y +
          ownerPosition.height / HALF_OF_ELEMENT -
          popUpPosition.height / HALF_OF_ELEMENT +
          'px'
        break
      case 'top':
        popUp.style.left =
          ownerPosition.x +
          ownerPosition.width / HALF_OF_ELEMENT -
          popUpPosition.width / HALF_OF_ELEMENT +
          'px'
        popUp.style.top = ownerPosition.y - popUpPosition.height + 'px'
        break
      default:
        popUp.style.left =
          ownerPosition.x +
          ownerPosition.width / HALF_OF_ELEMENT -
          popUpPosition.width / HALF_OF_ELEMENT +
          'px'
        popUp.style.top = ownerPosition.y + ownerPosition.height + 'px'
        break
    }
  }, [position, idOwner])
  //handle mouseup
  useEffect(() => {
    const target = document.getElementById('popup')
    const handleMouseUp = (e) => {
      const withinBoundaries = e.composedPath().includes(target)
      if (!withinBoundaries) {
        handleToggle()
      }
    }
    window.addEventListener('mouseup', handleMouseUp)
    return () => window.removeEventListener('mouseup', handleMouseUp)
  })

  return (
    <Portal>
      <div id="popup" className={position}>
        <h2>This is a popup</h2>
        <div>
          <button onClick={handleToggle}>Out</button>
        </div>
      </div>
    </Portal>
  )
}
Popup.propTypes = {
  position: PropTypes.string.isRequired,
  idOwner: PropTypes.string.isRequired,
  handleToggle: PropTypes.func,
}

export default Popup
