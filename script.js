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

console.log(scriptButtons);

const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  //create options for font names
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName?.appendChild(option);
  });

  //fontSize allows only till 7
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  //default sizing
  fontSizeRef.value = 3;
};

//Highlight Clicked button
const highlighter = (className, needRemovals) => {
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
        highlighterRemover(className);
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

const highlighterRemover = (elements) => {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
};

window.onload = initializer();
