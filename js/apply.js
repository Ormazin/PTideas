			
			    
			  $(document).ready(function(e) {
              
			 
			  /** سيبدأ التنفيذ عند تحميل جميع الصفحات **/
			  mobile.ready( (function(){
				  
				   
 		    

			  
			  /************************** عند تغيير القروب ************************/
			  $(".change_group").click(function(){
			 
			  /* if(1) التأكد بأن القروب المطلوب ليس نفس القروب الحالي*/
			  if( Group.pres != $(this).attr("data-group_id") ){
			  
 
			  Group.change(  $(this).attr("data-group_id") );
			  			  
			  }/* End if(1) */
			  
			  });/* end change group */
			  
			  
			  
			  /************************** عند تغيير صفحة ************************/
			  
			 $(".change_page").click(function(){
 			
			   /* if(1) التأكد بأن القروب المطلوب ليس نفس القروب الحالي*/
			  if( Page.pres != $(this).attr("data-page_id") ){
			   
 
			  animate.articles_color = $(this).attr("data-color");
			  Page.change(  $(this).attr("data-page_id") );
			  			  
			  }/* End if(1) */
			  
			  
			  });/* end change page */
			  
			  
			  
			  
			  
 
	
			  
			  
			  }));/* end mobile.ready */
			  
			    
              });/* end document.ready */
			
			
 			 
			  