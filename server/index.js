const express = require('express');

const app = express();
let port = 3000;

app.use(express.static('public'));
app.use(express.json());





app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})