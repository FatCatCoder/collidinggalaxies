var express = require('express');

absPath = __dirname = '/views/homepage.html';
absPath = __dirname = '/views/drawAppPortfolio.html';
absPath = __dirname = '/views/collidingGalaxiesPhotographyBlogWebsite.html';
absPath = __dirname = '/views/collidingGalaxiesWebsite/galleries.html';
absPath = __dirname = '/views/collidingGalaxiesWebsite/music.html';
absPath = __dirname = '/views/collidingGalaxiesWebsite/writing.html';
absPath = __dirname = '/views/collidingGalaxiesWebsite/galleries/boy.html';
absPath = __dirname = '/views/collidingGalaxiesWebsite/galleries/room.html';
absPath = __dirname = '/views/collidingGalaxiesWebsite/galleries/web.html';


app.get("/", function(req, res){
  res.sendFile(absPath);
});

app.get("/drawAppPortfolio", function(req, res){
  res.sendFile(absPath);
});

app.get("/collidingGalaxiesPhotographyBlogWebsite", function(req, res){
  res.sendFile(absPath);
});

app.get("collidingGalaxiesPhotographyBlogWebsite/galleries", function(req, res){
  res.sendFile(absPath);
});

app.get("collidingGalaxiesPhotographyBlogWebsite/music", function(req, res){
  res.sendFile(absPath);
});

app.get("collidingGalaxiesPhotographyBlogWebsite/writing", function(req, res){
  res.sendFile(absPath);
});

app.get("collidingGalaxiesPhotographyBlogWebsite/galleries/boy", function(req, res){
  res.sendFile(absPath);
});

app.get("collidingGalaxiesPhotographyBlogWebsite/galleries/room", function(req, res){
  res.sendFile(absPath);
});

app.get("collidingGalaxiesPhotographyBlogWebsite/galleries/web", function(req, res){
  res.sendFile(absPath);
});