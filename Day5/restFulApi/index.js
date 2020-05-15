const express = require('express');
app = express();

app.get('/', (req, res) => {
    res.send('GET request to the homepage!!!')
});



app.get('/api/courses', (req, res) => {
  res.send([1,2,3]);
});

//for single parameter
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
});

//for multiple parameter
app.get('/api/courses/:year/:month', (req, res) => {
  res.send(req.params);
});

//how to read query perameter
app.get('/api/courses/:year/:month/:day', (req, res) => {
  res.send(req.query)
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listeming at ${port}`);
});