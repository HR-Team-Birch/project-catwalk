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
  const [currentStyle, setCurrentStyle] = useState(null);
  const [allStyles, setAllStyles] = useState(null);
  const [productFeatures, setProductFeatures] = useState([])


  //For when we want to switch products - not working on all widgets currently:
  const currentProductIndex = 0

  const getProducts = () => {
    axios.get(`${url}/products`)
      .then((result) => {
        //console.log('results', result)
        setProducts(result.data);
        setSelectedProduct(result.data[currentProductIndex]);
        setProductIdforQuestions(result.data[currentProductIndex].id);
        getReviewMeta(result.data[currentProductIndex].id);
        getAllStyles(result.data[currentProductIndex].id)
        getProductDetails(result.data[currentProductIndex].id)
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const getReviewMeta = (productId) => {
    axios.get(`/reviews/meta/?product_id=${productId}`)
      .then((meta) => {
        setReviewMeta(meta.data);
      })
      .catch((err) => console.error('meta error', err));
  };

  const getAllStyles = (productID) => {
    axios.get(`/products/${productID}/styles`)
    .then((response) => {
      //do some other stuff with it
      setAllStyles(response.data.results)
      setCurrentStyle(response.data.results[0])
    })
    .catch((error) => {
      console.error('ERROR IN CLIENT GET', error)
    })
  }

  const getProductDetails = (productID) => {
    axios.get(`/products/${productID}`)
    .then((response) => {
      setProductFeatures(response.data.features)
    })
    .catch((error) => {
      console.error('ERROR IN CLIENT GET', error)
    })
  }

  useEffect(() => {
    getProducts();

  }, []);


  return (
    <div>
      <h1>Kitty Catwalk</h1>
      {selectedProduct &&
        <Overview reviewMeta={reviewMeta} selectedProduct={selectedProduct} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} allStyles={allStyles} setAllStyles={setAllStyles} productFeatures={productFeatures}/>}
      <RelatedComparison/>
      <Questions productId={productIdforQuestions} product={selectedProduct}/>
      {productIdforQuestions && reviewMeta ?  <Reviews productId={productIdforQuestions} product={selectedProduct.name} reviewMeta={reviewMeta} getReviewMeta={getReviewMeta}/> : null }
    </div>
  );
}

export default App;