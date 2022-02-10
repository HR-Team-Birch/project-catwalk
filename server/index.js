const express = require('express');
const api = require('./apiconnect.js')

const app = express();
let port = 3000;

app.use(express.static('public'));
app.use(express.json());

//==========================================
// Products Routes
//==========================================

//gets the list of products
app.get('/products', (req, res) => {
  console.log('PRODUCTS');
  api.getAllProducts()
    .then((results) => {
      console.log('results', results);
      res.status(200).send(results.data);
    })
    .catch((error) => {
      console.error('ERROR IN SERVER GET', error)
      res.sendStatus(400)
    })
})

//gets the data for the product with this ID
app.get('/products/:product_id', (req, res) => {
  api.getProductInfo(req.params.id)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.error('ERROR IN SERVER GET', error)
      res.sendStatus(400)
    })
})

//gets all styles of the product with this ID
app.get('/products/:product_id/styles', (req, res) => {
  api.getAllStyles(req.params.id)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.error('ERROR IN SERVER GET', error)
      res.sendStatus(400)
    })
})

//retrieves list of products added to the cart
app.get('/cart', (req, res) => {
  api.getItemsInCart()
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      console.error('ERROR IN SERVER GET', error)
      res.sendStatus(400)
    })
})

//adds a product to the cart
app.post('/cart', (req, res) => {
  api.addToCart(item)
    .then((response) => {
      res.status(201).send(response)
    })
    .catch((error) => {
      console.error('ERROR IN SERVER GET', error)
      res.sendStatus(400)
    })
})

//returns ids of porduct related to specified product
//param must be an INTEGER
// app.get(`/products/:productId/related`, (req, res) =>{
//   //invoke call
//   .then((res) =>console.log(res))
//   .catch((error) => console.log(error))
// })

//==========================================
// Reviews and Ratings Routes
//==========================================

//get list of reviews for a particular product (does not include reported reviews)
//get reviews for a particular product by id and sort order
// app.get('/reviews/:id', (req, res) => {
//   let product = req.params;
//   //invoke api request
//   .then((data) => {
//     //console.log('data from get reviews', data);
//     res.send(data).status(200);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.sendStatus(400);
//   });
// });

// app.get('/reviews/meta/:id', (req, res) => {
//   let productId = req.params;
//   //invoke api request for specific product id
//   .then((data) => {
//     //console.log('data from get reviews'meta, data);
//     res.send(data).status(200);
//   })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(400);
//     });
// });

// app.post('/reviews', (req, res) => {
//   let newReview = req.body;
//   //invoke api request handler for posting reviews to api
//     //fires off a get request to save new review in database
//   .then((data) => {
//      //console.log('data from post reviews', data);
//     res.sendStatus(201);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.sendStatus(418);
//   });
// });

// app.put('/reviews/:review_id/helpful', (res, req) => {
//   let updateReviewWithID = req.params;
//   //invoke api request handler to update review in api
//     //fires off a get request to save updated review in database
//   .then((data) => {
//      //console.log('data from put reviews', data);
//     res.sendstatus(204);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.sendStatus(404);
//   });
// });

// app.put('/reviews/:review_id/report', (req, res) => {
//   //call apiconnect fun
//   .then((data) {
//     console.log('data inside reported review put', data);
//     res.sendStatus(204);
//   })
//   .catch((err) => console.error(err));
// });

//==========================================
// Interactions Routes
//==========================================


//will receive following data in the req.body - element,widget,time (all strings, all required) for post into database
app.post('/interactions', (req, res) => {
  //invoke call
})


//==========================================
// Questions And Answers Routes
//==========================================


// Get all questions
app.get('/qa/questions/', (req, res) => {
  console.log('trying to get questions')
  console.log('request query', req.query);

  api.getQuestions(req.query)
    .then((results) => {
      //console.log('results', results);
      res.status(200);
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send('Error retrieving questions');
    })
})

// Get answers for given question

app.get('/qa/questions/:question_id/answers', (req, res) => {

  api.getAnswers(req.params)
    .then((results) => {
      let resultsJSON = JSON.stringify(results);
      res.status(200);
      res.send(resultsJSON);
    })
    .catch((err) => {
      console.log('Error retrieving answers for question', err);
      res.status(404);
      res.send('Error retrieving answers for question');
    })
})

// Add a question

app.post('/qa/questions', (req, res) => {

  api.addQuestion(req.body)
    .then((success) => {
      res.status(201);
      res.send('Successfully Posted A Question');
    })
    .catch((err) => {
      console.log('Error Posting Question to API', err);
      res.status(404);
      res.send('Error Posting A Question');
    })
})

// Add an answer

app.post('/qa/questions/:question_id/answers', (req, res) => {

  api.addAnswer(req.params, req.body)
    .then((success) => {
      res.status(201);
      res.send('Successfully Posted an Answer');
    })
    .catch((err) => {
      console.log('Error Posting Answer to API', err);
      res.status(404);
      res.send('Error Posting an Answer');
    })
})

// Mark Question as Helpful

app.put('/qa/questions/:question_id/helpful', (req, res) => {

  api.markQHelpful(req.params)
    .then((success) => {
      res.status(201);
      res.send('Successfully Marked Question Helpful');
    })
    .catch((err) => {
      console.log('Error Marking Question Helpful to API', err);
      res.status(404);
      res.send('Error Marking Question Helpful');
    })
})

// Report Question

app.put('/qa/questions/:question_id/report', (req, res) => {

  api.reportQuestion(req.params)
    .then((success) => {
      res.status(201);
      res.send('Successfully Reported Question');
    })
    .catch((err) => {
      console.log('Error Reporting Question to API', err);
      res.status(404);
      res.send('Error Reporting Question');
    })
})

// Mark Answer as Helpful

app.put('/qa/answers/:answer_id/helpful', (req, res) => {

  api.markAHelpful(req.params)
    .then((success) => {
      res.status(201);
      res.send('Successfully Marked Answer Helpful');
    })
    .catch((err) => {
      console.log('Error Marking Answer Helpful', err);
      res.status(404);
      res.send('Error Marking Answer Helpful');
    })
})

// Report Answer

app.put('/qa/answers/:answer_id/report', (req, res) => {

  api.reportAnswer(req.params)
    .then((success) => {
      res.status(201);
      res.send('Successfully Reported Answer');
    })
    .catch((err) => {
      console.log('Error Reporting Answer', err);
      res.status(404);
      res.send('Error Reporting Answer');
    })
})









app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})