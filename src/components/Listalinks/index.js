import React from 'react';
import {Link} from  "react-router-dom";
import './style.scss';

function Listalinks() {
  const paises = [{name:"Argentina", site:"MLA", bandera:"https://images.emojiterra.com/twitter/512px/1f1e6-1f1f7.png"},{name:"Brasil", site:"MLB", bandera:""},{name:"Uruguay", site:"MLU", bandera:""}]
  return (
    <ul>
      {paises.map((pais)=>{
        return <li><img src={pais.bandera} height="25px"/>  <Link className="links" to={`/carousel/${pais.site}`}>{pais.name}</Link></li>
      })}
     
    </ul>
  )
}

export default Listalinks;