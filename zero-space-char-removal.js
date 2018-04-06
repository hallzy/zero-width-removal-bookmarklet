javascript:(function() {
  var body = document.body.innerHTML;

  var zeroWidthExists = body.includes("﻿") || /* <feff> */
                        body.includes("​") || /* <200b> */
                        body.includes("‌") || /* <200c> */
                        body.includes("‍");   /* <200d> */

  if (zeroWidthExists) {
    var message = "There is at least 1 Zero-Width Character on this page!\n\n";
    message += "Would you like to strip the zero-width characters from this ";
    message += "page?";
    var response = window.confirm(message);

    if (response) {
      document.body.innerHTML = body.split('').filter(function(char) {
        if (char == "﻿" || /* <feff> */
            char == "​" || /* <200b> */
            char == "‌" || /* <200c> */
            char == "‍"    /* <200d> */
          ) {
          return false;
        }
        return true;
      }).join('');
    }
  }
  else {
    window.alert("No zero-width characters found");
  }
}());
