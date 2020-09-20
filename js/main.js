// Show logo on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector("#show-on-scroll").style.opacity = 1;
  } else {
    document.querySelector("#show-on-scroll").style.opacity = 0;
  }
});

/* Hide and show toogle when clicked */
function menuDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if clicked outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Image Slideshow Animation
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

//Cart
var minVal = 1,
  maxVal = 20; // Set Max and Min values
// Increase product quantity on cart page
$(".increaseQty").on("click", function () {
  var $parentElm = $(this).parents(".qtySelector");
  $(this).addClass("clicked");
  setTimeout(function () {
    $(".clicked").removeClass("clicked");
  }, 100);
  var value = $parentElm.find(".qtyValue").val();
  if (value < maxVal) {
    value++;
  }
  $parentElm.find(".qtyValue").val(value);
});
// Decrease product quantity on cart page
$(".decreaseQty").on("click", function () {
  var $parentElm = $(this).parents(".qtySelector");
  $(this).addClass("clicked");
  setTimeout(function () {
    $(".clicked").removeClass("clicked");
  }, 100);
  var value = $parentElm.find(".qtyValue").val();
  if (value > 1) {
    value--;
  }
  $parentElm.find(".qtyValue").val(value);
});
