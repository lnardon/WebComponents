class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.getElementById("btn").addEventListener("click", () => {
      if (this.getAttribute("url")) {
        fetch(this.getAttribute("url"), {
          method: "POST",
          body: JSON.stringify({
            username: this.shadowRoot.getElementById("username").value,
            password: this.shadowRoot.getElementById("password").value,
          }),
        });
      } else {
        alert("API url undefined on html tag");
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>

        .loginFormContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%
        }

        .inputContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 1rem
        }

        .inputContainer > input {
            border: 3px solid #232323;
            background-color: transparent;
            padding: 0.5rem;
            font-size: 1rem;
        }

        .loginBtn {
            border: none;
            outline: none;
            padding: 0.75rem;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            background-color: #232323;
            color: #fafafa;
            width: 100%
        }

        img {
            width: 100px;
        }

    </style>
    <div class="loginFormContainer">
        ${
          this.getAttribute("photo")
            ? `<img src=${this.getAttribute("photo")} />`
            : " <div style='width: 100%;'/>"
        }
        <div class="inputContainer">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" />
        </div>
        <div class="inputContainer">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
        </div>
        <button class="loginBtn" id="btn"> Login </button>
    </div>
    `;
  }
}

export default LoginForm;
