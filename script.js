/**
 * Created by dmitry on 11.08.2016.
 */
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName('openModalImg');
var modalImg = document.getElementById("imgPlaceHolder");
var captionText = document.getElementById("caption");


for (var i=0; i<imgs.length; i++) {
    imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeImg")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

