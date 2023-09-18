//MENU
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-button"); 
//CART
const deleteCart = document.querySelector(".delete-icon");
const productInCart = document.querySelector(".product-in-cart");
const emptyCart = document.querySelector(".empty-cart");
const cart = document.querySelector(".cart");
// ADDING AMOUNT 
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
let amount = document.querySelector(".number-of-quantity");
const cartButton = document.querySelector(".cta-cart");
let amountOfItems = document.querySelector(".amount-of-items");
let amountInCart = document.querySelector(".amount");
let totalPrice = document.querySelector(".total-price");
let isShowen = false;


function menuOpen(){
    if(isShowen){
        hamburgerMenu.style.display = "none";
    }else{
        mobileMenu.style.display = "block";
    }
    isShowen = !isShowen;
};

function menuClose(){
    if(isShowen){
        mobileMenu.style.display = "none";
    }else{
        hamburgerMenu.style.display = "block";
    }
    isShowen = !isShowen;
};

function cartOpen(){
    if(isShowen){
        cart.style.display = "none";
        //amountOfItems.style.display = "none";
    }else{
        cart.style.display = "block";
        //amountOfItems.style.display = "none";
    }
    isShowen = !isShowen;
};

deleteCart.addEventListener("click",function(){
    if(isShowen){
        productInCart.style.display = "none";
        amountOfItems.style.display = "none";
        cart.style.display = "none";
        amount.innerText = 0;
        emptyCart.style.display = "block";
    }else{
        emptyCart.style.display = "none";
        cart.style.display = "block";
        productInCart.style.display = "block";
        amountOfItems.style.display = "block";
    }
    isShowen = !isShowen;
});


plus.addEventListener("click", function(){
    result = Number(amount.innerText) + 1;
    if( result > 10){
        result = 10;
    }
    amount.innerText = result;
    amountInCart.innerText = "x " + result;
    amountOfItems.style.display = "block";
    amountOfItems.innerText = result;
    price = Number(amount.innerText) * 125;
    totalPrice.innerText = ["$" + price.toFixed(2)];
    if(result >= 1){
        productInCart.style.display = "grid";
        emptyCart.style.display = "none";
    }else{
        emptyCart.style.display = "block";
        productInCart.style.display = "none";
    }
});


minus.addEventListener("click",function(){
    let result = Number(amount.innerText) - 1;
    if( result < 0){
        result = 0;
    }
    amount.innerText = result;
    amountInCart.innerText = "x " + result;
    amountOfItems.innerText = result;
    price = Number(amount.innerText) * 125.00;
    totalPrice.innerText = ["$" + price.toFixed(2)];
    if(result === 0){
        emptyCart.style.display = "block";
        amountOfItems.style.display = "none";
        productInCart.style.display = "none";
    }else{
        productInCart.style.display = "grid";
        emptyCart.style.display = "none";
    }
});



//SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let thumbails = document.getElementsByClassName("thumbails");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbails.length; i++) {
    thumbails[i].className = thumbails[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbails[slideIndex-1].className += " active";
}