import React, { Component } from 'react';
import AddProducts from './AddProducts';
import ProductList from './ProductList';
import OutOfStocK from './OutOfStocks';

class Products extends Component {
  constructor(props) {
    super(props);
  }
  state = { products: [], loading: true };

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((jsonRes) => {
        this.setState({ products: [...jsonRes.products], loading:false });
      })
      .catch((error) => console.log(error));
  }

  addProduct = (newProduct) => {
    this.setState((prevState) => ({
        products: [...prevState.products, newProduct]
    }))
  }

  render() {
    return (
      <>
        <h3>List of Products</h3>
        {!this.state.loading ? (
         <ProductList products={this.state.products} />
        ) : (
         <OutOfStocK />
        )}
        <AddProducts updateProduct={this.addProduct} />
      </>
    );
  }
}

export default Products;
