class ContactForm extends HTMLElement {
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
            name: this.shadowRoot.getElementById("name").value,
            email: this.shadowRoot.getElementById("email").value,
            message: this.shadowRoot.getElementById("message").value,
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

        h1 {
            margin: 0px 0px 0.5rem 0px
        }

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
            margin-bottom: 1rem;
        }

        .inputContainer > input {
            border: 3px solid #232323;
            background-color: transparent;
            padding: 0.5rem;
            font-size: 1rem;
            outline: none
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

        textarea {
            border: 3px solid #232323;
            background-color: transparent;
            padding: 0.5rem;
            height: 150px;
            outline: none;
            resize: none
        }

    </style>
    <div class="loginFormContainer">
        ${
          this.getAttribute("title")
            ? `<h1>${this.getAttribute("title")}</h1>`
            : `<h1>Contact Form</h1>`
        }
        <div class="inputContainer">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" />
        </div>
        <div class="inputContainer">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" />
        </div>
        <div class="inputContainer">
            <label for="message">Message:</label>
            <textarea name="message" id="message"></textarea>
        </div>
        <button class="loginBtn" id="btn"> Send Message</button>
    </div>
    `;
  }
}

export default ContactForm;
