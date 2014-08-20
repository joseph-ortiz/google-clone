(function () {
	'use strict';
}());
document.getElementById("searchButton")
		.addEventListener("click", function (event) {	
	var baseUrl = "https://www.google.com/search?q=",
	searchTerm = document.getElementById('searchText').value; //get searchTerm

	var searchUrl = baseUrl + searchTerm; //Build searchText

	window.location.href = searchUrl;//on click go to website
});

//click event code from MDN
//Link: https://developer.mozilla.org/en-US/docs/Web/Events/click
