import Timer from './Timer'
import RewardInfo from './RewardInfo'

const TimerCard = ()=>{
  return(<><div className="d-flex align-items-center container justify-content-evenly mb-5" style={{marginTop:"100px"}}>
    <div className="text-center">
    <Timer/>
    <div className="container card rounded-4 border border-dark bg-black text-center d-flex text-align-center justify-content-center" style={{width:"18rem"}}>
  <div className="py-2"><img src="https://www.intract.io/assets/kol-reward-12e6ae06.gif" alt="" className="img-fluid rounded-4" style={{width:"1000%", height:"30%"}}/></div>
  <div className="py-3">
  <div className="d-flex justify-content-between">
    <div className="text-secondary text-opacity-75">Exclusive community</div>
    
  <div className="text-light d-flex justify-space-around gap-1 align-items-center"><span className="rounded-circle bg-primary  p-1 d-flex align-items-center justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="white" className="bi bi-discord" viewBox="0 0 16 16">
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg></span>
<span className="">Earndrop</span></div>
  </div>
     <div className="text-dark " style={{ borderTop: "1px dashed ", width: "100%", marginTop: "15px" }}></div>

    <div className="text-secondary text-opacity-75 d-flex align-items-center justify-content-between py-1"><span className="text-secondary text-opacity-75" style={{fontSize:"14px"}}>Complete all essential quests</span> 
      <span className="rounded-circle border border-dark d-flex align-items-center justify-items-center p-1 mt-1"> <img className="text-white"  src="https://cdn.icon-icons.com/icons2/3446/PNG/512/tick_approved_check_mark_icon_219235.png" alt="" style={{ width:"14px", height:"14px"}}/></span>
    </div>
    <div className="text-secondary text-opacity-75 d-flex align-items-center justify-content-between mt-2"><span className="text-secondary text-opacity-75 " style={{fontSize:"14px"}}>Complete at least 1 Alpha Hub quest today
    </span>      <span className="rounded-circle border border-dark d-flex align-items-center justify-items-center p-1 mt-1"> <img className="text-white"  src="https://cdn.icon-icons.com/icons2/3446/PNG/512/tick_approved_check_mark_icon_219235.png" alt="" style={{ width:"14px", height:"14px"}}/></span>
    </div>
    <div className='bg-dark text-secondary rounded-3 mt-3 py-1 '>Claim Now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
    </svg></div>
  </div>
  </div></div>

    <div><RewardInfo/></div>
    
    </div>
  </>)
}

export default TimerCard