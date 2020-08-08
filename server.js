const express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
const path = require('path');
var url = require("url");
var mysql = require('mysql');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 8080;

var passport = require('passport');
var flash = require('connect-flash');

require('./config/passport')(passport, app);



app.set('view engine', 'ejs');


/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


//APP SET ENGINE EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
 ;

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
 extended: true
}));

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

app.use(session({
 secret: 'justasecret',
 resave:true,
 saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))


app.use(cors());


//set public folder as static folder for static file///////////////////
app.use(express.static('public'));
////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
require('./app/routes.js')(app, passport, url);
/////////////////////////////////////////////////////////////////////////
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_login"
 });
////////////////////////////////////////////////////////////////////////////
//ROAD TO JOURNAL 12
app.get('/journal12',(req, res) => {
 
  //render journal10.hbs file
  res.render('JOURNAL/journal.ejs',{
  //get value from 
  name: " hello_world"
  });
  //CONNECTION FROM BDD JOURNAL UTILISATEUR/ TO ROAD>>>>>> /TOTAL /DEFINIE SUR PAYS FRANCE
  values= "hello_world";
  ////////////////////////////////////////////////////////////////////////////////////////
  console.log("VALEUR MONDIAL POUR: "+ values);
  ////////////////////////////////////////////////////////////////////////////////////////
  app.get('/total', function(req, resp){
  console.log("WELCOME FROM THE ROAD TOTAL")
  var sql = mysql.format("SELECT * FROM viewpost WHERE helloWorld=?", [values]);
  connection.query(sql, function(error, rows, fields){
  if(error){
  console.log('error');
  }else{
  console.log('successful\n');
  console.log(rows);
  console.log("LES DATAS WORLD :");
  console.log(" commance sql : " +sql);
  console.log(" values: " + values);
  resp.send(rows);
  }
  })
  })
  
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  //FILTER CATEGORIE ECONOMIE +  (REQ.BODY.NAME)
  
  console.log("VALEUR Mondial ECONOMIE: "+values);
  app.get('/filterEconomie', function(req, resp){
  console.log("WELCOME FROM THE ROAD FILTER ECONOMIE + VALUE UTILISATEUR")
  
  var filterEconomie= mysql.format("SELECT * FROM viewpost WHERE MATCH(titre_article, url_post, url_img, url_video, description_article, name_chaine,pays,categorie, name_reporter,users,number_post,continent,region,departement,ville,helloWorld,text_presentation) AGAINST (?) AND categorie='economie' ",[values]);
  connection.query(filterEconomie, function(error, rows, fields){
  if(error){
  console.log('error');
  }else{
  console.log('successful\n');
  console.log(rows);
  console.log("LES DATAS ECONOMIE + :"+ values);
  console.log(" commance sql : " +filterEconomie);
  console.log(" values: " + values);
  resp.send(rows);
  }
  })
  })
  
  
  
  //FILTER CATEGORIE POLITIQUE +  (REQ.BODY.NAME)
  
  console.log("VALEUR Mondial POLITIQUE: " + values);
  
  app.get('/filterPolitique', function(req, resp){
  console.log("WELCOME FROM THE ROAD FILTER POLITIQUE + VALUE UTILISATEUR")
  
  var filterPolitique= mysql.format("SELECT * FROM viewpost WHERE MATCH(titre_article, url_post, url_img, url_video, description_article, name_chaine,pays,categorie, name_reporter,users,number_post,continent,region,departement,ville,helloWorld,text_presentation) AGAINST (?) AND categorie='politique' ",[values]);
  connection.query(filterPolitique, function(error, rows, fields){
  if(error){
  console.log('error');
  }else{
  console.log('successful\n');
  console.log(rows);
  console.log("LES DATAS POLITIQUE + :"+ values);
  console.log(" commance sql : " +filterPolitique);
  console.log(" values: " + values);
  resp.send(rows);
  }
  })
  })
  
  
  
  
  //FILTER CATEGORIE EVENEMENT+  (REQ.BODY.NAME)
  
  console.log("VALEUR Mondial EVENEMENT: "+values);
  
  app.get('/filterEvenement', function(req, resp){
  console.log("WELCOME FROM THE ROAD FILTER EVENEMENT + VALUE UTILISATEUR")
  
  var filterEvenement= mysql.format("SELECT * FROM viewpost WHERE MATCH(titre_article, url_post, url_img, url_video, description_article, name_chaine,pays,categorie, name_reporter,users,number_post,continent,region,departement,ville,helloWorld,text_presentation) AGAINST (?) AND categorie='event' ",[values]);
  connection.query(filterEvenement, function(error, rows, fields){
  if(error){
  console.log('error');
  }else{
  console.log('successful\n');
  console.log(rows);
  console.log("LES DATAS EVENEMENT + :"+ values);
  console.log(" commance sql : " +filterEvenement);
  console.log(" values: " + values);
  resp.send(rows);
  }
  })
  })
  
  
  
  //FILTER CATEGORIE SPORT+  (REQ.BODY.NAME)
  
  console.log("VALEUR Mondial SPORT: " + values);
  
  app.get('/filterSport', function(req, resp){
  console.log("WELCOME FROM THE ROAD FILTER SPORT + VALUE UTILISATEUR")
  
  var filterSport= mysql.format("SELECT * FROM viewpost WHERE MATCH(titre_article, url_post, url_img, url_video, description_article, name_chaine,pays,categorie, name_reporter,users,number_post,continent,region,departement,ville,helloWorld,text_presentation) AGAINST (?) AND categorie='sport' ",[values]);
  connection.query(filterSport, function(error, rows, fields){
  if(error){
  console.log('error');
  }else{
  console.log('successful\n');
  console.log(rows);
  console.log("LES DATAS SPORT + :"+ values);
  console.log(" commance sql : " +filterSport);
  console.log(" values: " + values);
  resp.send(rows);
  }
  })
  })
  
  
  
  
  
  //FILTER CATEGORIE FAIS+  (REQ.BODY.NAME)
  
  console.log("VALEUR Mondial FAIS DIVER: "+values);
  
  app.get('/filterFaisDivers', function(req, resp){
  console.log("WELCOME FROM THE ROAD FILTER FAIS DIVERS + VALUE UTILISATEUR")
  
  var filterFaisDivers= mysql.format("SELECT * FROM viewpost WHERE MATCH(titre_article, url_post, url_img, url_video, description_article, name_chaine,pays,categorie, name_reporter,users,number_post,continent,region,departement,ville,helloWorld,text_presentation) AGAINST (?) AND categorie='Fais Divers' ",[values]);
  connection.query(filterFaisDivers, function(error, rows, fields){
  if(error){
  console.log('error');
  }else{
  console.log('successful\n');
  console.log(rows);
  console.log("LES DATAS FAIS DIVERS + :"+ values);
  console.log(" commance sql : " +filterFaisDivers);
  console.log(" values: " + values);
  resp.send(rows);
  }
  })
  })
  
  //INPUT VARIABLE UTILISATEUR
  
  app.get('/inputUtilisateur', function(req, resp){
  console.log("WELCOME FROM THE ROAD VARIABLE UTILISATEUR")
  var filterInput = mysql.format("SELECT * FROM viewpost WHERE MATCH(titre_article, url_post, url_img, url_video, description_article, name_chaine,pays,categorie, name_reporter,users,number_post,continent,region,departement,ville,helloWorld,text_presentation) AGAINST (?)", [values]);
  
  connection.query(filterInput, function(error, rows, fields){
  if(error){
  console.log('error');
  }else{
  console.log('successful\n');
  console.log(rows);
  console.log("WELCOME FROM: ROAD CONTINENT IS READY!");
  console.log("LES DATAS CONTINENT:");
  console.log(" commance sql : " +filterInput);
  console.log(" values: " + values);
  resp.send(rows);
  }
  })
  })
  
  });
  
  
  
  
  
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
                                            // FIN ROAD TO JOURNAL 12
                                            // APP GET
                                            
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
                                            // ROAD TO JOURNAL 12
                                            // APP POST
                                            
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  
  //CONNECTION BDD JOURNAL UTILISATEUR // TO ROAD >>>>>/JOURNAL12
  app.post('/journal12',(req, res) => {
  //render file journall10.hbs
  res.render('JOURNAL/journal.ejs',{
  //get value from filter in html journal12.hbs
  name : req.body.filter
  });
  
  
  
  //recup value from journal12 APP.POST RUCUP VARIABLE UTILISATEUR TO BDD 
  values= req.body.filter;
  console.log("values: " + values);
  
  
  
  //FIN ROUTE JOURANL 12 APP POST
  });
  
  
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
                                            // ROAD TO JOURNAL 12
                                            // APP POST
                                            
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

                                          // ROAD TO RESULT
                                          // APP POST
                                          
