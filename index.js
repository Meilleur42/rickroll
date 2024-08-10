function HideMenuOne() {
    const MenuOne = document.getElementById("menu_one");
    
     if (MenuOne.style.visibility === "visible") {
      MenuOne.style.visibility = "hidden";
    } else {
      MenuOne.style.visibility = "visible";
    }
  }
  
  function HideMenuTwo() {
    const MenuTwo = document.getElementById("menu_two");
    
     if (MenuTwo.style.visibility === "visible") {
         MenuTwo.style.visibility = "hidden";
    } else {
         MenuTwo.style.visibility = "visible";
    }
  }
  
  function HideMenuThree() {
    const MenuThree = document.getElementById("menu_three");
    
     if (MenuThree.style.visibility === "visible") {
         MenuThree.style.visibility = "hidden";
    } else {
         MenuThree.style.visibility = "visible";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var showVideoButton = document.getElementById('trailerButton');
    showVideoButton.addEventListener('click', function() {
      window.location.href = "trailer.html";
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var showVideoButton = document.getElementById('RickRollButton');
    showVideoButton.addEventListener('click', function() {
      window.location.href = "video.html";
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var RickrollButton = document.getElementById('RickrollButton');
    RickrollButton.addEventListener('click', function() {
      window.location.href = "video.html";
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var rickroll = document.getElementById('menu_three');
    rickroll.addEventListener('click', function() {
      window.location.href = "video.html";
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var rickroll = document.getElementById('menu_two');
    rickroll.addEventListener('click', function() {
      window.location.href = "video.html";
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var rickroll = document.getElementById('menu_one');
    rickroll.addEventListener('click', function() {
      window.location.href = "video.html";
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var rickroll = document.getElementById('rickroll');
    rickroll.addEventListener('click', function() {
      window.location.href = "video.html";
    });
  });
  
  
  
  
  
  
  
    
    