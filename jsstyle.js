var style = {
  "body" : {
    "background-color" : "#000",
    "color" : "#FFF",
    "float" : "left"
  },
  ".foo" : {
    "background-color" : "#333",
  },
  "#bar" : {
    "background-color" : "rebeccapurple"
  },
  "a" : {
    "font-weight" : "900",
    "font-style" : "italic"
  },
  ".foo > a" : {
    "text-decoration": "overline"
  },
  "#title" : {
    "display" : (function() {
      if (window.innerWidth < 960) {
        return "none";
      } else {
        return "block";
      }
    })()
  }
}

function jsStyle(styleObj) {



  // Loop through selectors
  for (var e in styleObj) {

    var selector = document.querySelectorAll(e);

    // Loop through styles for this selector
    for (var i in styleObj[e]) {
      var val = styleObj[e][i];

      // Modify if necessary (JS uses different CSS property names sometimes)
      switch(i) {
        case "float":
          i = "cssFloat";
          break;
        default:
          if (i.indexOf("-") !== -1) {
            var arr = i.split("-");
            var str = "";
            for (var a = 0; a < arr.length; a++) {
              if (a === 0) {
                str = arr[a];
              } else {
                str += arr[a].replace(/\S/, function(m){return m.toUpperCase()});
              }
            }
            i = str;
          }
      }

      // Apply styles to DOM
      for (var s = 0; s < selector.length; s++) {
        selector[s].style[i] = val;
      }
    }
    
  }
}

jsStyle(style);