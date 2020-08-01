

  function journal_news(){
    document.getElementById("id_container_journal").innerHTML = "";
  
  //AFFICHER NEWS
  function afficherNews(tableauNews) {
      tableauNews.forEach(function (news) {

        var div_class_container_my_5 = document.createElement('div');
        div_class_container_my_5.setAttribute('class', 'container my-5');
        id_container_journal.appendChild(div_class_container_my_5);

        var balise_section = document.createElement('section');
        balise_section.setAttribute('class', 'magazine-section dark-grey-text');
        div_class_container_my_5.appendChild(balise_section);

        var balise_footer = document.createElement('footer');
        balise_section.appendChild(balise_footer);

        var div_class_rounded_bottom = document.createElement('div');
        div_class_rounded_bottom.setAttribute('class', 'rounded-bottom btn-elegant lighten-3 text-center pt-3');
        balise_footer.appendChild(div_class_rounded_bottom);


        var div_class_container_fluid = document.createElement('div');
        div_class_container_fluid.setAttribute('class', 'container-fluid');
        div_class_rounded_bottom.appendChild(div_class_container_fluid);

        var div_class_row = document.createElement('div');
        div_class_row.setAttribute('class', 'row');
        div_class_container_fluid.appendChild(div_class_row);

        var div_class_col_sm_1 = document.createElement('div');
        div_class_col_sm_1.setAttribute('class', 'col-sm-1');
        div_class_row.appendChild(div_class_col_sm_1);

        var img_class_rounded_circle = document.createElement('img');
        img_class_rounded_circle.setAttribute('class', 'rounded-circle z-depth-1 img-fluid');
        img_class_rounded_circle.setAttribute('src', news.url_img);
        img_class_rounded_circle.setAttribute('style', 'width: 50px; min-width: 50px; min-height: 50px; height: 50px;');
        div_class_col_sm_1.appendChild(img_class_rounded_circle);

        var div_class_col_sm_9 = document.createElement('div');
        div_class_col_sm_9.setAttribute('class', 'col-sm-9');
        div_class_row.appendChild(div_class_col_sm_9);

        var p_lead = document.createElement('p');
        p_lead.setAttribute('class', 'lead');
        div_class_col_sm_9.appendChild(p_lead);

        var txt_p_lead = document.createTextNode('By: ');
        p_lead.appendChild(txt_p_lead);

        var balise_a = document.createElement('a');
        balise_a.setAttribute('href', '/profile');
        p_lead.appendChild(balise_a);
        

        var txt_balise_a = document.createTextNode(news.name_chaine);
        balise_a.appendChild(txt_balise_a);

        var div_class_col_sm_2 = document.createElement('div');
        div_class_col_sm_2.setAttribute('class', 'col-sm-2');
        div_class_row.appendChild(div_class_col_sm_2);

        var btn_class_aqua_gradient = document.createElement('button');
        btn_class_aqua_gradient.setAttribute('class', 'btn aqua-gradient');
        btn_class_aqua_gradient.setAttribute('type', 'button');
        div_class_col_sm_2.appendChild(btn_class_aqua_gradient);

        var  txt_btn_aqua = document.createTextNode('Suivre');
        btn_class_aqua_gradient.appendChild(txt_btn_aqua);

        var div_class_row_2 = document.createElement('div');
        div_class_row_2.setAttribute('class','row');
        balise_section.appendChild(div_class_row_2);

        var div_class_col_lg_12 = document.createElement('div');
        div_class_col_lg_12.setAttribute('class', 'col-lg-12 col-md-12 mb-4');
        div_class_row_2.appendChild(div_class_col_lg_12);

        var div_class_single_news = document.createElement('div');
        div_class_single_news.setAttribute('class', 'signle-news');
        div_class_col_lg_12.appendChild(div_class_single_news);

        

       
          //iframe dans CONTAINER VIDEO
          var video_journal = document.createElement('div');
          video_journal.setAttribute('id', 'video_journal');
          video_journal.setAttribute('style', 'height: 400px ');
          div_class_single_news.appendChild(video_journal);

         var video_insert = "<iframe id='iframe' style='width:100%; height:100%;' src='https://www.youtube.com/embed/6uk1d9Els-A?rel=0&amp;autoplay=1&mute=1&autoplay=1&loop=1&amp;hl=fr&amp;cc_lang_pref=fr&amp;cc_load_policy=1' frameborder='0' allow='accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>";
         video_journal.innerHTML=video_insert;
        

         var div_class_new_data = document.createElement('div');
         div_class_new_data.setAttribute('class', 'news-data d-flex justify-content-between');
         div_class_single_news.appendChild(div_class_new_data);

         var a_class_deep_orange = document.createElement('a');
         a_class_deep_orange.setAttribute('class', 'deep-orange-text');
         a_class_deep_orange.setAttribute('href', '#!');
         div_class_new_data.appendChild(a_class_deep_orange);

         var h6_class_font_weight = document.createElement('h6');
         h6_class_font_weight.setAttribute('class', 'font-weight-bold');
         a_class_deep_orange.appendChild(h6_class_font_weight);

         

         var txt_h6 = document.createTextNode('Catégorie: ' + news.categorie);
         h6_class_font_weight.appendChild(txt_h6);

         var p_class_font_weight = document.createElement('p');
         p_class_font_weight.setAttribute('class','font-weight-bold dark-grey-text');
         div_class_new_data.appendChild(p_class_font_weight);

         var i_class_far_fa_eye = document.createElement('i');
         i_class_far_fa_eye.setAttribute('class', 'far fa-eye pr-2');
         p_class_font_weight.appendChild(i_class_far_fa_eye);

         var txt_p_class_font = document.createTextNode('3456');
         p_class_font_weight.appendChild(txt_p_class_font);

         var p_class_font_weight_2 = document.createElement('p');
         p_class_font_weight_2.setAttribute('class', 'font-weight-bold dark-grey-text');
         div_class_new_data.appendChild(p_class_font_weight_2);


         var i_class_far_fa_clock = document.createElement('i');
         i_class_far_fa_clock.setAttribute('class', 'far fa-clock pr-2');
         p_class_font_weight_2.appendChild(i_class_far_fa_clock);

         var txt_p_class_font_2 = document.createTextNode(news.date_sortie);
         p_class_font_weight_2.appendChild(txt_p_class_font_2);

         var h3_class_font_weight = document.createElement('h3');
         h3_class_font_weight.setAttribute('class', 'font-weight-bold dark-grey-text mb-3');
         div_class_single_news.appendChild(h3_class_font_weight);
         
         var a_title = document.createElement('a');
         h3_class_font_weight.appendChild(a_title);

         txt_a_title = document.createTextNode(news.titre_article);
         a_title.appendChild(txt_a_title);

         var p_class_dark_grey = document.createElement('p');
         p_class_dark_grey.setAttribute('class', 'dark-grey-text');
         div_class_single_news.appendChild(p_class_dark_grey);

         var txt_p_class_dark_grey = document.createTextNode(news.text_presentation);
         p_class_dark_grey.appendChild(txt_p_class_dark_grey);



         var div_class_d_flex_justify = document.createElement('div');
         div_class_d_flex_justify.setAttribute('class', 'd-flex justify-content-between');
         div_class_single_news.appendChild(div_class_d_flex_justify);

         var div_class_col_11 = document.createElement('div');
         div_class_col_11.setAttribute('class', 'col-11 text-truncate pl-0 mb-lg-3');
         div_class_d_flex_justify.appendChild(div_class_col_11);


        var a_class_dark_grey = document.createElement('a');
        a_class_dark_grey.setAttribute('href', news.url_post);
        a_class_dark_grey.setAttribute('class', 'font-weight-bold dark-grey-text mb-3');
        div_class_col_11.appendChild(a_class_dark_grey);

        var txt_into_a_class_dark = document.createTextNode('Voir les réaction');
        a_class_dark_grey.appendChild(txt_into_a_class_dark);


        var a_link_i = document.createElement('a');
        a_link_i.setAttribute('href', news.url_post);
        div_class_d_flex_justify.appendChild(a_link_i);
        

        var i_class_fas_fa_angle = document.createElement('i');
        i_class_fas_fa_angle.setAttribute('class', 'fas fa-angle-double-right');
        a_link_i.appendChild(i_class_fas_fa_angle);

        var balise_footer_2 = document.createElement('footer');
        balise_section.appendChild(balise_footer_2);

        var div_class_rounded_bottom_2 = document.createElement('div');
        div_class_rounded_bottom_2.setAttribute('class', 'rounded-bottom btn-elegant lighten-3 text-center pt-3');
        balise_footer_2.appendChild(div_class_rounded_bottom_2);

        ul_class_list_unstyled = document.createElement('ul');
        ul_class_list_unstyled.setAttribute('class', 'list-unstyled list-inline font-small');
        div_class_rounded_bottom_2.appendChild(ul_class_list_unstyled);

        var li_class_list_inline_item = document.createElement('li');
        li_class_list_inline_item.setAttribute('class', 'list-inline-item pr-2 white-text');
        ul_class_list_unstyled.appendChild(li_class_list_inline_item);

        var li_class_far_fa_clock = document.createElement('li');
        li_class_far_fa_clock.setAttribute('class', 'far fa-clock pr-1');
        li_class_list_inline_item.appendChild(li_class_far_fa_clock);

        var date_article = document.createTextNode(news.date_sortie);
        li_class_list_inline_item.appendChild(date_article);

        var li_class_list_inline_item_2 = document.createElement('li');
        li_class_list_inline_item_2.setAttribute('class', 'list-inline-item');
        ul_class_list_unstyled.appendChild(li_class_list_inline_item_2);

        var a_link_into_li = document.createElement('a');
        a_link_into_li.setAttribute('class', 'white-text');
        a_link_into_li.setAttribute('href', '#');
        li_class_list_inline_item_2.appendChild(a_link_into_li);

        var i_class_far_fa_comments = document.createElement('li');
        i_class_far_fa_comments.setAttribute('class', 'far fa-comments pr-1');
        a_link_into_li.appendChild(i_class_far_fa_comments);
        
        var txt_into_a = document.createTextNode('12');
        a_link_into_li.appendChild(txt_into_a);

        var li_class_list_inline_item_3 = document.createElement('li');
        li_class_list_inline_item_3.setAttribute('class', 'list-inline-item pr-2');
        ul_class_list_unstyled.appendChild(li_class_list_inline_item_3);

        var a_into_li_item_3 = document.createElement('a');
        a_into_li_item_3.setAttribute('class', 'white-text');
        a_into_li_item_3.setAttribute('href', '#');
        li_class_list_inline_item_3.appendChild(a_into_li_item_3);

        var li_class_fab_fa_facebook = document.createElement('li');
        li_class_fab_fa_facebook.setAttribute('class', 'fab fa-facebook-f pr-1');
        a_into_li_item_3.appendChild(li_class_fab_fa_facebook);

        txt_into_a_2 = document.createTextNode('21');
        a_into_li_item_3.appendChild(txt_into_a_2);

        var li_class_list_inline_item_4 = document.createElement('li');
        li_class_list_inline_item_4.setAttribute('class', 'list-inline-item');
        ul_class_list_unstyled.appendChild(li_class_list_inline_item_4);

        var a_into_item_4 = document.createElement('a');
        a_into_item_4.setAttribute('class', 'white-text');
        a_into_item_4.setAttribute('href', '#');
        li_class_list_inline_item_4.appendChild(a_into_item_4);

        var i_class_fab_fa_twitter = document.createElement('li');
        i_class_fab_fa_twitter.setAttribute('class', 'fab fa-twitter pr-1');
        a_into_item_4.appendChild(i_class_fab_fa_twitter);

        var txt_into_a_4 = document.createTextNode('5');
         a_into_item_4.appendChild(txt_into_a_4);


         











        

  
  
      })};
  
      
      
      $.get("http://localhost:8080/total", function (response, error) {
         
          console.log(error);
          console.log(response);
       afficherNews(response);
  });
  }
  
    journal_news();
  
  
