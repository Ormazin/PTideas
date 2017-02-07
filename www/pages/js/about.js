              
			  
			  /******* إنشاء صفحة المختصين  *******/
			  Page.create({
			  
			  id   : "about",
			  view: "pages/view/about/about.html",
			  title: " عن التطبيق ",
			  first: true,
			  father: false,
			  group: "about",
			  
			  start: (function(){	
			  
			  animate.page_in();
			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });