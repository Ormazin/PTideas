              
			  
			  
			  /******************** القروب الرئيسي ********************/
			  
			  Group.create({
			  
			  id   : "home",
			  first: true  ,
			  
			  start: (function(){
			  
			  animate.group_in();
			 
 
			  }),
			  
			  
			  end: (function(){
			  
			  animate.group_out();
			  
			  
			  }) 
			  
			  });
			  
			  
			  /******************** فروب الموضوعات ********************/
			  
			  Group.create({
			  
			  id   : "articles",
			  first: false  ,
			  
			  start: (function(){
			  
			  var  number ;
			  
			  
			  switch( data.content_type ){
			  
			  case "items": number = 11;
			  break;
			  
			  case "versions": number = 10;
			  break;
			  
			  case "competent": number = 82;
			  break;
			  
			  }
			  
			  data.list( number );
			  animate.group_in();
 
			  }),
			  
			  
			  end: (function(){
			  
			  animate.group_out();
			  animate.list_out();
			  
			  }) 
			  
			  });
			  
			  
			  /******************** فروب معلومات التطبيق ********************/
			  
			  Group.create({
			  
			  id   : "about",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
 
			  }),
			  
			  
			  end: (function(){
			  
			  animate.group_out();
			  
			  }) 
			  
			  });
			  
			  /******************** فروب الأفكار ********************/
			  
			  Group.create({
			  
			  id   : "ideas",
			  first: false  ,
			  
			  start: (function(){
			  
			  animate.group_in();
 
			  }),
			  
			  
			  end: (function(){
			  
			  animate.group_out();
			  
			  }) 
			  
			  });