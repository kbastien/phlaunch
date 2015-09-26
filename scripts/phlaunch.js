var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log("RESPONSE: " + this.responseText);
    var data = JSON.parse(xhr.responseText);
    for (var i = 0; i <= data["posts"].length; i++) {
    	if (data["posts"][i] !== undefined) {
    		console.log("URL: " + data["posts"][i]["redirect_url"])
    		window.open(data["posts"][i]["redirect_url"],'_blank');
    	} 
    	else {
    		console.log("Reached Limit")
    	}
    };
  }
});

xhr.open("GET", "https://api.producthunt.com/v1/posts/");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "Bearer e63d0570c16b1d404d2c38a35bc259f83b72e6885516a66e80da68ef3dff3e2a");

xhr.send(data);