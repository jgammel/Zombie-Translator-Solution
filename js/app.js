
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
    // 1. lower-case "r" at the end of words replaced with "rh".
    // 2. an "a" or "A" by itself will be replaced with "hra".
    // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
    //   ".!?", followed by a space, followed by a letter.)
    // 4. "e" or "E" is replaced by "rr"
    // 5. "i" or "I" is replaced by "rrRr"
    // 6. "o" or "O" is replaced by "rrrRr"
    // 7. "u" or "U" is replaced by "rrrrRr"
    // 8. "r" or "R' is replaced by "RR"
    var input = $('#english').val();
    input = input.replace(/r$/g, "rh");
    input = input.replace(/a/gi, "hra");
    input = input.replace(/e/gi, "rr");
    input = input.replace(/i/gi, "rrRr");
    input = input.replace(/o/gi, "rrrRr");
    input = input.replace(/u/gi, "rrrrRr");
    $('#zombie').val(input);
  }

  function unzombify(){


  }

  $('#english').on("keyup", zombify);


});

