const langButton = document.querySelectorAll(".lang-button");
const htmlButton = document.getElementById("html-button");
const cssButton = document.getElementById("css-button");
const jsButton = document.getElementById("js-button");
const outputButton = document.getElementById("output-button");

const htmlDiv = document.getElementById("html-div");
const cssDiv = document.getElementById("css-div");
const jsDiv = document.getElementById("js-div");
const outputDiv = document.getElementById("output-div");

const outputFrame = document.getElementById("output-iframe");
const outputFrameContents =
  outputFrame.contentDocument || outputFrame.contentWindow.document;
const htmlContent = document.getElementById("html-content");
const cssContent = document.getElementById("css-content");
const jsContent = document.getElementById("js-content");

const textAreas = document.querySelectorAll("textarea");

const toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};

const bindEvent = (element, events, handler) => {
  if (Array.isArray(events)) {
    // multiple events
    events.forEach((event) => {
      element.addEventListener(event, handler);
    });
  } else {
    element.addEventListener(events, handler);
  }
};

langButton.forEach((button) => {
  button.addEventListener("mouseenter", (event) => {
    button.classList.add("lang-button-hover");
  });

  button.addEventListener("mouseleave", (event) => {
    button.classList.remove("lang-button-hover");
  });
});

htmlButton.addEventListener("click", (event) => {
  toggleClass(htmlButton, "active-button");
  toggleClass(htmlDiv, "active-lang-div");
  toggleClass(htmlDiv, "inactive-lang-div");
});

cssButton.addEventListener("click", (event) => {
  toggleClass(cssButton, "active-button");
  toggleClass(cssDiv, "active-lang-div");
  toggleClass(cssDiv, "inactive-lang-div");
});

jsButton.addEventListener("click", (event) => {
  toggleClass(jsButton, "active-button");
  toggleClass(jsDiv, "active-lang-div");
  toggleClass(jsDiv, "inactive-lang-div");
});

outputButton.addEventListener("click", (event) => {
  toggleClass(outputButton, "active-button");
  toggleClass(outputDiv, "active-lang-div");
  toggleClass(outputDiv, "inactive-lang-div");
});

const updateOutput = () => {
  const finalContent = `
        <html>
            <head>
                <style type='text/css'>
                    ${cssContent.value}
                </style>
                <body>
                    ${htmlContent.value}
                    <script>
                        ${jsContent.value}
                    </script>
                </body>
            </head>

        </html>
    `;
  outputFrameContents.querySelector("html").innerHTML = finalContent;

  outputFrame.contentWindow.eval(jsContent.value);
};

updateOutput();

bindEvent(htmlContent, ["change", "keyup", "paste"], function () {
  updateOutput();
  outputFrame.contentDocument.eval(jsContent.value);
});

bindEvent(cssContent, ["change", "keyup", "paste"], function () {
  updateOutput();
  outputFrame.contentDocument.eval(jsContent.value);
});

bindEvent(jsContent, ["change", "keyup", "paste"], function () {
  updateOutput();
  outputFrame.contentDocument.eval(jsContent.value);
});

textAreas.forEach((textArea) => {
  bindEvent(textArea, "keydown", function (e) {
    if (e.keyCode === 9) {
      // tab was pressed
      // get caret position/selection
      let start = this.selectionStart;
      let end = this.selectionEnd;

      let value = e.target.value;

      // set textarea value to: text before caret + tab + text after caret
      e.target.value = value.substring(0, start) + "\t" + value.substring(end);

      // put caret at right position again (add one for the tab)
      this.selectionStart = this.selectionEnd = start + 1;

      // prevent the focus lose
      e.preventDefault();
    }
  });
});
