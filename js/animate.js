			  
			  
			  var animate = {
				  
			  /*********************** حركة القائمة الرئيسية ****************************/  
			  the_home:(function( ){
			  var transX;
			  var transY;
			  var scale;
			  var title;
			  
			  /*switch(1) - تحديد نوع التأثير  */
			  switch( animate.groupType ){
			  
			  case "home":
			   transX  = "0%";
			   transY  = "0%";
			   scale   = "1,1";
			   title   = "";
			  break;
			  
			  case "items":
			   transX = "-100%";
			   transY = "100%";
			   scale   = "5,5";
			   title   = "الموضوعات";
			  this.color  = "#e74c3c";
			  break;
			  
			  case "versions":
			   transX = "100%";
			   transY = "100%";
			   scale   = "5,5";
			   title   = "الإصدارات";
			  this.color  = "#f39c12";
			  break;
			  
			  
			  case "competent":
			   transX = "-100%";
			   transY = "-15%";
			   scale   = "5,5";
			   title   = "للمختصين";
			  this.color  = "#0db392";
			  break;
			  
			  case "about":
			   transX = "100%";
			   transY = "-15%";
			   scale   = "5,5";
			   title   = "عن التطبيق";
			  this.color  = "#2ecc71";
			  break;
			  
			  case "ideas":
			   transX = "0%";
			   transY = "-100%";
			   scale   = "5,5";
			   title   = "خلاصة الأفكار";
			  this.color  = "#1c2834";
			  break;
			  
			   
			  
			  
			  
			  }/* end switch (1) */
			  
 			  
			   
			  
			  Move('#home').To({'transform':'scale('+scale+') translate('+transX+','+transY+')'},   1000);
			  Move('body').To({'background': this.color },100);
			  $('#back-group-box').css("background-color", this.color );
			  $('#back-group-box').css("box-shadow", "0px -15px 15px 5px "  + this.color );
			  $('.content_title_lists_word').text(title);
			  $('.content_title_lists_word').css("color", this.color );
			  $('.articles_info_box').css("background-color", this.color );

			  
			    
			  }),/* End The home */
			  
			  /************************** دخول التحميل *************************/  
			  loading_in:(function(){
			  $(".loading-body").show();	  
			  Move(".loading-box").To({"transition":"opacity 500ms", "opacity":"1"});
			  }),
			  
			  /**************************** خروج التحميل ***********************/  
			  loading_out:(function(){
			  Move(".loading-box").To({"opacity":"0","transition":"opacity 500ms"});
			  setTimeout(function(){ $(".loading-body").hide();},500);	  
			  }),
			  
			  /*************************** دخول سهم القروب ************************/  
			  arrowGroup_in:(function(){
			  $('#back-group-box').show();
			  $('#back-group-box').css("opacity","1");
			  Move('#back-group-box').To({'right': "0%"},500,200);
			  }),
			  
			  /***************************خروج سهم القروب ************************/  
			  arrowGroup_out:(function(){
			  Move('#back-group-box').To({'right': "-100%","opacity":"0"},500);
			  setTimeout(function(){ $('#back-group-box').hide();},500);  
			  }),
			  
			  /***************************دخول عنوان قائمة الموضوعات************************/  
			  listTitle_in:(function(){
 			  $(".content_title_lists_box").css({"top":"0px","opacity":"1"}); 
			  }),
			  
			  /***************************خروج عنوان قائمة الموضوعات************************/  
			  listTitle_out:(function(){
 			  $(".content_title_lists_box").css({"top":"-500px","opacity":"0"});
			  }),
			  
			  /****************  دخول عنوان قائمة الموضوعات لأجل المحتوى ******************/  
			  listTitle_content_in:(function(){
 			  $(".content_title_lists_box").css({"height":"100%","transition":"height 1000ms"}); 
 			  $(".content_title_lists_word").css({"opacity":"0","transition":"opacity 500ms"}); 
			  
			  }),
			  
			  /****************  خروج عنوان قائمة الموضوعات لأجل المحتوى ******************/  
			  listTitle_content_out:(function(){
 			  $(".content_title_lists_box").css({"height":"75px","transition":"height 1000ms"}); 
 			  $(".content_title_lists_word").css({"opacity":"1","transition":"opacity 500ms"}); 
			  }),
			  
			  /***************************دخول قائمة الموضوعات************************/  
			  list_in:(function(){
 			  $(".body_content_lists").css({"opacity":"1","transition":"opacity 500ms"}); 
			  
			  }),
			  
			  /***************************خروج قائمة الموضوعات************************/  
			  list_out:(function(){
			  $(".body_content_lists").css({"opacity":"0","transition":"opacity 500ms"}); 
			  }),
			  
			  /**********************دخول  معلومات محتوى الموضوع *********************/  
			  content_info_in:(function(){
			  $('.articles_info_box').css({"top":"20px","transition":"top 500ms"}); 
			  }),
			  
			  /***************************خروج معلومات محتوى الموضوع******************/  
			  content_info_out:(function(){
			  $('.articles_info_box').css({"top":"-180px","transition":"top 500ms"});  
			  }),
			  
			  /***************************دخول محتوى الموضوع ************************/  
			  content_data_in:(function(){
			  $('.articles_fullcontent_body').css({"opacity":"1", "top":"150px","transition":"opacity 500ms, top 500ms"});
			  }),
			  
			  /***************************خروج محتوى الموضوع************************/  
			  content_data_out:(function(){
			  $('.articles_fullcontent_body').css({"opacity":"0", "top":"150px","transition":"opacity 500ms, top 500ms"}); 
			  }),
			  
			 
			  /*************************** تجميع جميع حركات دخول صفحة القوائم  ************************/  
			  list_page_in:(function(){
			  animate.listTitle_content_out(); 
			   
			  setTimeout(function(){$('#back-group-box').css("display","block"); animate.list_in(); },1000);
			  $('body').css({"background-color":animate.color , "transition":"background-color 500ms"  });
			  }),
			  
			  /*************************** تجميع جميع حركات خروج صفحة القوائم ************************/  
			  list_page_out:(function(){
			  animate.listTitle_content_in();
			  animate.list_out();
			  $('#back-group-box').css("display","none");
			  setTimeout((function(){$('body').css("background-color","#fff");}),1000);
			   
			  }),
			  
			  /*************************** تجميع جميع حركات دخول صفحة المحتوى  ************************/  
			  show_page_in:(function(){
			  animate.content_info_in();
			  animate.content_data_in();
			  }),
			  
			  /*************************** تجميع جميع حركات خروج صفحة المحتوى  ************************/  
			  show_page_out:(function(){
			  animate.content_data_out();
			  animate.content_info_out();
			  }),
			  
			  
			  
			  /*************************** دخول عن التطبيق  ************************/  
			  about_in:(function(){
			   $(".body_content_lists_about").css({"opacity":"1" , "transition":"opacity 1000ms"  }); 
			  }),
			  
			  /*************************** خروج عن التطبيق  ************************/  
			  about_out:(function(){
			   $(".body_content_lists_about").css({"opacity":"0" , "transition":"opacity 1000ms"  }); 
			  }),
			  
			  


			  
			  
			  /***************************************************/  
			  page_in: (function(){
			  
			   
			  setTimeout((function(){$( animate.presPage() ).css({"display":"block","opacity":"1"});}),1200);
			  			  
			  }),/* end page in */
			  
			  /*****************************/
			  
			  page_out: (function(){
 				
			  setTimeout((function(){$( animate.prevPage() ).css({"display":"none","opacity":"0"});  }),1200) ;
			  
			  }),/* end page out */
			  
			  /*****************************/
			  
			  group_in: (function(){
			 
 			  /* تطبيق حركة القائمة الرئيسية */
			  this.the_home();
			  
			  /* إظهار القروب الحالي */			  
			  $( this.presGroup() ).show();
			  
			  /* حركة القروب الحالي */
			  Move( this.presGroup() ).To({"opacity":"1"},800);
			  
 			  /*if(1) إذا كان القروب الحالي ليس الصفحة الرئيسية  */
			  if( this.presGroup() !=  "#group_home" ){
			  
			  /* يدخل السهم */
			  animate.arrowGroup_in();
			  
			  /* يدخل صندوق العنوان العلوي للقوائم */
			  animate.listTitle_in();
			  
			  
			  }/* end if(1) */
			  
			  
			  
			  }),/* end group in */
			  
			  /*****************************/
			  group_out: (function(){
			  
			  
			  /* حركة القروب الماضي */
			  Move( this.prevGroup() ).To({"opacity":"0"},250);
			  
			  /* إخفاء القروب الماضي */
			  setTimeout(( function(){ $(animate.prevGroup()).hide();  } ),300);
			  
			  /* إذا كان القروب الحالي الصفحة الرئيسية يختفي السهم */
			  if( this.presGroup() ==  "#group_home" ){
			  
			  /* يخرج السهم */
			  animate.arrowGroup_out();
			  
			  /* يخرج صندوق العنوان العلوي للقوائم */
			  animate.listTitle_out();
			  
			  
			  }
			  
			  
			   
			
			  }),/*end group out*/
			  
			  /*****************************/
			  
			  
			  
			  prevGroup: (function(){
			  return "#group_" + mobile.group.prev;
			  }),
			  
			  presGroup: (function(){
			  return "#group_" + mobile.group.pres;
			  }),
			  
			  prevPage: (function(){
			  return "#page_" + mobile.page.prev[mobile.group.pres];
			  }),
			  
			  presPage: (function(){
			  return "#page_" + mobile.page.pres[mobile.group.pres];
			  }),
			  
			  groupType: "" ,
			  
			  
			  /* لون الخلفية الافتراضي يتغير بتغير القروب */
			  color: "",
			  
			  
			  
			  }