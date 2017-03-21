			  
			  
			  
			  
			  
			  
 
			  
			  
			  /******* إنشاء صفحة قائمة الفيديوات  *******/
			  Page.create({
			  
			  id   : "remind_home",
			  view: "pages/view/remind/remind_home.html",
			  title: " ذكرني ",
			  first: true,
			  father: false,
			  group: "remind",
			  
			  start: (function(){	
			  
			  animate.page_in();
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			  
			  
			  
			  /******* إنشاء صفحة استعراض موضوع  *******/
			  Page.create({
			  
			  id   : "remind_add",
			  view: "pages/view/remind/remind_add.html",
			  title: " إضافة تذكير جديد ",
			  first: false,
			  father: "remind_home",
			  group: "remind",
			  
			  start: (function(){	
			  
			  animate.page_in();
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			   