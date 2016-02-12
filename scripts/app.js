"use strict";

function replaceContent() {
	console.log("App started");
		var introduction;
		var about_me;
		var my_project1;
		var my_project2;
		var my_project3;
		var contact_me;

			introduction = document.getElementById("introduction");

			if (introduction != null) {
				about_me = document.getElementById("about_me");
				introduction.innerHTML = "My name is Jacob Gittings. I am a Web Developer from Barrie, Ontaio. My goal is to develop, provide, and maintain web solutions for the future.";
				about_me.innerHTML = "I am currently an IWDD (Interactive Web Development & Design) student at Georgian College. My goal is to provide well crafted and well supported web solutions.";
			};

			if (introduction == null) {
			my_project1 = document.getElementById("my_project1");

				if (my_project1 != null) {
				my_project1.innerHTML = "The object of this project was to create a multi-page site with a functioning nav bar. I also made it as responsive as I was able to at the time.";

				my_project2 = document.getElementById("my_project2");
				my_project2.innerHTML = "This project was done with pseudo code, a fake computing language which helps with planning a project.";

				my_project3 = document.getElementById("my_project3");
				my_project3.innerHTML = "";
				}

				if (my_project1 == null) {
					contact_me = document.getElementById("contact_me");
					contact_me.innerHTML = "Feel free to send me a message";
				}}};
replaceContent();