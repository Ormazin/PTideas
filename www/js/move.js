       
	   /*
	   
	   #------------- كلاس خاص بتحريك العناصر  ------------#
	   
	   
	           id                                              speed   delay 
	   Move('element').To({'width':'100px','height':'100px'},   500,     500);
	   الكود السابق سيقوم بتكبير العنصر 100 بكسل عرض و 100 بكسل طول، بسرعة 500 ميللي ثانية، وبعد انتظار 500 ميللي ثانية
	   
	  ---
	  
	  إذا مثلًا أردنا تغيير اللون في ثانية واحدة و تغيير العرض في خمس ثواني سنقوم بالتالي:
	  Move().To('');
	   
	   */
	   
	   
	    var  Move = (function(id){
			
	    var E =  document.querySelectorAll(id)[0];
		
		 
		
		if( E.getAttribute('style') == null )
		E.setAttribute("style","");
		
		
	    var Style = E.getAttributeNode("style");
		
 	    
	    t = {};
	    t.To = function(css,time,delay){
		   
		if(time === undefined) time = 1000 ; 
		if(delay === undefined) delay = 1 ; 
		  
	    var trans = "" ;   
		var keys = Object.keys(css);
		
		
		setTimeout(function(){
			
			
		for(var i =0; i<keys.length ; i++){
				 
		trans = trans + keys[i] + " ";
		if(css [keys[i]].indexOf("*") > -1){ 
		trans = trans + css [keys[i]].substr(css [keys[i]].indexOf("*")+1) + "ms"; css [keys[i]] = css [keys[i]].substr(0,css [keys[i]].indexOf("*"));
		}
		else {trans = trans + time + "ms"; } 
		
		if(i != (keys.length -1)) trans = trans + ","; 
		
		Style.value = Style.value + keys[i] + ":" + css [keys[i]] + ";" ;
		
		}
 
		
		Style.value = Style.value + "transition: " + trans + ";";
		Style.value = Style.value + "-webkit-transition: " + trans + ";";
		
		},delay);

	   }
	   return t;
	   });