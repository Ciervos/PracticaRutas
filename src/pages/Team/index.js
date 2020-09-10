import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Lista from '../../components/Lista'
import {Link} from  "react-router-dom";


function Team() {
  const [txt,setTxt] = useState("");

  function handleFilter(info){
   setTxt(info);
  };

  return(
   <>
   <Link to="/">Home</Link>
   <Navbar handleCb={handleFilter}/>
   <Lista info={txt}/>
  

   </>

  )
}

export default Team;