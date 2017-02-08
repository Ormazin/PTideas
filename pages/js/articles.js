			  
			  
			  
			  
			  
			  
			  
			  /******* إنشاء صفحة الموضوعات  *******/
			  Page.create({
			  
			  id   : "articles_list",
			  view: "pages/view/articles/articles_list.html",
			  title: " قائمة الموضوعات ",
			  first: true,
			  father: false,
			  group: "articles",
			  
			  start: (function(){	
			  
			  
			  
			   var  number ;
			  
			  
			  switch( data.content_type ){
			  
			  case "items": number = 1;
			  break;
			  
			  case "versions": number = 10;
			  break;
			  
			  case "competent": number = 82;
			  break;
			  
			  }
			  
			  
			  animate.loading_in();
			  animate.page_in();
			  
			  
			  setTimeout((function(){
			  
			  data.list( number );
			  
              animate.list_page_in();
			  
			  }),1000);
			  
			  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  animate.list_page_out();
			  
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
			  setTimeout(function(){ data.content(); } ,1000);
 			  
			  }),
			  
			  end: (function(){
			  
			  
			  animate.show_page_out();
			  setTimeout(function(){animate.page_out();},1000);
			  
			  })
			  
			  });
			   