import React,{useState,useEffect} from 'react';
import CardsItems from '../CardsItems';
import "./style.scss";

function Lista(props) {

  const [moldes,setMoldes] = useState([]);
  
  useEffect(() => {
   
  
      fetchData();
     },[]);

     async function fetchData(){
      const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=moldes&limit=5");
      const dataJson = await data.json();
   
      setMoldes(dataJson.results);
      
    }


  return (
     
       <ul className="listacont">
     {moldes.filter((obj) =>{
       return(obj.title.includes(props.info))
     }).map((obj, key) => {
       return (
          <CardsItems name={obj.title} foto={obj.thumbnail} precio={obj.price} key={obj.id ? obj.id:key}/>
        );
      }) }
    </ul>
    
  );
}

export default Lista;