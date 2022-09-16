let modal = document.getElementById("popup");
let span = document.getElementById("cp");

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// The code for the pop-up was borrowed and adjusted from this source: https://insidethediv.com/show-popup-modal-only-once-per-session

$(document).ready(function(){
  setTimeout(showPopup, 3000)

  function showPopup(){
    let is_already_show = sessionStorage.getItem('alreadyShow');
    if (is_already_show != 'already shown') {
      sessionStorage.setItem('alreadyShow', 'already shown');
      $(".popup").show();
    }
    else {
      console.log(is_already_show);
    }
  }

})