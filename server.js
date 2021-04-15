const express = require('express');
const app = express();



app.use('/public', express.static(process.cwd() + '/public'));
app.use('/views', express.static(process.cwd() + '/views'));

app.route('/_api/package.json')
  .get(function(req, res, next) {
    console.log('requested');
    fs.readFile(__dirname + '/package.json', function(err, data) {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });


app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/homepage.html');
    })


app.route('/drawAppPortfolio')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/views/drawAppPortfolio.html');
    })

app.route('/collidingGalaxiesPhotographyBlogWebsite')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/views/collidingGalaxiesPhotographyBlogWebsite.html');
    })

app.route('/collidingGalaxiesPhotographyBlogWebsite/galleries')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/views/collidingGalaxiesWebsite/galleries.html');
    })

app.route('/collidingGalaxiesPhotographyBlogWebsite/music')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/views/collidingGalaxiesWebsite/music.html');
    })

app.route('/collidingGalaxiesPhotographyBlogWebsite/writing')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/views/collidingGalaxiesWebsite/writing.html');
    })

app.route('/collidingGalaxiesPhotographyBlogWebsite/galleries/boy')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/views/collidingGalaxiesWebsite/galleries/boy.html');
    })

app.route('/collidingGalaxiesPhotographyBlogWebsite/galleries/room')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/views/collidingGalaxiesWebsite/galleries/room.html');
    })

app.route('/collidingGalaxiesPhotographyBlogWebsite/galleries/web')
    .get(function(req, res) {
      res.sendFile(process.cwd() + '/views/collidingGalaxiesWebsite/galleries/web.html');
    })



// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});