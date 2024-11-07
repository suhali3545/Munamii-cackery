var trandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: 'swiper-button-prev'
    }
    
});
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none";
}
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// <!--Counter for items in the cart-->
let cartCount = 0;
function addToCart(){   //function to add an item to the cart 
    cartCount++;  // Incremet the cart item count
    document.getElementById("cart-count").textContent = cartCount;  //update the cart count display
    alert("product added to the cart!");  //Notify the user
}
function viewCart()           //function to view the cart (shows item count when clicking the cart button in the header)
{
    if (cartCount === 0){
        alert("The cart is empty.");
    }else {
        alert("You have" + cartCount + "item(s) in the cart.");
    }
}





