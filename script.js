const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// model
var modal = document.getElementById("myModal");


var button = document.getElementById("button");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
button.onclick = function () {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
	modal.style.display = "none";
}

// form data

const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
	e.preventDefault();
	const formData = new FormData(e.target);

	fetch("https://getform.io/f/lbkmwjqb", {
		method: "POST",
		body: formData,
		headers: {
			"Accept": "application/json",
		},
	})
		.then(response => console.log(response))
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