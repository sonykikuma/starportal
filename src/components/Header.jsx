import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-black bg-gradient  sticky-top">
       <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand text-white fw-semibold fs-3">intract.</NavLink>

          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarNav">           

            <ul className="navbar-nav">
              <li className="nav-item ">
                {" "}
                <NavLink className="nav-link text-light">Compass</NavLink>
              </li>
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link text-light">Explore</NavLink>
              </li>
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link text-light">Academy <button className="rounded-pill  btn btn-primary">New</button></NavLink>
              </li>
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link text-light">NFTs</NavLink>
              </li>
              <li className="nav-item">
                {" "}
                <NavLink className="nav-link text-light">For Projects</NavLink>
              </li>
            </ul> 
            <div className="justify-content-around d-flex ">             
              <input className="py-2 px-5 rounded-pill" placeholder="Search for ecosystems, trending quests etc,."/> 
              <button className="rounded ms-3 bg-white">Sign In</button>
              <span className="rounded-5 px-3 py-1 border  border-danger ms-3 d-flex" style={{ borderColor: '#FFA500' }} >               
<img src="https://www.intract.io/assets/broadcast_or-04af786c.svg" alt="" className="img-fluid"   style={{maxWidth: '30px', maxHeight: '30px'
    }}
/></span>

              
 </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
