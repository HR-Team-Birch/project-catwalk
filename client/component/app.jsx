import React, { useEffect, useState } from 'react';
import Overview from './widgets/overview/overview.jsx';
 import Reviews from './widgets/reviews/reviews.jsx';
import Questions from './widgets/questions/questions.jsx';
import RelatedComparison from './widgets/related/relatedCompare.jsx';
import axios from 'axios';
const url = 'http://localhost:3000';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productIdforQuestions, setProductIdforQuestions] = useState('')
  const [reviewMeta, setReviewMeta] = useState(null)

  const getProducts = () => {
    axios.get(`${url}/products`)
      .then((result) => {
        //console.log('results', result)
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
        // console.log(meta.data.reviews)
        setReviewMeta(meta.data);
      })
      .catch((err) => console.error(err));
  }


  useEffect(() => {
    getProducts();
    //console.log('products: ', products)
  }, []);

  useEffect(() => {
    getReviewMeta(productIdforQuestions)
  }, [[productIdforQuestions]])

  return (
    <div>
      <Overview reviewMeta={reviewMeta}/>
      <RelatedComparison/>
      <Questions productId={productIdforQuestions} product={selectedProduct}/>
      {/* <Reviews/> */}
      {productIdforQuestions ?  <Reviews productId={productIdforQuestions} product={selectedProduct.name}/> : null }
    </div>
  );
}

export default App;