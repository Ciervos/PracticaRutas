import React,{useState,useEffect} from 'react';
import CardsItems from '../CardsItems';
import "./style.scss";

function Lista(props) {

  const [products,setProducts] = useState([]);
  
  useEffect(() => {
   
  
      fetchData();
     },[]);

     async function fetchData(){
      const data = await fetch(`https://api.mercadolibre.com/sites/${props.sitio}/search?q=milka&limit=5`);
      //const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=moldes&limit=5");
      const dataJson = await data.json();
   
      setProducts(dataJson.results);
      console.log(props)
      
    }


  return (
     
       <ul className="listacont">
     {products.filter((obj) =>{
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