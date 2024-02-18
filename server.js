const express = require('express')
var axios = require("axios")
const path=require("path")
const app = express()
const port = 3001

app.get('/', (req, res) => {
    return res.sendFile('public/index.html',{root : __dirname});

})


app.get('/searchword', async (req, res) => {
  try {
    const response = await axios.get('https://twinword-word-graph-dictionary.p.rapidapi.com/definition/', {
      params: { entry: req.query.entry },
      headers: {
        'X-RapidAPI-Key': '4fce01963amsh4cc5c4b638be63bp1ee122jsn2c5cb8993139',
        'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
      }
    });

    console.log(response.data);
    res.json(response.data); // Assuming you want to send the response back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' }); // Adjust the error handling as needed
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3001`)
})
