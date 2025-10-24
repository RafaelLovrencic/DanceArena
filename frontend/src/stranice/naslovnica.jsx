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
    <div className='obavijesti'>
      <h1 className='obavijestiTekst'>Obavijesti i nova događanja</h1>
    </div>
  </>
  )
}
