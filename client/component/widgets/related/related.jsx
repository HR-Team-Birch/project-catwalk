import React from 'react'
const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
// const TOKEN = require('...../config.js')
const express = require('express');
const app = express();
let port = 3000;

const bodyParser = require('body-parser')
app.use(express.static('public'));
app.use(bodyParser.json());


//out to heroku
const relatedProductIds = (id) => {
  return axios.get(`${url}/products/${id}/related`,{
    headers: {
      'Authorization': `token ${config.TOKEN}`
    }
  })
  }

//server listener
app.get(`product/:product_id/related`, (req,res) => {
  console.log('we in app.get req', req)
})


class Related extends React.Component {
  render(){
    return (
      <div>some Cards here</div>
    )
  }
}

export default Related