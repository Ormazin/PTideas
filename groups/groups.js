              
			  
			  
			  /******************** القروب الرئيسي ********************/
			  
			  Group.create({
			  
			  id   : "home",
			  first: true  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#dceff5");
			 
 
			  }),
			  
			  
			  end: (function(){
			  
			  animate.group_out();
			  
			  
			  }) 
			  
			  });
			  
			  
			  /******************** فروب المعلومات ********************/
			  
			  Group.create({
			  
			  id   : "articles",
			  first: false  ,
			  
			  start: (function(){
			  
			  
			  animate.group_in();
			  animate.page_color("#2ecc71");
 
			  }),
			  
			  
			  end: (function(){
			  
			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  
			  /******************** فروب الفيديو ********************/
			  
			  Group.create({
			  
			  id   : "video",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#df624c");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب الاستشارات ********************/
			  
			  Group.create({
			  
			  id   : "consult",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#f39c12");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب احجز موعدك ********************/
			  
			  Group.create({
			  
			  id   : "appbook",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#4a4a4a");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب ذكرني ********************/
			  
			  Group.create({
			  
			  id   : "remind",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#1abc9c");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب من نحن ********************/
			  
			  Group.create({
			  
			  id   : "about",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			  animate.page_color("#2c3e50");
  
			  }),
			  
			  
			  end: (function(){
 			  animate.group_out();
			  
			  }) 
			  
			  });
			  
		 