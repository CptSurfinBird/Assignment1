"use strict";

// setup your IIFE (Immediatley Invoked Function Expression)
(function(){

	var paragraphData = ["First Paragraph", "Second Paragraph", "Third Paragraph", "Fourth Paragraph"];

	console.log("App Started...");

	var paragraphDataLength = ParagraphData.Length;
	for(var index= 0; index < paragraphDataLength; index++ ) {
		console.log(paragraphData[index]);
	}



	// declared a named function <- use for Tom's class
	function replaceFirstParagraph() {
		console.log("inside replaceFirstParagraph function");
		var firstParagraph;
		
		firstParagraph = document.getElementById("firstParagraph");
		
		firstParagraph.innerHTML = "I am a web developer from Barrie, Ontario. My goals are to create new and inavative web soloutions for the future.";
	}

	// declare an anonymous function with named alias
	/*
	var replaceFirstParagraph = function() {
		console.log("inside replaceFirstParagraph function");
		var firstParagraph;
		
		firstParagraph = document.getElementById("firstParagraph");
		
		firstParagraph.innerHTML = "My New Paragraph Data";		
	};
	*/
	
	// call the replaceFirstParagraph function
	replaceFirstParagraph();
	
})();
