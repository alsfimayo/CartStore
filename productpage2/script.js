// window.onload = function () {
//   const dynamicElements = document.querySelectorAll("[data-section]");

//   dynamicElements.forEach((section) => {
//     const sectionName = section.getAttribute("data-section");
//     console.log(sectionName);

//     fetch(`${sectionName}`)
//       .then((response) => response.text())
//       .then((data) => {
//         section.innerHTML = data;
//       });
//   });
// };

// function openNav() {
//   document.getElementById("mySidenav").style.width = "60%";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }
// function addtoCart() {
//   var cartValue = localStorage.getItem("products");
//   if (!localStorage.getItem("products")) {
//     localStorage.setItem("products", 1);
//     window.location.reload();
//     return;
//   }
//   console.log(cartValue);
//   const increment = Number(cartValue) + 1;
//   localStorage.setItem("products", increment);
//   console.log("clicked");
//   window.location.reload();
// }
// function showTotalCartOfProduct() {
//   var cartValue = localStorage.getItem("products");
//   const cart = document.getElementById("cartproduct");
//   cart.innerText = cartValue;
// }

// showTotalCartOfProduct();

function addToCart() {
  var cartValue = localStorage.getItem("products");

  if (!cartValue) {
    cartValue = 1;
  } else {
    cartValue = Number(cartValue) + 1;
  }

  localStorage.setItem("products", cartValue);
  showTotalCartOfProduct();
}

function showTotalCartOfProduct() {
  var cartValue = localStorage.getItem("products");
  const cart = document.getElementById("cartproduct");
  cart.innerText = cartValue;
}

// Show the initial cart value on page load
showTotalCartOfProduct();
