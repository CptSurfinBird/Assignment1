"use strict";

(function () {
	console.log("App started");
	
	function replaceContent() {
		var introduction;
			introduction = document.getElementById("introduction");
			introduction.innerHTML = "My name is Jacob Gittings. I am a Web Developer from Barrie, Ontaio. My goal is to develop, provide, and maintain web solutions for the future.";

		var about_me;
			about_me = document.getElementById("about_me");
			about_me.innerHTML = "I am currently an IWDD (Interactive Web Development & Design) student at Georgian College. My goal is to provide well crafted and well supported web solutions.";

		var my_project1;
			my_project1 = document.getElementById("my_project1");
			my_project1.innerHTML = "The object of this project was to create a multi-page site with a functioning nav bar. I also made it as responsive as I was able to at the time.";

		var my_project2;
			my_project2 = document.getElementById("my_project2");
			my_project2.innerHTML = "Cover UP!";

		var my_project3;
			my_project3 = document.getElementById("my_project3");
			my_project3.innerHTML = "COVER UP!!";

		var contact_me;
			contact_me = document.getElementById("contact_me");
			contact_me.innerHTML = "Feel free to send me a message";
	}
})();
