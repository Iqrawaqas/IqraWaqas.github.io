

function showMenu() {
  var sideBar = document.querySelector(".sidebar");
  var MenuTransition = document.querySelector("#menu-transition");
  const label = document.querySelector('.label')
  event.preventDefault();
  sideBar.style.width = "280px";
  MenuTransition.style.marginLeft = "280px";
  label.style.display = "none";
}

function closeMenu() {
  event.preventDefault();
  document.querySelector(".sidebar").style.width = "0";
  document.querySelector("#menu-transition").style.marginLeft= "0";
  const label = document.querySelector('.label')
  label.style.display = "block";
  
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
const navbar = document.querySelector(".nav-bar")
const label = document.querySelector('.label')
var sideBar = document.querySelector(".sidebar");
var MenuTransition = document.querySelector("#menu-transition");


  if(sideBar.style.width=="280px" &&  MenuTransition.style.marginLeft == "280px"){
    sideBar.style.width = "0";
    MenuTransition.style.marginLeft = "0"
    label.style.display = "block";
  }

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    navbar.classList.add('active');
    label.classList.add('changeLabel')
  } else {
    navbar.style.top = "-165px";
    navbar.classList.add('active');
  }
  prevScrollpos = currentScrollPos;

  if(prevScrollpos==0){
    console.log(prevScrollpos)
    navbar.classList.remove('active');
    label.classList.remove('changeLabel')
  }
}

window.onload = function(){
$(".testimonial-quote").not('.slick-initialized').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  arrows:false,
  fade: true,
  cssEase: 'linear',
  adaptiveHeight : true,
  focusOnSelect: true,
  pauseOnHover:true,
  centerMode :true,
  pauseOnDotsHover:true,
  autoplaySpeed: 2000,
}); 

$(".regular").not('.slick-initialized').slick({
  dots: true,
  arrows:true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  responsive: [
    {
      breakpoint: 900,
        settings: "unslick"
    }]
 });
}
 
 


function sendEmail() 
{
    window.location = "mailto:iqra_waqas@outlook.com";
}





 

