<!-- Logger Tracking Script -->
if((typeof _TRK_LID)!="undefined" && _TRK_LID!=""){
    (function(b,s,c){var f=b.getElementsByTagName(s)[0],j=b.createElement(s);j.async=true;j.src='//fs.bizspring.net/fs4/logger.v4.js';f.parentNode.insertBefore(j,f);if(typeof c == "function")c(j);})(document,'script',function(j){
		if (j.addEventListener) {
			j.addEventListener('load', function(){
				<!-- PN Tracking Script -->
				if((typeof _TRK_PN)!="undefined" && _TRK_PN!=""){
					(function(b,s){var f=b.getElementsByTagName(s)[0],j=b.createElement(s);j.async=true;j.src='//fs.bizspring.net/fs4/logger.pn.v1.js';f.parentNode.insertBefore(j,f);})(document,'script');
				}				
			});
		}else if(j.attachEvent){
			if( j.attachEvent('onload', function(){}) ){
				<!-- PN Tracking Script -->
				if((typeof _TRK_PN)!="undefined" && _TRK_PN!=""){
					(function(b,s){var f=b.getElementsByTagName(s)[0],j=b.createElement(s);j.async=true;j.src='//fs.bizspring.net/fs4/logger.pn.v1.js';f.parentNode.insertBefore(j,f);})(document,'script');
				}
			}
		}
	});
}