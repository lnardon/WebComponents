const userCardTemplate = document.createElement("template");
userCardTemplate.innerHTML = `
<style>
    h1 {
        color: #313131;
        font-weight : 700;
        text-align: center;
        font-size: 51px;
        font-family: 'Monospace', Arial
    }
</style>
<div class="user-card">
    <h1></h1>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(userCardTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");
  }
}

window.customElements.define("user-card", UserCard);
