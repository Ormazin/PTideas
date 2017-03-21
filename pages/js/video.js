			  
			  
			  
			  
			  
			  
 
			  
			  
			  /******* إنشاء صفحة قائمة الفيديوات  *******/
			  Page.create({
			  
			  id   : "video_list",
			  view: "pages/view/video/video_list.html",
			  title: " قائمة الفيديوات ",
			  first: true,
			  father: false,
			  group: "video",
			  
			  start: (function(){	
			  
			  animate.page_in();
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			  
			  
			  
			  /******* إنشاء صفحة استعراض موضوع  *******/
			  Page.create({
			  
			  id   : "video_show",
			  view: "pages/view/video/video_show.html",
			  title: " مشاهدة فيديو ",
			  first: false,
			  father: "video_list",
			  group: "video",
			  
			  start: (function(){	
			  
			  animate.page_in();
  			  
			  }),
			  
			  end: (function(){
			  
			  animate.page_out();
			  
			  })
			  
			  });
			   