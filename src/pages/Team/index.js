import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Lista from '../../components/Lista'
import {Link, useParams} from  "react-router-dom";



function Team(props) {

  const [txt,setTxt] = useState("");
  const {site} = useParams();

  console.log(props)
  function handleFilter(info){
   setTxt(info);
  };

  return(
   <>
   <Link to="/">Home</Link>
   <Navbar handleCb={handleFilter}/>
   <Lista sitio={site} info={txt}/>
  

   </>

  )
}

export default Team;