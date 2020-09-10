import React from 'react';
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/CardsItems/index";
import Listalinks from "../../components/Listalinks/index";
import Escudo from '../../img/img1.jpg';


function Home() {
  return (
<>
<img height="300px" src={Escudo} />
<Listalinks/>
</>

  )
}

export default Home;