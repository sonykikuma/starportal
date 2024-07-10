

const Timer=()=>{

  return(    <div className="container card rounded-4 border border-dark bg-black text-center d-flex text-align-center justify-content-center my-3" style={{width:"18rem"}}>

    <div className="d-flex align-items-center gap-3 pt-3"><span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="orange" className="bi bi-clock" viewBox="0 0 16 16">
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg></span><span className="text-secondary text-opacity-75">Reward unlocks in</span></div>
     <div className="text-dark " style={{ borderTop: "1px dashed ", width: "100%", marginTop: "15px" }}></div>
    
    <div className="d-flex justify-content-between my-3 rounded-4 p-4 bg-dark border border-dark text-secondary">
      <div className="d-flex flex-column">
      <span className="fw-bold fs-2 text-light text-opacity-75">00</span><span>Days</span></div>
      <div className="d-flex flex-column">
      <span className="fw-bold fs-2 text-light text-opacity-75">00</span><span>Hrs</span></div>   
      <div className="d-flex flex-column">
      <span className="fw-bold fs-2 text-light text-opacity-75">00</span><span>Mins</span></div>      <div className="d-flex flex-column">
      <span className="fw-bold fs-2 text-light text-opacity-75">00</span><span>Sec</span></div>
    </div>

  </div>)
}
export default Timer