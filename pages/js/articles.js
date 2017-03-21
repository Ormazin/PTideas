			  
			  
			  
			  
			  
			  
			  
			  /******* إنشاء صفحة أقسام الموضوعات  *******/
			  Page.create({
			  
			  id   : "articles_main",
			  view: "pages/view/articles/articles_main.html",
			  title: " اختر القسم ",
			  first: true,
			  father: false,
			  group: "articles",
			  
			  start: (function(){	
			
			  animate.page_in();
			  animate.page_color( "#2ecc71" );
		
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			  
			  
			  /******* إنشاء صفحة قائمة الموضوعات  *******/
			  Page.create({
			  
			  id   : "articles_list",
			  view: "pages/view/articles/articles_list.html",
			  title: " قائمة الموضوعات ",
			  first: false,
			  father: "articles_main",
			  group: "articles",
			  
			  start: (function(){	
			  
			  animate.page_in();
			  animate.page_color( animate.articles_color );
   			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			  
			  
			  
			  /******* إنشاء صفحة استعراض موضوع  *******/
			  Page.create({
			  
			  id   : "articles_show",
			  view: "pages/view/articles/articles_show.html",
			  title: " قائمة الموضوعات ",
			  first: false,
			  father: "articles_list",
			  group: "articles",
			  
			  start: (function(){	
			  
			  animate.page_in();
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			   