let lightBoxContainer =document.getElementById("lightBoxContainer");
let lightBoxItem = document.getElementById("lightBoxItem");
let imgs = Array.from( document.querySelectorAll(".item img") );
let nextBtn = document.getElementById("next"); 
let prevBtn = document.getElementById("prev");
let closeBtn = document.getElementById("close");
let currentIndex ;

for ( var i= 0 ; i< imgs.length  ; i++)
{
    imgs[i].addEventListener( "click"  , function (eventInfo)
    
    {
        currentIndex = imgs.indexOf ( eventInfo.target); 
        console.log (currentIndex); 
        var imgSrc = eventInfo.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace("d-none" , "d-flex")           
    
    })
}
 function nextSlide()
 {
    currentIndex++; 
    if  (currentIndex == imgs.length )
    {
        currentIndex = 0;
    }
    var imgSrc =imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
 }; 

function prevSlide ()
{
    currentIndex--; 
    if (currentIndex < 0)
    {
        currentIndex = imgs.length -1;
    }
    var imgSrc =imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
} 

function closeSlide() 
{
    lightBoxContainer.classList.replace ("d-flex" ,"d-none");
}; 

nextBtn.addEventListener ("click",nextSlide ); 
prevBtn.addEventListener ("click", prevSlide); 
closeBtn.addEventListener("click", closeSlide); 


document.addEventListener ("keydown", function(eventInfo)
{
    if (eventInfo.code == "ArrowRight")
    {
        nextSlide();
    }
    else if (eventInfo.code == "ArrowLeft")
    {
        prevSlide();
    }
    else if (eventInfo.code == "Escape")
    {
        closeSlide();
    }
}
); 

