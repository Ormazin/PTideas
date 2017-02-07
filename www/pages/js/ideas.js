              
			  
			  
			  
			  
			  
			  
			  /******* إنشاء صفحة المختصين  *******/
			  Page.create({
			  
			  id   : "ideas",
			  view: "pages/view/ideas/ideas.html",
			  title: " الأفكار ",
			  first: true,
			  father: false,
			  group: "ideas",
			  
			  start: (function(){	
			  
			  animate.page_in();
			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });