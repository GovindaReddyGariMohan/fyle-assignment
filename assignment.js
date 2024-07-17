let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

$(document).ready(function () {
    $(".form").hide();
    $("#hide").click(function () {
        $(".form").hide();
    });
    $("#show").click(function () {
        $(".form").show();
    });
    $("#close").click(function () {
        $(".form").hide();
    });

});
// form data

const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    $(".form").hide()
    fetch("https://getform.io/f/bejylvka", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })

        .catch(error => console.log(error))
}
function check_agree(form) {
    if (form.agree.checked) {
        return true;
    }
    if (form.agree.checked) {
        alert('You must agree to the application agreement terms before continuing.');
    }
    else if (form.agree.checked) {
        alert("message #2!");
    }
    else {
        alert('You must agree ');
    }
    return false;
}