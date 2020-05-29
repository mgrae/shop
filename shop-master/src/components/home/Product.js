import React from "react";

const Product = (props) => {
  const handleAddToBasket = () => {
    console.log(props.id);
    props.setIdBasket(props.id);
  };

  return (
    <div className="product">
      <div className="img-container">
        <img src={props.img} alt="" />
      </div>

      <div className="product-home-info">
        <div className="text">
          <h3>{props.name}</h3>
          <p>Price: {props.price} €</p>
        </div>

        <div className="icons">
          <div className="icon">
            <i
              className="fas fa-shopping-basket"
              onClick={handleAddToBasket}
              // key={product.idProducts}
            ></i>
          </div>
          <div className="icon">
            <i
              className="fas fa-arrow-right"
              onClick={() => props.handleShow(props.id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
