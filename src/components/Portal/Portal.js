import { createPortal } from 'react-dom'
import './Portal.scss'

const Portal = ({ children }) => {
  const container = document.querySelector('body')
  return createPortal(<div id="portal">{children}</div>, container)
}

export default Portal
