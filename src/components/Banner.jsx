import banner from '../assets/banner.png'
import academy1 from '../assets/academy1.gif'


const Banner = ()=>(
    <div className="banner-container position-relative">
  <img src={banner} alt="Intract Acedemy" className='img-fluid w-100 '/>   
        <div className="banner-text position-absolute top-50 start-50 translate-middle text-center">
          
         <img 
           //src ="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
          src={academy1}
           alt="" className='bg-transparent' style={{width:"254px", height:"100px"}}/>
    <div className=' position-absolute top-50 start-50'>
    <hr />
      </div>
    <p className='text-light fw-light fs-5'>Intract users <span className='text-light-emphasis'>have together made more than</span > $100 million <span className="text-light-emphasis">in web3.</span><br/> <span className="text-light-emphasis">Join them and </span>learn how to earn crypto!

</p>
          <div className=''>
    <button className='btn btn-primary '>Get Started <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
    </svg></button></div>
  </div>

  </div>
)
 export default Banner