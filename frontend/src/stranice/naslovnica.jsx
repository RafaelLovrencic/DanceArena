import '../izgled/naslovnica.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';

export default function Naslovnica() {
  return (
  <>
    <nav>
      <NavigacijskaTraka />
    </nav>
    <div className='brzistart'>
      <h1 className='dobrodoslica'>Dobrodošli u DanceArenu!</h1>
    </div>
  </>
  )
}
