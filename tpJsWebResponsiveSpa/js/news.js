
var tabNews = [];

function startNews(){ 
	console.log("starNews");
    makeAjaxGetRequest("data/news.json" , function(jsonNewsData) {
		   tabNews=JSON.parse(jsonNewsData);
		   for(i in tabNews){
			   console.log(JSON.stringify(tabNews[i]));
		   }
	   });
}