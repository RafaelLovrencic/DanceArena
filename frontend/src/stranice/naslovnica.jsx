import '../izgled/naslovnica.css'
import NavigacijskaTraka from './navigacijskatraka.jsx';

export default function Naslovnica() {
  return (
  <>
    <nav>
      <NavigacijskaTraka />
    </nav>
    <section className='brziStart'>
      <h1 className='dobrodoslica'>Dobrodošli u DanceArenu!</h1>
    </section>
  </>
  )
}
