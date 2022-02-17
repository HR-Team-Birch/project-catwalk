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
        //console.log('results', result)
        setProducts(result.data);
        setSelectedProduct(result.data[0]);
        setProductIdforQuestions(result.data[0].id)
      }).catch((error) => {
        console.log('Error: ', error);
      });
  };

  useEffect(() => {
    getProducts();
    //console.log('products: ', products)
  }, []);

  return (
    <div>
      {/* <Overview/>
      <RelatedComparison/> */}
      <Questions productId={productIdforQuestions} />
      {/* <Reviews/> */}
    </div>
  );
}

export default App;




// import React from 'react';
// import Overview from './widgets/overview/overview.jsx';
// import Reviews from './widgets/reviews/reviews.jsx';
// import Questions from './widgets/questions/questions.jsx';
// import RelatedComparison from './widgets/related/relatedCompare.jsx';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: []
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Overview />
//         <RelatedComparison/>
//         <Questions />
//         <Reviews />

//       </div>
//     )
//   }
// }

// export default App;