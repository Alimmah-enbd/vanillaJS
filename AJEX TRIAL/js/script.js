let posts = [];
let pageNumber ;


// var myRequest = new XMLHttpRequest();
// myRequest.open("GET" , "https://api.themoviedb.org/3/trending/all/day?api_key=681c2d5425dfe124aca6c243db0318a7");
// myRequest.send();
// myRequest.addEventListener("readystatechange" , function(){
//   if(myRequest.readyState == 4 && myRequest.status == 200)
//   {
//     pageNumber =  JSON.parse(  myRequest.response).page;
//     posts =  JSON.parse( myRequest.response).results;
//     console.log(posts);
//     displayPosts()
//   } 
  
// });


  (async function display() 
  {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=681c2d5425dfe124aca6c243db0318a7`); 
    const {page , results} = await apiResponse.json();
    pageNumber = page;
    posts = results;
    displayPosts()
  })()



function displayPosts()
{
  let cartoona = ``;

  for(let i=0;i<posts.length;i++)
  {
    
    cartoona +=`
        <div class="col-md-3">
        <div class="post">
               <h5>${posts[i].vote_average}</h5>
               <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
                <h4>${posts[i].title}</h4>
                <p>${posts[i].overview}</p>
           </div>
        </div>`
  }

  document.getElementById("myRow").innerHTML  = cartoona;
}

