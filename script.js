const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const previewTitle = document.querySelector(".preview-title");
const lineNoContainer = document.querySelector(".ln-container");
let spanElement = document.querySelectorAll(".ln-container > span");
let body_bg = document.querySelector("body");

let projectName;
let lineNumber = 14;
let spanEl;
editor.value = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
   
    /* write your css here */

  </style>
</head>
<body>
    <!--Write Your HTML here-->
</body>
</html>`;

document.addEventListener("DOMContentLoaded", () => {
    projectName = prompt("Give a name to your Project :)");
    if (projectName) {
        previewTitle.textContent = projectName;
    }
    else if (projectName == "") {
        previewTitle.textContent = "No name specified";
    }

    let mode = prompt("Select theme mode:   1:Dark     2: Light");

    if (mode == "2" | mode == "Light") {
        body_bg.classList.add("light");
    }
    else {
        console.log("dark mode activated");
    }

    // document.addEventListener('keydown', function (e) {
    //     let key = e.key;
    //     console.log(key);
    //     // code for disabling ctrl+s save function.
    //     if (key == "Control") {
    //         document.addEventListener('keydown', function (e) {
    //             let secondKey = e.key;
    //             if (secondKey == "s") {
    //                 e.preventDefault();
    //             }

    //         })
    //     }

    // })
});

editor.addEventListener("input", () => {
    const value = editor.value;
    preview.contentDocument.documentElement.innerHTML = value;
});

editor.addEventListener('focus', function () {

    editor.addEventListener('keydown', function (e) {
        console.log(e.key);

        if (e.key == "Enter") {
            spanEl = document.createElement("span");
            lineNoContainer.appendChild(spanEl);
            lineNumber++;
            spanEl.textContent = lineNumber;
        }
        if (e.key == "Backspace") {
            for (let i = lineNumber; i >= 0; i--) {
                console.log(spanElement);
                lineNoContainer.removeChild(spanEl[lineNumber - 14]);
                lineNumber--;
            }
        }



    })
})
