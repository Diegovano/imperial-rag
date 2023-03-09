const express = require('express')

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('Hello from the server side!');

}) // Routing in Express js ( the second argument is )

const port = 3000;
app.listen(port, () => {
  console.log( ' App running on port ')
});
