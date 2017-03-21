			  
			  
			  
		
			  
			  /******* إنشاء صفحة أقسام الموضوعات  *******/
			  Page.create({
			  
			  id   : "appbook_list",
			  view: "pages/view/appbook/appbook_list.html",
			  title: " اختر مستشارك ",
			  first: true,
			  father: false,
			  group: "appbook",
			  
			  start: (function(){	
			
			  animate.page_in();
		
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			  
			  
			   