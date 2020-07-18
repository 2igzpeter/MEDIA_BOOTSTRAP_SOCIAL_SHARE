
function evenement(){
          document.getElementById("container").innerHTML = "";

//LE TABLEAU JS EST PASSé DANS UNE FONCTION
function afficherEvent(tableauDeFilms) {
    tableauDeFilms.forEach(function (journalUtilisateur) {





        //JE CREE UN DIV CONTAINER JOURNAL
        var containerJournal= document.createElement('div');
        containerJournal.setAttribute('id', 'container_journal');
        container.appendChild(containerJournal);

        //ESPACE
        espace_1 = document.createElement('hr');
        espace_1.setAttribute('id', 'espace_1');
        containerJournal.appendChild(espace_1);
        

        //CONTAINER CONTENT JOURNAL DANS CONTAINER JOURNAL
        var container_content = document.createElement('div');
        container_content.setAttribute('id', 'container_content_journal');
        containerJournal.appendChild(container_content);


        


        //CONTAINER RESUME DANS CONTAINER CONTENT
        var container_resume_journal=document.createElement('div');
        container_resume_journal.setAttribute('id', 'container_resume_journal');
        container_content.appendChild(container_resume_journal);

        //CONTAINER TITRE + LIEN DANS CONTAINER RESUME JOURNAL
        var container_titre_et_btn_link = document.createElement('div');
        container_titre_et_btn_link.setAttribute('id', 'container_titre_et_btn_link');
        container_resume_journal.appendChild(container_titre_et_btn_link);
        

        //CONTAINER TITRE DANS CONTAINER TITRE ET LINK
        var container_titre_post = document.createElement('div');
        container_titre_post.setAttribute('id', 'container_titre_post');
        container_titre_et_btn_link.appendChild(container_titre_post);



        //CONTAINER IMG_JOURNAL DANS CONTAINER TITRE ET POST DANS TITRE ET BTN LINK
        var container_img_journal=document.createElement('div');
        container_img_journal.setAttribute('id', 'img_container_journal');
        container_titre_post.appendChild(container_img_journal);

        //JE CREE DES IMG  DANS CONTAINER IMG JOURNAL
        var journalImage = document.createElement('img');
        journalImage.setAttribute('id', 'img_journal');
        journalImage.setAttribute('src', journalUtilisateur.url_img);
        container_img_journal.appendChild(journalImage);



        //CREATION LINK
        var link_journal=document.createElement('a');
        link_journal.setAttribute('id', 'link_journal');
        link_journal.setAttribute('href',journalUtilisateur.url_post);
        container_titre_post.appendChild(link_journal);

        //JE CREE DES ZONES DE TEXTE 
       
        var journalName = document.createTextNode(journalUtilisateur.name_chaine);
        link_journal.appendChild(journalName);




        //CONTAINER CATEGORIE DANS CONTAINER TITRE ET BTN LINK
        var container_categorie = document.createElement('div');
        container_categorie.setAttribute('id', 'container_categorie');
        container_titre_et_btn_link.appendChild(container_categorie);

        //titre categorie
        var titreCategorie= document.createElement('p');
        titreCategorie.setAttribute('id', 'titre_categorie');
        var categorie_journal = document.createTextNode(journalUtilisateur.categorie);
        titreCategorie.appendChild(categorie_journal);
        container_titre_post.appendChild(titreCategorie);


        //CONTAINER SUIVRE
        var container_suivre=document.createElement('div');
        container_suivre.setAttribute('id', 'container_suivre');
        containerJournal.appendChild(container_suivre);
        //BUTTON SUIVRE
        var btn_suivre=document.createElement('button');
        btn_suivre.setAttribute('id', 'btn_suivre');
        container_suivre.appendChild(btn_suivre);

        var txt_btn_suivre=document.createTextNode(" + Suivre");
        btn_suivre.appendChild(txt_btn_suivre);



        //CONTAINER TITRE ARTICLE
        var container_titre_article = document.createElement('div');
        container_titre_article.setAttribute('id', 'container_titre_article');
        containerJournal.appendChild(container_titre_article);
        
        //TITRE ARTICLE DANS CONTAINER TITRE ARTICLE
        var titre_journal = document.createElement('h2');
        titre_journal.setAttribute('id', 'titre_journal');
        container_titre_article.appendChild(titre_journal);


        //TEXTE DANS TITRE JOURNAL
        var txt_titre_journal = document.createTextNode(journalUtilisateur.titre_article);
        titre_journal.appendChild(txt_titre_journal);


        //CONTAINER VIDEO
        var container_video = document.createElement('div');
        container_video.setAttribute('id', 'container_video');
        containerJournal.appendChild(container_video);

        //ESPACE TOP DANS CONTAINER VIDEO
        var espace_3 = document.createElement('hr');
        espace_3.setAttribute('id', 'espace_3');
        container_video.appendChild(espace_3);

        
        //NOMBRE VUE DANS CONTAINER TITRE LINK
        var container_nbr_vue = document.createElement('div');
        container_nbr_vue.setAttribute('id', 'container_nbr_vue');
        container_video.appendChild(container_nbr_vue);
        var p_nbr_vue = document.createTextNode('Vue: 22340');
        container_nbr_vue.appendChild(p_nbr_vue);




        
          //iframe dans CONTAINER VIDEO
          var video_journal = document.createElement('div');
          video_journal.setAttribute('id', 'video_journal');
          container_video.appendChild(video_journal);

         var video_insert = "<iframe src='https://www.youtube.com/embed/6uk1d9Els-A' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        video_journal.innerHTML=video_insert;

        //CONTAINER LIKE DANS CONTAINER CONTAINER JOURANL
        var container_btn_like = document.createElement('div');
        container_btn_like.setAttribute('id', 'container_btn_like');
        containerJournal.appendChild(container_btn_like);
        
        //INSERT BTN LIKE DANS CONTAINER VIDEO
        var btn_like = "<div class='container'><div class='example'><div class='rating' id='rating2'><button id='like' class='btn btn-default like'>Like</button><span class='likes'>0</span><button class='btn btn-default dislike'>Dislike</button><span class='dislikes'>0</span></div></div></div>";
       container_btn_like.innerHTML=btn_like;



        //CONTAINER RESUME
        var container_resume = document.createElement('div');
        container_resume.setAttribute('id', 'container_resume');
        containerJournal.appendChild(container_resume);

        //hr dans container resume journal
       var hr_head_resume =  document.createElement('hr');
        container_resume.appendChild(hr_head_resume);

        //JE CREE DES ZONES DE TEXTE DANS CONTAINER RESUME
        var resumeJournal = document.createElement('p');
        resumeJournal.setAttribute('id', 'p_resume_journal');
        var journalName = document.createTextNode(journalUtilisateur.text_presentation);
        resumeJournal.appendChild(journalName);
        container_resume.appendChild(resumeJournal);

        //LIEN POST DANS CONTAINER RESUME
        var link_post_btn = document.createElement('a');
        link_post_btn.setAttribute('id', 'btn_post_link');
        link_post_btn.setAttribute('href', journalUtilisateur.url_post)
        container_resume.appendChild(link_post_btn);
        var txt_btn_post_link = document.createTextNode('See reaction >>>');
        link_post_btn.appendChild(txt_btn_post_link);

        //JQUERY CSS LINK POST
        
        $('#btn_post_link').css('color', 'blue');

        
        //CONTAINER FOOTER ARTICLE
        var footer_container = document.createElement('div');
        footer_container.setAttribute('id', 'container_footer');
        containerJournal.appendChild(footer_container);

        //HR DANS CONTAINER resume
        var hr_resume = document.createElement('hr');
        container_resume.appendChild(hr_resume);
        //DATE DANS FOOTER ARTICLE
        var date_article = document.createElement('p');
        date_article.setAttribute('id', 'date_article');
        footer_container.appendChild(date_article);
        var txt_date_article = document.createTextNode('Date parution: ' +journalUtilisateur.date_sortie);
        date_article.appendChild(txt_date_article);


       
         //continent
        var location_continent = document.createElement('p');
        location_continent.setAttribute('id', 'location_continent');
        footer_container.appendChild(location_continent);
        var txt_location_continent= document.createTextNode('Continent: ' + journalUtilisateur.continent);
        location_continent.appendChild(txt_location_continent);

        //pays
        var location_pays = document.createElement('p');
        location_pays.setAttribute('id', 'location_pays');
        footer_container.appendChild(location_pays);
        var txt_location_pays= document.createTextNode('Pays :' + journalUtilisateur.pays);
        location_pays.appendChild(txt_location_pays);


         //region
        var location_region = document.createElement('p');
        location_region.setAttribute('id', 'location_region');
        footer_container.appendChild(location_region);
        var txt_location_region= document.createTextNode('Région :' + journalUtilisateur.region);
        location_region.appendChild(txt_location_region);


        //DEPARTEMENT
        var location_departement = document.createElement('p');
        location_departement.setAttribute('id', 'location_departement');
        footer_container.appendChild(location_departement);
        var txt_location_departement= document.createTextNode('Département :' + journalUtilisateur.departement);
        location_departement.appendChild(txt_location_departement);


       
        //ville
        var location = document.createElement('p');
        location.setAttribute('id', 'location');
        footer_container.appendChild(location);
        var txt_location = document.createTextNode('Ville: '+ journalUtilisateur.ville);
        location.appendChild(txt_location);

        

 
        //NOM REPORTER
        var by = document.createElement('p');
        by.setAttribute('id', 'by');
        footer_container.appendChild(by);
        var by_txt = document.createTextNode('By : '+ journalUtilisateur.name_reporter);
        by.appendChild(by_txt);



         //  HR ESPACE FIN ARTICLE
         var hr = document.createElement('hr');
        containerJournal.appendChild(hr);
        //HIDE MAP 
       // $('#map').hide(1000);
       //$('#box_categorie').show("slow");

        var espace = document.createElement('div');
        espace.setAttribute('id', 'espace');
        container.appendChild(espace);

    })};

     function myFunction_snackbar_evenement() {


          var x = document.getElementById("snackbar_filter");
          x.className = "show";

          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
$(function(){

  $('#p_economie').text("Catégorie: Evénement");
    $('#p_txt_catégorie').text("Catégorie: ");

    $('#p_catégorie').text("Evénement")

})


        }

myFunction_snackbar_evenement();

    
    $.get("http://localhost:8080/filterEvenement", function (response, error) {
       
        console.log(error);
        console.log(response);
     afficherEvent(response);
});
}