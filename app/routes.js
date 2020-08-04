module.exports = function(app, passport, url) {
console.log('fichier ./route is ok!');

//ROAD TO SIGNUP 
app.get('/signup', function(req, res){
  //RENDER SIGNUP EJS
  res.render('LOGIN/signup.ejs', {message: req.flash('signupMessage')});
});




//ROAD APP POST SIGNUP [PASSPORT STRATEGIY AUTHENTICATE]
app.post('/signup', passport.authenticate('local-signup', {
  //SUCCESS REDIRECT PROFILE
successRedirect: '/profile',
//ERROR REDIRECT SIGNUP
failureRedirect: '/signup',
//FLASH
failureFlash: true
}));





 app.get('/login', function(req, res){
  res.render('LOGIN/login.ejs', {message:req.flash('loginMessage')});
 });





 app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
 }),




  function(req, res){
   if(req.body.remember){
    req.session.cookie.maxAge = 1000 * 60 * 3;
   }else{
    req.session.cookie.expires = false;
   }
   res.redirect('/');
  });




 app.get('/', function(req, res){
  res.render('ACCEUIL/index.ejs', {message: req.flash('signupMessage')});
 });




 app.get('/home', isLoggedIn, function(req, res){
    res.render('HOME/home.ejs', {
     user:req.user
    });
   });





 app.post('/', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/',
  failureFlash: true
 }));

 app.get('/profile', isLoggedIn, function(req, res){

  res.render('PROFILE/profile.ejs', {
   user:req.user
  });
 });

 app.get('/profile/build_post', isLoggedIn, function(req, res){
    res.render('BUILD_POST/build_post.ejs', {
     user:req.user
    });
   });

 app.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
 })


 
 app.get('/price', function(req, res){
  res.render('PRICE/price.ejs', {
   
  });
 });

 app.get('/article', function(req, res){
   
    
    res.render('ARTICLE/article_social_share.ejs', {
    
    });
   });

  
 app.get('/article2', function(req, res){
   res.render('ARTICLE/article_social_share_head.ejs', {
    
   });
  });

  
  
};

function isLoggedIn(req, res, next){
 if(req.isAuthenticated())
  return next();

 res.redirect('/');
}




