let aboutOffst = $("#about").offset().top;

$(window).scroll (function (){
    let wScroll = $(window).scrollTop();
    if ( wScroll >= aboutOffst-20)
    {
        $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.8)");
        $("#main-nav").css("padding"," 0px 60px")
        $("#btnUp").fadeIn(500);
    }
    else 
    {
        $("#main-nav").css("backgroundColor", "transparent");
        $("#main-nav").css("padding", "0px 0px")
        $("#btnUp").fadeOut(500);
    }
})
$("#btnUp").click(function() {
    $("html,body").animate({scrollTop:0} , 2000);
});

$ ("a[href^='#' ]").click(function() {
let aHref = $(this).attr("href");
let sectionOffset = $(aHref).offset().top;
$("html,body").animate({scrollTop:sectionOffset},2000);
}); 


$ ("#sideBarToggle").click(function(){
   let  colorBoxWidth = $("#coloBox").innerWidth();

   if ($("#sideBar").css("left") == "0px")
   {
    $("#sideBar").animate( { left:`-${colorBoxWidth}`} , 1000);
   }
   else
   {
    $("#sideBar").animate( {left:'0px'} , 1000);
   }
});


for (let i = 0; i < $ (".color-item").length; i++)

{
    let red = Math.round ( Math.random()* 255 );
    let green = Math.round ( Math.random()* 255 );
    let blue = Math.round ( Math.random()* 255 );

    $(".color-item").eq(i).css("backgroundColor",`rgb(${red},${green},${blue})`);
};

$(".color-item").click(function(){
    let bgColor = $(this).css("backgroundColor");
    $(".change").css("color" ,bgColor); 
});

$(document).ready(function()
{
    $("#loading").fadeOut(1000); 
    $("body").css("overflow" , "auto");
}); 