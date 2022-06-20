import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import productJSON from "../../Mock/products.json";

const ItemDetailContainer = () => {  

  const [detail, setDetail] = useState([]);
  
  useEffect(() => {
    const comeProducts = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(productJSON[0])
      }, 2000);
    })

    comeProducts
    .then((response) => {
      setDetail(response);
    })
  }, []);

  return (
        <>
            <ItemDetail props={detail}/>
        </>
    )
}

export default ItemDetailContainer