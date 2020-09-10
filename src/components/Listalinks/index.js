import React from 'react';
import {Link} from  "react-router-dom";

function Listalinks() {
  const paises = [{name:"Argentina", location:"/equipo"},{name:"Brasil", location:"/equipo"},{name:"Uruguay", location:"/equipo"}]
  return (
    <ul>
      {paises.map((pais)=>{
        return <li><Link to={pais.location}>{pais.name}</Link></li>
      })}
     
    </ul>
  )
}

export default Listalinks;