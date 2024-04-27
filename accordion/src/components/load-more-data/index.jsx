import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabeButton, setDisableButton] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      // const response = await axios.get(
      //     `https://dummyjson.com/products?limit=20&skip=${count==0?0:count*20}`
      //   );
      //   const result = await response.data;
      //   const response = await fetch(
      //     `https://dummyjson.com/products?limit=20&skip=${
      //       count === 0 ? 0 : count * 20
      //     }`
      //   );
      // const response = await fetch(
      //     `https://dummyjson.com/products?limit=20&skip=20`
      //   );
      //   const result = await response.json();
      const result = response.data;
      if (result && result.products && result.products.length) {
        setProducts(count===0?result.products:(prevData) => [...prevData, ...result.products]);
        // setProducts(result.products);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching products....");
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data....please wait!!!</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={`${item.id}-${index}`}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button disabled={disabeButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disabeButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
