import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import productJSON from "../../Mock/products.json";


const ItemListContainer = () => {  

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const comeProducts = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(productJSON)
      }, 2000);
    })

    comeProducts
    .then((response) => {
      setProducts(response);
    })
  }, []);

  return (
        <>
          <ItemList props={products} />
        </>
    )
}

export default ItemListContainer