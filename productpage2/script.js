//adding cart value
function addToCart() {
  var cartValue = localStorage.getItem("products");
  //console.log(cartValue);

  if (!cartValue) {
    cartValue = 1;
  } else {
    cartValue = Number(cartValue) + 1;
  }

  localStorage.setItem("products", cartValue);
  // window.location.reload();
  showTotalCartOfProduct();
}

function showTotalCartOfProduct() {
  var cartValue = localStorage.getItem("products");
  // const cart = document.getElementById("cart");
  console.log(cartValue);
  const cart = document.querySelector(".alsfi");
  if (cart) {
    cart.textContent = cartValue;
  }
}

window.onload = function () {
  const dynamicElements = document.querySelectorAll("[data-section]");

  dynamicElements.forEach((section) => {
    const sectionName = section.getAttribute("data-section");
    console.log(sectionName);

    fetch(`${sectionName}`)
      .then((response) => response.text())
      .then((data) => {
        section.innerHTML = data;
      });
  });
};

function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//link header and footer

document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("headerContainer").innerHTML = data;
      showTotalCartOfProduct();
    });
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footerContainer").innerHTML = data;
    });
});

//showTotalCartOfProduct();
