const inputTemplate = document.createElement("template");
inputTemplate.innerHTML = `
<style>

    div {
        display: flex;
        align-items: center;
        border: 3px solid #232323;
        width: auto;
        padding: 0.25rem;
    }

    input {
        border: none;
        background-color: transparent;
        margin-right: 0.5rem;
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 1rem;
        color: #232323
    }

    img {
        width: 20px;
        cursor: pointer;
        display: none;
    }
</style>
<div>
    <input id="input"/>
    <img src="https://image.flaticon.com/icons/svg/126/126497.svg" id="clearIcon"/>
</div>
`;

class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(inputTemplate.content.cloneNode(true));
    this.shadowRoot
      .getElementById("clearIcon")
      .addEventListener("click", () => {
        this.shadowRoot.getElementById("input").value = "";
        this.shadowRoot.getElementById("clearIcon").style.display = "none";
      });
    this.shadowRoot.getElementById("input").addEventListener("keypress", () => {
      if (this.shadowRoot.getElementById("input").value) {
        this.shadowRoot.getElementById("clearIcon").style.display = "block";
      }
    });
  }
}

export default Input;
