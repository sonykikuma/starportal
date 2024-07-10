import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import CryptoDictionary from './components/CryptoDictionary'
import CryptoCreators from './components/CryptoCreators'
import AccordionCard from './components/AccordionCard'
import AccordionCard2 from './components/AccordionCard2'
import TimerCard from './components/TimerCard'

const App = ()=>{

  return(<>
  <Header/>
    <Banner/>
    <main className='bg-black py-4'>
      <AccordionCard/>
      <AccordionCard2/>
      <TimerCard/>
      <hr className='text-secondary'/>

      <CryptoCreators/>
      <hr className='text-secondary'/>

      <CryptoDictionary/>
      <hr className='text-secondary'/>
      <Disclaimer/>
    </main>
  <Footer/>
  </>)
}
 export default App