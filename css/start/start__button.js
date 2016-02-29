(function() {
      	var buttonOne = document.getElementById("button");
        var logo = document.getElementById("logo");
        var contentBlock = document.getElementById("content");
        var closeButton = document.getElementById("close");
      	buttonOne.onclick = function() {
            logo.style.display = "none";
            contentBlock.style.opacity = "1";
      	};

      	closeButton.onclick = function() {
          contentBlock.style.opacity = "";
          logo.style.display = "";
      	}

      })()