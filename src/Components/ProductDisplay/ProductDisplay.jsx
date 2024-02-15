import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
const {addToCart} = useContext(ShopContext)


  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₹{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          The brands product range is wide, ranging from jackets, blazers,
          shorts, denim shirts, T-shirts, polo shirts, and sweaters to briefs,
          and more that cater to your diverse requirements. These clothes are
          designed to match the latest styles, whether you are opting for casual
          or formal wear.
        </div>
        <div className="productdisplay-right-size">
          <h1> Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
           </div>
           </div>
          <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
       
          <p className="productdisplay-right-category">
            <span>Cartegory:</span>Women, T- Shirt,Crop Top
          </p>
          <p className="productdisplay-right-category">
            <span>Tags:</span>Morden, Latest items
          </p>
        
      </div>
    </div>
  );
};

export default ProductDisplay;
