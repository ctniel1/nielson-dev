import '../assets/styles/home.css'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div id="background" />
      <div id="welcome">
        <img src={Logo} alt="Logo" id="logo" />
        <Link to="/about" id="home-link">Developed by Chris Nielson</Link>
      </div>
    </div>
  )
}