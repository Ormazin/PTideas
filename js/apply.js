			
			    
			  $(document).ready(function(e) {
              
			 
			  /** سيبدأ التنفيذ عند تحميل جميع الصفحات **/
			  mobile.ready( (function(){
				  
				  
 		   
			  
			  
			  /************************** عند تغيير القروب ************************/
			  $(document.body).on( "touchend", ".change_group", function( group ){
			 
			  /* if(1) التأكد بأن القروب المطلوب ليس نفس القروب الحالي*/
			  if( Group.pres != $(this).attr("data-group_id") ){
			  
			  animate.groupType = $(this).attr("data-groupType");
			  data.content_type = $(this).attr("data-groupType");

			  Group.change(  $(this).attr("data-group_id") );
			  			  
			  }/* End if(1) */
			  
			  });/* end change group */
			  
			  
			  
			  /************************** عند تغيير صفحة ************************/
			  
			  $(document.body).on( "touchend", ".change_page", function ( page ){
			  
 			  var page = Page.data[ $(this).attr("data-page_id") ];
			  
			 
			  
			  /* if(1) التأكد بأنّ الصفحة المطلوبة ليست نفس الصفحة الحالية */
			  if( Page.pres[ page.group ] != page.id ){
			  
			  /* إعداد معلومات المحتوى */
			  data.content_id = $(this).attr("data-content_id");
			  data.content_title = $(this).attr("data-content_title");
			  data.content_user = $(this).attr("data-content_user");
			  data.content_date = $(this).attr("data-content_date");
			  
			  /* تغيير الصفحة */
			  Page.change( page.id );
			  
			  
			  }/* end if(1) */
			  
 			  
			  
			  });/* end change page */
			  
		 
	
	
			  
			  
			  }));/* end mobile.ready */
			  
			    
              });/* end document.ready */
			
			
 			 
			  