import '../izgled/naslovnica.css'
import { Link } from 'react-router-dom';

export default function Naslovnica() {
  return (
  <>
    <nav>
      <p>DanceArena</p>
      <button className='Login'><Link to="/prijava" className='loginButton'>Prijava</Link></button>
    </nav>
    <h1>Naslovnica</h1>
  </>
  )
}
