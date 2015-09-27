
$(document).ready(function(){ 
  $('#zombie-to-english-btn').click(function(event){
    unzombify();
    return false;
  });

  $('#english-to-zombie-btn').click(function(event){
    zombify();
    return false;
  });

  function zombify(){   
    var input = $('#english').val();
    input = input.replace(/(r$)|(r\s)/g, "rh"); // 1. lower-case "r" at the end of words replaced with "rh".
	input = input.replace(/a\b/ig, "hra"); // 2. an "a" or "A" by itself will be replaced with "hra".
	input = input.replace(/[.!?]\s/g, "TODO");  // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
    input = input.replace(/e/ig, "rr");  // 4. "e" or "E" is replaced by "rr"
    input = input.replace(/i/ig, "rrRr"); // 5. "i" or "I" is replaced by "rrRr"
    input = input.replace(/o/ig, "rrrRr"); // 6. "o" or "O" is replaced by "rrrRr"
    input = input.replace(/u/ig, "rrrrRr"); // 7. "u" or "U" is replaced by "rrrrRr"
    input = input.replace(/r/ig, "RR"); // 8. "r" or "R' is replaced by "RR"
    $('#zombie').val(input);
  }

  function unzombify(){


  }

  $('#english').on("keyup", zombify);


});

