import React, { useState } from 'react'



export default function Navbar() {
    
   
    const [mystyle,setmystyle]=useState({
        color:'white',
        backgroundColor:'black'
        
    })
    const [buttontext,setbuttontext]=useState("Enable Light Mode")
    let toggle=()=>{
        if(mystyle.color=='white' || mystyle. backgroundColor=="black" )
        {
            setmystyle( {color:'black',
            backgroundColor:'white'})
            setbuttontext("Enable Dark Mode")
          
        }
        else
        {
            setmystyle( {color:'white',
            backgroundColor:'black'})
            setbuttontext("Enable Light Mode")
        }
    }


  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={mystyle}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={mystyle}>TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={mystyle}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={mystyle}>About</a>
        </li>
       
       
      </ul>
     
       
        <button className="btn btn-outline-success" type="button" style={mystyle} onClick={toggle}>{buttontext}</button>
      
    </div>
  </div>
</nav>
    </div>
  )
}

