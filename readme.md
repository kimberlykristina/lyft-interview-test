# Lyft Interview Test 

This repository contains code for the 2022 Lyft Apprenticeship assessment.

This application accepts a POST request to the `/test` route with the property `string_to_cut` in the body of the request and returns every third letter in the form of a JSON response `{return_string : "muydv"}`

All requests excluding POST requests sent to the `/test` route will return a 404 response. 

## Getting Started 

1. Clone this repository 
1. Install dependencies `npm install`
1. Start application `npm start`

## Testing It Out

1. Make POST request to `/test` route with `string_to_cut` prop in the body of the request `curl -X POST localhost:3000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'`

1. The response received should be `{return_string : "muydv"}`


