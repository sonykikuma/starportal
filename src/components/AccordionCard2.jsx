

const AccordionCard2=()=>{

const cards1=[{
  id:"1",title:"What are airdrops, and ho...",imageurl: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg", tasks:"7 "
},
  {id:"2", title:"Types of airdrops...", imageurl:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg", tasks:"10 "},
  {id:"3", title:"How to earn huge $$$ fro...",    imageurl:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png", tasks:"11 "} , {id:"4", title:"Things to keep in mind!...",
imageurl:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg", tasks:"7 "} ,
]


  return(<div className="container rounded-4 mb-3 " style={{width:"40%", height:"30%", marginTop:"100px"}}>
    <div className="accordion " id="accordionExample" >
      <div className="accordion-item border-dark bg-black py-2 px-2">
         <h2 className="accordion-header  py-3 px-4  bg-black " >

        <div className="row  bg-black">
          <div className="col-md-4 border border-dark rounded-3 text-center d-flex align-items-center">
            <div className="rounded-4 flex-column d-flex align-items-center">
        <img src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png" alt="" className="img-fluid p-1 border-1" style={{width:"100%",height:"100%"}}/>
            <p className=" text-light bg-black border-dark border rounded-4 fs-6 p-1">4 Quests</p>
            </div></div>

       <div className="col-md-8">  
         <button className="accordion-button transparent-bg d-flex flex-column align-items-start border-black border position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOn" aria-expanded="true" aria-controls="collapseOn"
><span className="fs-3">
Introduction to Airdrops </span>

            <p className="text-secondary mb-0 mt-3">The best bet to make it big in crypto!</p>
         <div className="text-secondary" style={{ borderTop: "1px dashed ", width: "100%", marginTop: "25px" }}></div>

<span className="p-1 mt-4 rounded-4 bg-dark text-secondary border border-dark"><img src="https://www.intract.io/assets/xp-icon-aacd204a.svg" alt="" style={{width:"20px", height:"20px"}}/> 1040XPs</span>
           <span className="position-absolute toggle-icon text-white">
             <i className="bi bi-chevron-down"></i>
           </span>

          </button></div>
       </div>
          </h2> 

        <div id="collapseOn" className="accordion-collapse collapse show  border-black border"  data-bs-parent="#accordionExample">
          <div className="accordion-body transparent-bg text-light border-black"  style={{ maxHeight: "350px", overflowY: "auto" }}
>{cards1.map((car,index)=>(

            <div  key={index} className="card text-bg-dark mb-3 rounded-3" >
              <div className="card-body">
                <div className="row">
                <div className="col-md-4">
                <img src={car.imageurl}
                  alt="" className="img-fluid rounded-4" style={{width:"100%", height:"100%"}}/>
                </div>
                <div className="col-md-8">
                <h5>#{car.id}: {car.title}
                  But what is crypto and...
</h5>         <div className="text-secondary text-center" style={{ borderTop: "1px dashed ", width: "90%", marginTop: "20px" }}></div>
<div style={{marginTop:"10px"}}><span className="">{car.tasks} 
   Tasks</span><span className="mx-3 px-5 rounded-pill border border-secondary"></span>  <span className="rounded-circle border border-secondary p-1"> <img src="https://cdn.icon-icons.com/icons2/3446/PNG/512/tick_approved_check_mark_icon_219235.png" alt="" style={{ width:"16px", height:"16px"}}/></span></div>

                </div></div>

              </div>
            </div>))}


          </div>
        </div>
      </div>
    </div>
  </div>)
}
 export default AccordionCard2
