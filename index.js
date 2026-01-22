// What is API ? 
// Link => 
    // GET
    // POST (ADD)
    // PUT (UPDATE)
    // DELETE 
    // ................


// domain => google.com / facebook.com 
// API (GET) => https://www.youtube.com/@mohamed/vidID="jdscdkjabdkjv12y34843jdbcv"

// BackEnd => pdf + docs 


// API => check (initialization) 
    // link + method ? 


// var obj ;
// var newApi = new XMLHttpRequest

// newApi.open("get","https://official-joke-api.appspot.com/random_joke")

// newApi.send()
// // readyState == 4  

// newApi.addEventListener("readystatechange" , function(){
//     if(newApi.readyState == 4){
//         obj = JSON.parse(newApi.response)
//         // When i call the display ()
//         display()
        
//     }
// })
// var joke = document.getElementById("joke")

// function display(){

//     joke.innerHTML = `<h4>${obj.setup}</h4>
//         <p>${obj.punchline}</p>`

// }


//youtube.com/@mohamed/wrt8984t76






var req = new XMLHttpRequest
req.open("GET","https://newsapi.org/v2/everything?q=tesla&from=2025-12-21&sortBy=publishedAt&apiKey=dc047fb4a5924964889c8a8904aed7d2")
req.send()


var response = [] ; 
req.addEventListener("readystatechange",function(){

    if( req.readyState == 4 && req.status >=200 && req.status < 300  ){

        // console.log(req.response) => true / false
        // json => string
        
         response = JSON.parse(req.response).articles
         
         display()
         
        
        // string => object + . 
    }else if( req.readyState == 4 &&  req.status >= 300 ){
        console.log("error")
    }


})
// CORS => cross origin resources sharing ? 
    // the number of the requests
    // who can make the request => domian ? localhost => dev 0 


var newsArticles = document.getElementById("news-articles")
    function display(){
        var cartona = ""
        for(var i = 0 ; i < response.length ; i++){
            cartona += `<div class="article">
            <h2>${response[i].title}</h2>
            <p>${response[i].description}</p>
            <a href="${response[i].url}"> <img src="${response[i].urlToImage}" alt="image"> </a>
            <h6>${response[i].author}</h6>
        </div>`
        }

        newsArticles.innerHTML = cartona ; 
    }

























