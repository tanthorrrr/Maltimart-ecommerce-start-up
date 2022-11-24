import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList = ({ data }) => {
     return (
          <>
               {data.map((item, index) => (
                    <ProductsCard item={item} key={index} />
               ))}
          </>
     );
};

export default ProductsList;