/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


                        

// RESULT
app.post('/result',isLoggedIn, function(req, res) {
    //FUNCTION INPUT POST ONCLICK []
    
    var id_login= [req.user.id];
    
    //////////////////////////////////////////////////////////////////
  
    console.log(id_login)
    
      //////////////////////////////////////////////////////////////////
      
     //CREATE RANDOM ID
     var id_int_random_post = Math.floor(Math.random() * 1000000000);
     console.log("/////////////////////id_int_random_article: " + id_int_random_post);
      var number_post = id_int_random_post;
  
    //////////////////////////////////////////////////////////////////
  
                  var titre = [req.body.post_titre];
                  var image = [req.body.post_image];
                  var video = [req.body.post_video];
                  var date = new Date();
                  var resume = [req.body.post_resume];
                  var socity = [req.body.post_socity];
                  var categorie= [req.body.post_categorie];
                  var reporter = [req.body.post_reporter];
                  var continent = [req.body.post_continent];
                  var pays = [req.body.post_pays];
                  var region = [req.body.post_region];
                  var departement = [req.body.post_departement];
                  var ville = [req.body.post_ville];
                  var text_presentation = [req.body.post_presentation];
  
    
                  console.log("titre: " + titre)
                  console.log("youtube: " + image)
                  console.log('video: ' + video)
                  console.log("date: " + date)
                  console.log("resume: " + resume)
                  console.log("socity:" + socity)
                  console.log("categorie: " + categorie)
                  console.log('reporter: ' + reporter)
                  console.log("id_login: " + id_login)
                  console.log("number post:" + number_post)
                  console.log('continent: ' + continent)
                  console.log('pays: ' + pays)
                  console.log('region: ' + region)
                  console.log('departiment:' + departement)
                  console.log('ville:' + ville)
                  console.log('text_presentation:' + text_presentation)
  
    
  
    
    function insertPost(titre, image, video, date, resume, socity, categorie, reporter, id_login, number_post, continent, pays, region,departement, ville, text_presentation){
    
    //////////////////////////////////////////////////////////////////
    
                  var titre = [req.body.post_titre];
                  var image = [req.body.post_image];
                  var video = [req.body.post_video];
                  var date = new Date();
                  var resume = [req.body.post_resume];
                  var socity = [req.body.post_socity];
                  var categorie= [req.body.post_categorie];
                  var reporter = [req.body.post_reporter];
                  var id_login = [req.user.id];
                  var number_post =id_int_random_post ;
                  var continent = [req.body.post_continent];
                  var pays = [req.body.post_pays];
                  var region = [req.body.post_region];
                  var departement = [req.body.post_departement];
                  var ville = [req.body.post_ville]; 
                  var hello_world = ["hello_world"];
                  var text_presentation = [req.body.post_presentation];

                  
    
                  console.log("titre: " + titre)
                  console.log("image: " + image)
                  console.log("video: " + video)
                  console.log("date: " + date)
                  console.log("resume: " + resume)
                  console.log("socity: " + socity)
                  console.log('pays: ' + pays)
                  console.log("categorie: " + categorie)
                  console.log("reporter: "+ reporter)
                  console.log("id_login: " + id_login)
                  console.log("number post" + number_post)
                  console.log('continent: ' + continent)
                  console.log('region: ' + region)
                  console.log('departement:' + departement)
                  console.log('ville:' + ville)
                  console.log('hello world:' + hello_world)
                  console.log('text presentation:' + text_presentation)
    
    
    //////////////////////////////////////////////////////////////////
                  
                                        //CREATION DE LA ROUTE ARTICLE POUR MA FICHE ARTICLE
                                        //AJOUTER UN ID POUR MA ROUTE
                                        //RANDOM ID
                                        //SQL INSERT URL ROUTE
  
                                        //CREATE RANDOM ID
                                      var id_int_random_article = Math.floor(Math.random() * 1000000000);
                                      console.log("/////////////////////id_int_random_article: " + id_int_random_article);
                                      //CREATE RANDOM TEXT ID[USER]
                                      var id_txt_random_article =  req.user.id + "_";
                                      console.log("////////////////////id_txt_random_article: " + id_txt_random_article);
                                      //VARIABLE RANDOM ID 
                                      var $random_id = id_txt_random_article + id_int_random_article ;
                                      console.log("////////////////////$random_id: " + $random_id);
                                      //VARIABLE URL ARTICLE
                                      var url_id_article = "/articles_" + $random_id;
                                      console.log("url_id_article: " + url_id_article);
                          
  
  
  
  
                      var sql = "INSERT INTO `viewpost` (`titre_article`, `url_post`, `url_img`, `url_video`, `date_sortie`, `description_article`, `name_chaine`,`pays`,`categorie`, `name_reporter`,`users` ,`number_post`,`continent`,`region`,`departement`,`ville`,`helloWorld`,`text_presentation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
          
          
    
    
                         connection.query(sql, [titre, url_id_article, image, video, date, resume, socity, pays, categorie, reporter, id_login, number_post, continent, region, departement, ville, hello_world, text_presentation], function (err, result) {
    
            
                        // console.log(err);
                          if (err) throw err;
                          console.log("//////////////////////////////////////////////NEW POST INSERT INTO TABLE VIEWPOST");
                          console.log('server js function PostInsert ok! /////////////////////////////////////////////////////////')
                        });
    
            
                        console.log(req.body.post_socity, req.body.post_image, req.body.post_video, req.body.post_resume, req.body.post_titre, req.body.post_categorie, req.body.post_reporter, req.user.id, number_post, continent, pays, region, departement, ville, hello_world, text_presentation)
            
                        //console.log(newPostInsert())
  
  
                                    //////////////////////////////////////////////////////////////////
  
                                  //////////////////////////////////////////////////////////////////
                                  
  
                                  app.get('/total_user_posts_img', function(req, resp){
                                    console.log("WELCOME FROM THE ROAD TOTAL")
                                    var sql = mysql.format("SELECT url_img FROM viewpost WHERE number_post=?  ", [number_post]);
                                    
                                    connection.query(sql, function(error, rows, fields){
                                    if(error){
                                    console.log('error');
                                    }else{
                                    console.log('successful\n');
                                    console.log(rows);
                                    console.log("////////////////////////////////////////////////////////////////////////////////////////////LES DATAS POSTS IMG :"+rows);
                                    console.log(" /////////////////////////////////////////////////////////////////////////////////////////////commance sql : " +sql);
                                    console.log(" //////////////////////////////////////////////////////////////////////ROUTE IMG POST: " + number_post);
                                    resp.send(rows);
                                    }
                                    })
                                    })
      
  
  
                              //////////////////////////////////////////////////////////////////
  
  
                              app.get('/total_user_posts', function(req, resp){
                                console.log("WELCOME FROM THE ROAD TOTAL")
                                var sql = mysql.format("SELECT * FROM viewpost WHERE users=? ", [id_login]);
                                
                                connection.query(sql, function(error, rows, fields){
                                if(error){
                                console.log('error');
                                }else{
                                console.log('successful\n');
                                console.log(rows);
                                console.log("////////////////////////////////////////////////////////////////////////////////////////////LES DATAS USER POSTS :");
                                console.log(" /////////////////////////////////////////////////////////////////////////////////////////////commance sql : " +sql);
                                console.log(" //////////////////////////////////////////////////////////////////////ROUTE TOTAL USER POSTS CREATED: " + id_login);
                                resp.send(rows);
                                }
                                })
                                })
                                
  
  
                            //////////////////////////////////////////////////////////////////
  
                            //////////////////////////////////////////////////////////////////
                            //COMPTEUR DE VUE 
                            var userCount = 0;
                            //ROUTE ARTICLE 
                            app.get('/articles_'+$random_id, (req, res) => {
                              //VARIABLE URL
                              var pathname = url.parse(req.url).pathname;
                               if (pathname != "/favicon.ico") {
                               userCount++;
     
                                }//FIN COMPTEUR DE VUE
                                //VARIABLE INSERT NBR VUE INTO TABLE VIEWPOST
                                var sql = "INSERT INTO `viewpost` (`nbr_vues`) VALUES (?) ";

                                //CONNEXION DATABASE & INSERT VARIABLE USERCOUNT
                                connection.query(sql, [userCount, $random_id], function (err, result) {
                                  
                                          
                              // console.log(err);
                                if (err) throw err;
                                console.log("//////////////////////////////////////////////NEW VUES INSERT INTO TABLE VIEWPOST");
                              });
      
      
      
                              
                            //RENDER ARTICLE
                            res.render('ARTICLE/article_social_share_head.ejs',{
                              //GET VALUE ON ARTICLE PAGE
                              userCount:userCount, video:video, image:image, date:date, titre:titre, resume:resume, reporter:reporter, socity:socity, categorie:categorie, continent:continent, pays:pays, region:region, departement:departement, ville: ville, text_presentation
                            });


                            //////////////////////////////////////////////////////////////////
                            app.get('/call_article_comments' , function(req, resp){
                              console.log("WELCOME FROM THE ROAD COMMENTS")
                              var sql = mysql.format("SELECT * FROM article_comments WHERE id_article = ? ", [$random_id]);
                              
                              connection.query(sql, function(error, rows, fields){
                              if(error){
                              console.log('error');
                              }else{
                              console.log('successful\n');
                              console.log(rows);
                              console.log("LES DATAS COMMENTS :");
                              console.log(" commance sql : " +sql);
                              resp.send(rows);
                              }
                              })
                              })
                              
                            //////////////////////////////////////////////////////////////////



                              //////////////////////////////////////////////////////////////////
                                                          
                              app.post('/article_comments', function(req, resp){
                                console.log("WELCOME TO ARTICLE COMMENTS POST");
                                //CATCH DATA ARTICLE COMMENTS
                                var recup_comments_value_article = req.body.post_comments;
                                //VARIABLE NEW DATE COMMENT
                                var date_user_comment = new Date();
                                console.log("/////////////////////////////////////////USER COMMENT DATE: " + date);

                                
                                    //CONSOLE LOG DATA
                                    console.log(recup_comments_value_article);

                                    //VARIABLE INSERT
                                    var sql = "INSERT INTO `article_comments` (`comments`, `id_article`, `date_comment`) VALUES (?,?,?)";

                                    //CONNEXION DATABASE
                                    connection.query(sql, [recup_comments_value_article, $random_id, date_user_comment], function (err, result) {
                                      
                                              
                                  // console.log(err);
                                    if (err) throw err;
                                    console.log("//////////////////////////////////////////////NEW COMMENT INSERT INTO TABLE COMMENTS");
                                    console.log('SERVER ARTICLES COMMENTS IS OK! /////////////////////////////////////////////////////////');
                                  });





                                       
                                


                                
                                  resp.redirect('/articles_'+$random_id);
                                });


                                    //////////////////////////////////////////////////////////////////


                          });

                            
                                  
                             
                      
  
                      
    }//FIN FUNCTION INSERT POST
    insertPost();
    
    
  
    
          res.redirect('/profile/build_post');
    });           
    
    
    
    //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
                                            // FIN ROAD TO RESULT
                                            // APP POST
                                            
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                 
  
 
 //ROAD TO PROFILE
 app.get('/profile/my_posts', isLoggedIn,(req, res) => {
 
   //REQ ID = ID USER LOG IN
   id_login = req.user.id;
   
   //RESPONSE RENDER FUNCTION(VIEW .EJS, {CLEF VALEUR USER OBJET})
   res.render('PROFILE/my_posts.ejs',{user:req.user});
 
    //VARIABLE VALUES DEFINITION REQ USER ID = FOREING KEY
    values= req.user.id;
   
 
    console.log("/////////////////////////////////////////////////////////////REQ USER: ")
    //SHOW USER REQ .USER.
    console.log(req.user)
    //SHOW VARIABLE VALUES
    console.log("////////////////////////////////////////////////////values : " + values)
    //FILTER VIEW ROAD FROM BDD 
    console.log(" ///////////////////////////////////////////////////User_id: " + req.user.id)
    //FILTER VIEW VALUE
    console.log("////////////////////////////////////////////////////VALEUR FOREINK: "+values);
 
      
   app.get('/filterView', function(req, resp){
           console.log("WELCOME FROM THE ROAD FILTER VIEW")
 
                   var filterView= mysql.format("SELECT * FROM viewpost WHERE users=?" ,[values]);
                   connection.query(filterView, function(error, rows, fields){
                   if(error){
                   console.log('error');
                   }else{
                   console.log('successful\n');
                   console.log(rows);
                   console.log("LES DATAS FOREING KEY: "+ values);
                   console.log(" commance sql : " +filterView);
                   console.log(" values: " + values);
                   resp.send(rows);
              }
             })
           })
   
 });
                             

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





  function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
     return next();
   
    res.redirect('/');
   }



app.listen(port);
console.log("Port: " + port);