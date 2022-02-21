import React, { useEffect, useState } from 'react';
import Overview from './widgets/overview/overview.jsx';
import Reviews from './widgets/reviews/reviews.jsx';
import Questions from './widgets/questions/questions.jsx';
import RelatedComparison from './widgets/related/relatedCompare.jsx';
const axios = require('axios');
const url = 'http://localhost:3000';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productIdforQuestions, setProductIdforQuestions] = useState('')

  const getProducts = () => {
    axios.get(`${url}/products`)
      .then((result) => {
        setProducts(result.data);
        setSelectedProduct(result.data[0]);
        setProductIdforQuestions(result.data[0].id)
      }).catch((error) => {
        console.log('Error: ', error);
      });
  };

  const getReviewMeta = () => {
    axios.get(`/reviews/meta/?product_id=${productIdforQuestions}`)
      .then((meta) => {
        setReviewMeta(meta.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Overview/>
      <RelatedComparison/>
      <Questions productId={productIdforQuestions} product={selectedProduct}/>
      {/* <Reviews/> */}
      {productIdforQuestions ?  <Reviews productId={productIdforQuestions} product={selectedProduct.name}/> : null }
    </div>
  );
}

export default App;