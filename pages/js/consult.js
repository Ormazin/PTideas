			  
			  
			  
			  
			  
			  
 
			  
			  
			  /******* إنشاء صفحة الاستشارات الرئيسية  *******/
			  Page.create({
			  
			  id   : "consult_home",
			  view: "pages/view/consult/consult_home.html",
			  title: " ماذا تريد أن تفعل ",
			  first: true,
			  father: false,
			  group: "consult",
			  
			  start: (function(){	
			  
			  animate.page_in();
			  animate.page_color( "#f39c12" );
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			  
			  
			  
			  /******* إنشاء صفحة قائمة الاستشارات  *******/
			  Page.create({
			  
			  id   : "consult_list",
			  view: "pages/view/consult/consult_list.html",
			  title: " قائمة الاستشارات ",
			  first: false,
			  father: "consult_home",
			  group: "consult",
			  
			  start: (function(){	
			  
			  animate.page_in();
			  animate.page_color( "#e74c3c" );
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			   
			   
			   /******* إنشاء صفحة إرسال استشارة   *******/
			  Page.create({
			  
			  id   : "consult_send",
			  view: "pages/view/consult/consult_send.html",
			  title: " إرسال استشارة ",
			  first: false,
			  father: "consult_home",
			  group: "consult",
			  
			  start: (function(){	
			  
			  animate.page_in();
			  animate.page_color( "#2ecc71" );
			  
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			  
			   /******* إنشاء صفحة مشاهدة الاستشارات   *******/
			  Page.create({
			  
			  id   : "consult_show",
			  view: "pages/view/consult/consult_show.html",
			  title: " عرض الاستشارات ",
			  first: false,
			  father: "consult_home",
			  group: "consult",
			  
			  start: (function(){	
			  
			  animate.page_in();
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			   