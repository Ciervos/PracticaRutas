import React from "react";

class Product extends React.Component {

  state ={
    carouselData: [],
  };

  async componentDidMount(){
    const {id,site} = this.props.match.params;
    const data = await fetch(`https://api.mercadolibre.com/sites/${site}/search?q=moldes&limit=5`);
   const json= await data.json();
   console.log(this.props);
   console.log(json.results);
   this.setState({
     carouselData: json.results,
   })
  }
  render() {
    
  
  return (
  <p>producto</p>
  );
  }
}

export default Product;