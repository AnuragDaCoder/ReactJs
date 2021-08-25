const jsDiv = document.getElementById("InJavascript");
const reactDiv = document.getElementById("InReact");

const render = () => {
  jsDiv.innerHTML = `
    <div class="split">
      Inside Javascript
      <input />
      <p>${new Date()}</p>
    </div>
  `;

  var divToRender = React.createElement(
    "div",
    { className: "split" },
    "Inside React",
    React.createElement("input"),
    React.createElement("p", null, new Date().toString())
  );
  ReactDOM.render(divToRender, reactDiv);
};

setInterval(render, 1000);
