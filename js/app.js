define(["jQuery", "bootstrap"],function($)
{

	$(function() {
		console.log("required plugins loaded");
		
		var zombieRules = {};

		zombieRules.rule1 = function(input) {
 			return input.replace(/r\b/g, "rh"); // 1. lower-case "r" at the end of words replaced with "rh".
		};
		zombieRules.rule2 = function(input) {
 			return input.replace(/a\b/ig, "hra"); // 2. an "a" or "A" by itself will be replaced with "hra".
		};
		zombieRules.rule3 = function(input) { 
 			return input.replace(/[.!?]\s/g, "_");  // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
		};
		zombieRules.rule4 = function(input) { 
 			return input.replace(/e/ig, "rr");  // 4. "e" or "E" is replaced by "rr"
		};
		zombieRules.rule5 = function(input) { 
 			return input.replace(/i/ig, "rrRr"); // 5. "i" or "I" is replaced by "rrRr"
		};
		zombieRules.rule6 = function(input) { 
 			return input.replace(/o/ig, "rrrRr"); // 6. "o" or "O" is replaced by "rrrRr"
		};
		zombieRules.rule7 = function(input) { 
 			return input.replace(/u/ig, "rrrrRr"); // 7. "u" or "U" is replaced by "rrrrRr"
		};
		zombieRules.rule8 = function(input) { 
 			return input.replace(/r\B/ig, "RR"); // 8. "r" or "R' is replaced by "RR" as long as it's not at the end of a sentance
		};
		zombieRules.rule9 = function(input) { 
 			return input.replace(/f/ig, "BRRRAINSSsssss"); //"f" or "F' is replaced by "BRRRAINSSsssss"
		};
		zombieRules.rule10 = function(input) { 
			console.log(input);
 			return input.replace(/z/ig, "gurgg"); //turn "z" or "Z" into gurgg
		};

		function zombify(){   
			var input = $('#english').val();

			input = zombieRules.rule2(input);
			input = zombieRules.rule3(input);
			input = zombieRules.rule4(input);
			input = zombieRules.rule5(input);
			input = zombieRules.rule6(input);
			input = zombieRules.rule1(input);
			input = zombieRules.rule8(input);
			input = zombieRules.rule7(input);
			input = zombieRules.rule9(input);
			input = zombieRules.rule10(input);

			$('#zombie').val(input);
		}
		  $('#zombie-to-english-btn').click(function(event){
		    unzombify();
		    return false;
		  });
		
		  $('#english-to-zombie-btn').click(function(event){
		    zombify();
		    return false;
		  });
		
		  function unzombify(){
		
		
		  }
		
		  $('#english').on("keyup", zombify);
	});
	
	

});
