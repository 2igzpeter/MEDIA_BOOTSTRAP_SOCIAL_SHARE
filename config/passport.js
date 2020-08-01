var LocalStrategy = require("passport-local").Strategy;

var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);


module.exports = function(passport, app) {
console.log('fichier ./passport is ok!');


 passport.serializeUser(function(user, done){
  done(null, user.id);
 });

 passport.deserializeUser(function(id, done){
  connection.query("SELECT * FROM users WHERE id = ? ", [id],
   function(err, rows){
    done(err, rows[0]);
   });
 });

 passport.use(
  'local-signup',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },

  function(req, username, password, done){
   /* verif si username exist dans la bdd */
   connection.query("SELECT * FROM users WHERE username = ? ", 
   [username], function(err, rows){
    if(err)
     return done(err);
    if(rows.length){
     return done(null, false, req.flash('signupMessage', 'That is already taken'));
    }else{
      /* create new user mysql */
     var newUserMysql = {
      username: username,
      password: bcrypt.hashSync(password, null, null)
     };

     /* create profile visible 
        var $id_username = newUserMysql.username;
        app.get('/test' + $id_username, function(req, res){
          console.log('route test is ok ! ') ;
          console.log($id_username);
          res.render('test.ejs', {
          
        });
        });*/
     /* create profile visible */


     /* cmd sql */
     var insertQuery = "INSERT INTO users (username, password) values (?, ?)";
     /* cmd sql */


     /* insert into bdd */
     connection.query(insertQuery, [newUserMysql.username, newUserMysql.password],
      function(err, rows){
      newUserMysql.id = rows.insertId;
        console.log("new user mysql : " + newUserMysql.id);
       return done(null, newUserMysql);
      });
      /* insert into bdd */
    }
   });

   


  })
 );

 passport.use(
  'local-login',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){
   connection.query("SELECT * FROM users WHERE username = ? ", [username],
   function(err, rows){
    if(err)
     return done(err);
    if(!rows.length){
     return done(null, false, req.flash('loginMessage', 'No User Found'));
    }
    if(!bcrypt.compareSync(password, rows[0].password))
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));

    return done(null, rows[0]);
   });
  })
 );

 



 



 
};