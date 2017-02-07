			  
			  
			  
			  
			  
			  /******* إنشاء الصفحة الرئيسية  *******/
			  Page.create({
			  
			  id   : "home",
			  view: "pages/view/home/home.html",
			  title: " الوجهة ",
			  first: true,
			  father: false,
			  group: "home",
			  
			  start: (function(){	
			  
			  animate.page_in();
			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			   