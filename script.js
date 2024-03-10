let optionsButtons = document.querySelector(".option-button");
let advancedOptionButton = document.querySelector(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("FontSize");

let writingArea = document.getElementById("textInput");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

//List of fonts
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
];

const initializer = () => {
  hightlighter(alignButtons, true);
  hightlighter(spacingButtons, true);
  hightlighter(alignButtons, false);
  hightlighter(scriptButtons, true);
};

//Highlight Clicked button
const hightlighter = (className, needRemovals) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval =  true means only one button should be highlighted and other would be normal
      if (needRemovals) {
        let alreadyActive = false;

        //If currently clicked button is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        //Removing highlight from other buttons
        hightlighterRemover(className);
        if (!alreadyActive) {
          //hightlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};
