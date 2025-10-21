import '../izgled/navigacijskatraka.css'
import logo from '../izgled/logo.png';
import { Link } from 'react-router-dom';

export default function NavigacijskaTraka() {
  return (
  <>
    <div className='logo'>
      <img src={logo} alt="Logo" />
      <p className='DanceArena'>DanceArena</p>
    </div>
    <div className='tipke'>
      <button className='registracija'><Link to="/prijava" className='loginButton'>Registracija</Link></button>
      <button className='prijava'><Link to="/prijava" className='loginButton'>Prijava</Link></button>
    </div>
  </>
  )
}