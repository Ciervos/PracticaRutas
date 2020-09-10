import React from 'react'
import "./style.scss"

function CardsItems(props) {
  return (
  <div className="carta"> 
    <img height="140px"src={props.foto}/>
  <p>{props.name}</p>  
  <p>${props.precio}</p> 

  </div>
  )
}

export default CardsItems;