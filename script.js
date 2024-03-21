
// one view section

var mainImg = document.getElementById("mainImg");

var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}


// search

function search() {

    window.location = "products.html";

}

// admin panel login

function adminPanel() {

    window.location = "adminPanel.html";

}

// manage products

function manageProducts() {

    window.location = "manageProducts.html";

}

// my account login

function myAccount() {

    window.location = "myAccount.html";

}

// watchlist

function watchlist() {

    window.location = "watchlist.html";

}