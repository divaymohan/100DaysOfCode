function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, .5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
        myMove1();
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
    
  }
  function myMove1() {
    var elem = document.getElementById("animate");   
    var pos = 350;
    var id = setInterval(frame, .5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
        myMove();
      } else {
        pos--; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
    
  }