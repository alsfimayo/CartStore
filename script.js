// Load header and footer components
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
  console.log("s");
  document.getElementById("mySidenav").style.width = "px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
