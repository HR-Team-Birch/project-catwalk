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
  api.getAllProducts()
    .then((response) => {
    res.status(200).send(response.data)
    //res.sendStatus(200)
    })
    .catch((error) => {
      console.error('ERROR IN SERVER GET')
      res.sendStatus(400)
    })
})

//gets the data for the product with this ID
app.get('/products/:product_id', (req, res) => {
  api.getProductInfo(req.params.product_id)
  .then((response) => {
  res.status(200).send(response.data)
})
    .catch((error) => {
      console.error('ERROR IN SERVER GET', error)
      res.sendStatus(400)
    })
})

//gets all styles of the product with this ID
app.get('/products/:product_id/styles', (req, res) => {
  api.getAllStyles(req.params.product_id)
  .then((response) => {
  res.status(200).send(response.data)
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
    res.status(200).send(response.data)
    })
    .catch((error) => {
      console.error('ERROR IN SERVER GET')
      res.sendStatus(400)
    })
})

//adds a product to the cart
app.post('/cart', (req, res) => {
  console.log(req.body)
  api.addToCart(req.body)
  .then((response) => {
    res.status(201).send(response.data)
  })
  .catch((error) => {
    console.error('ERROR IN SERVER POST')
    res.sendStatus(400)
  })
})


//==========================================
// Reviews and Ratings Routes
//==========================================

//get list of reviews for a particular product (does not include reported reviews)
//get reviews for a particular product by id and sort order
app.get('/reviews/', (req, res) => {
  let product = req.query;
  api.getReviews(product)
  .then((data) => {
    res.send(data.data).status(200);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(400);
  });
});

app.get('/reviews/meta/', (req, res) => {
  let product = req.query;
  //invoke api request for specific product id
  api.getReviewsMeta(product)
    .then((data) => {
      res.send(data.data).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

app.post('/reviews', (req, res) => {
  api.postReview(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(418);
    });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  api.markReviewAsHelpful(req.params)
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.put('/reviews/:review_id/report', (req, res) => {
  api.reportReview(req.params)
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => res.sendStatus(418));
});


//==========================================
// Interactions Routes
//==========================================


//will receive following data in the req.body - element,widget,time (all strings, all required) for post into database
// app.post('/interactions', (req, res) => {
//   //invoke call
// })


// //==========================================
// // Questions And Answers Routes
// //==========================================


// Get all questions
app.get('/qa/questions/', (req, res) => {
 // need to setup multiple queries
  api.getQuestions(req.query)
    .then((results) => {
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
// need to get page and count query working
  api.getAnswers(req.params)
    .then((results) => {
      res.status(200);
      res.send(results.data);
    })
    .catch((err) => {
      //console.log('Error retrieving answers for question', err);
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
      //console.log('Error Posting Question to API', err);
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
      res.status(404);
      res.send('Error Posting an Answer');
    })
})

// Mark Question as Helpful

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  api.markQHelpful(req.params)
    .then((success) => {
      res.status(204);
      res.send('Successfully Marked Question Helpful');
    })
    .catch((err) => {
      res.status(404);
      res.send('Error Marking Question Helpful');
    })
})

// Report Question

app.put('/qa/questions/:question_id/report', (req, res) => {
  console.log('report question!!!!!!!!!!')
  api.reportQuestion(req.params)
    .then((success) => {
      res.status(204);
      res.send('Successfully Reported Question');
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send('Error Reporting Question');
    })
})

// Mark Answer as Helpful

app.put('/qa/answers/:answer_id/helpful', (req, res) => {

  api.markAHelpful(req.params)
    .then((success) => {
      res.status(204);
      res.send('Successfully Marked Answer Helpful');
    })
    .catch((err) => {
      res.status(404);
      res.send('Error Marking Answer Helpful');
    })
})

// Report Answer

app.put('/qa/answers/:answer_id/report', (req, res) => {
  api.reportAnswer(req.params)
    .then((success) => {
      res.status(204);
      res.send('Successfully Reported Answer');
    })
    .catch((err) => {
      res.status(404);
      res.send('Error Reporting Answer');
    })
})









app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})