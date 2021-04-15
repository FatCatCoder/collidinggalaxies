const express = require('express');
const app = express();
const port = 3000;



app.use('/public', express.static(process.cwd() + '/public'));
app.use('/views', express.static(process.cwd() + '/views'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html')
});

app.get('/galleries', (req, res) => {
  res.sendFile(process.cwd() + '/views/galleries.html')
});

app.get('/galleries/people', (req, res) => {
  res.sendFile(process.cwd() + '/views/galleries/people.html')
});

app.get('/galleries/web', (req, res) => {
  res.sendFile(process.cwd() + '/views/galleries/web.html')
});

app.get('/music', (req, res) => {
  res.sendFile(process.cwd() + '/views/music.html')
});

app.get('/writing', (req, res) => {
  res.sendFile(process.cwd() + '/views/writing.html')
});


app.route('/_api/package.json')
  .get(function(req, res, next) {
    console.log('requested');
    fs.readFile(__dirname + '/package.json', function(err, data) {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });



// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.listen(port, function () {
  console.log('Node.js listening ...');
});