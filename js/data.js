			  
			  
			  var data = {
			  
			  content_id:null, content_title: null,  content_user:null, content_date:null, content_type:null,
			  
			  
			  
			  /***************** دالة جلب قائمة الموضوعات *****************/
			  list:(function( type ){
			  

			  animate.loading_in();
			  
 			  $.ajax({
			  url: "https://pt-ideas.com/appsql/lists.php?type=" + type  , 
 			  type: 'GET',
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  $(".body_content_lists").html(' ');
			  $(".body_content_lists" ).scrollTop(0);
			  $(".body_content_lists" ).scrollLeft( 1000 );
			  
			   /* for(1) */
			  for( var i=0; i < data.length; i++ ){
 			  $(".body_content_lists").append('<table class="animated content_lists"> <tr> <td align="right" width="80%"> <span class="content_title">'+data[i].title+'</span> - <span class="content_user">'+data[i].user+'</span> </td> <td class="change_page" data-page_id="articles_show" data-content_id="'+data[i].id+'"  data-content_title="'+data[i].title+'"  data-content_user="'+data[i].user+'"  data-content_date="'+data[i].date+'" align="left" width="20%"> <span class="lnr lnr-chevron-down-circle animated content_lists_icon"></span> </td> </tr> </table>'); /*end html*/

			  
 			  
			  } /* end for(1) */
			 
			 
			  animate.loading_out();
			  setTimeout(function(){animate.list_in();},500);
			  
			  }),
			  error: (function(){
			  
			  
			  alert("لا يوجد اتصال بالانترنت");
			  animate.loading_out();
			  setTimeout(function(){animate.list_in();},500);
			  
			  
			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  
			  
			  
 
			  
			  }), /* End List Function */
			  
			  /***************** دالة جلب قائمة الموضوعات *****************/
			  content:(function(){
			  

			  animate.loading_in();
 			  
 			  $(".articles_info_title").text( data.content_title );
			  $(".articles_info_user").text( data.content_user );
			  $(".articles_info_date").text( data.content_date );
			  
			  
			  $.ajax({
			  url: "https://pt-ideas.com/appsql/content.php?post_id=" + data.content_id  , 
 			  type: 'GET',
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  $(".articles_fullcontent").html( data[0].content );
			  $( ".articles_fullcontent_body" ).scrollTop(0);
			  
			  animate.loading_out();
			  
			  setTimeout(function(){
			  animate.show_page_in();
			  },500);
		
			 
 			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  
			  
			  
			  
			  }), /* End Content Function */
			  
			  /***************** دالة جلب قائمة الموضوعات *****************/
			  ideas:(function( type ){
			  
			  
			  animate.loading_in();
			  
 			  $.ajax({
			  url: "https://pt-ideas.com/appsql/ideas.php?type=" + type  , 
 			  type: 'GET',
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  $(".body_content_lists").html('<br>');
			  $(".body_content_lists" ).scrollTop(0);
			  
			   /* for(1) */
			  for( var i=0; i < data.length; i++ ){
				  
 			  $(".body_content_lists").append('<table class="ideas_lists"> <tr> <td align="right" width="80%"> <span class="ideas_title">'+data[i].title+'</span> <span class="ideas_text"> '+data[i].content+'</span> </td> </tr> </table><div class="ideas_line"></div>'); /*end html*/
			  
			  

			  
 			  
			  } /* end for(1) */
			 
			 
			  animate.loading_out();
			  setTimeout(function(){animate.list_in();},500);
			  
			  }) /* end success */
			  
			  
			  });/* End Ajax */
			  
			  
 
			  
			  }) /* End Ideas Function */
			  
			  
			  
			  }