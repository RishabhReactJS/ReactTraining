function ProductList(props) {
    return ( 
        <ol>
        {props.products.map((product) => {
          return (
            <li>
              <div>{product.title}</div>
              <div>{product.description}</div>
              <div>{product.price}</div>
            </li>
          );
        })}
      </ol>

      );
}

export default ProductList;