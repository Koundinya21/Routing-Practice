// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="background-container">
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="symbol"
      />
      <h1 className="name">Wave</h1>
    </div>

    <ul className="items">
      <li>
        <Link className="name text" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="name text" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="name text" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
