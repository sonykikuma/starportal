

const AccordionCard=()=>{

const cards1=[{
  id:"1",title:"But what is crypto and...",imageurl: "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png", tasks:"8 "
},
  {id:"2", title:"Setting up your own web3...", imageurl:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg", tasks:"8 "},
  {id:"3", title:"What the hack is a...",    imageurl:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg", tasks:"8 "} , {id:"4", title:"Swapping and bridging?...",
imageurl:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg", tasks:"10 "} ,
  {id:"5", title:"NFTs and why they are cool...",
imageurl:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg", tasks:"6 "},
  {id:"6", title:"Doing quests and winning...",
imageurl:"https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg", tasks:"8 "}
]


  return(<div className="container rounded-4 mb-3" style={{width:"40%", height:"20%", marginLeft:"50px",marginTop:"0px"}}>
    <div className="accordion " id="accordionExample" >
      <div className="accordion-item border-dark bg-black py-2 px-2">
         <h2 className="accordion-header  py-3 px-4  bg-black " >

        <div className="row  bg-black">
          <div className="col-md-4 border border-dark rounded-3 text-center d-flex align-items-center">
            <div className=" rounded-4  d-flex flex-column align-items-center">
        <img src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png" alt="" className="img-fluid p-1 border-1" style={{width:"100%",height:"100%"}}/>
              <p className=" text-light bg-black border-dark border rounded-4 fs-6 p-1">6 Quests</p>

            </div></div>

       <div className="col-md-8">  
         <button className="accordion-button transparent-bg d-flex flex-column align-items-start border-black border position-relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
><span>
Basics of Crypto</span>

            <p className="text-secondary mb-0 mt-3">The safest and easiest place to start your crypto journey!</p>
         <div className="text-secondary" style={{ borderTop: "1px dashed ", width: "100%", marginTop: "25px" }}></div>

<span className="p-1 mt-4 rounded-4 bg-dark text-secondary border border-dark"><img src="https://www.intract.io/assets/xp-icon-aacd204a.svg" alt="" style={{width:"20px", height:"20px"}}/> 1490XPs</span>
           <span className="position-absolute toggle-icon text-white">
             <i className="bi bi-chevron-down"></i>
           </span>

          </button></div>
       </div>
          </h2> 

        <div id="collapseOne" className="accordion-collapse collapse show  border-black border"  data-bs-parent="#accordionExample">
          <div className="accordion-body transparent-bg text-light border-black"   style={{ maxHeight: "350px", overflowY: "auto" }}
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
 export default AccordionCard
