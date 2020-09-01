class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.getElementById("header").addEventListener("click", () => {
      if (
        this.shadowRoot
          .getElementById("description")
          .classList.contains("openAnimation")
      ) {
        this.shadowRoot
          .getElementById("description")
          .classList.add("closeAnimation");
        this.shadowRoot
          .getElementById("description")
          .classList.remove("openAnimation");
      } else {
        this.shadowRoot
          .getElementById("description")
          .classList.add("openAnimation");
        this.shadowRoot
          .getElementById("description")
          .classList.remove("closeAnimation");
      }
    });
  }

  get headerValue() {
    return this.getAttribute("header");
  }

  get descriptionValue() {
    return this.getAttribute("description");
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
      .header {
        display: flex;
        align-items: center;
        width: auto;
        padding: 0.25rem;
        border-radius: 0.25rem
      }

      .description {
        opacity: 0;
        height: 0px;
        width: 100%;
        font-size: 1rem;
        color: #232323;
        border: 2px solid #232323;
      }

      .openAnimation {
        animation: openAnimation 0.7s ease-out forwards;
      }

      .closeAnimation {
        animation: closeAnimation 0.7s ease-out forwards;
      }

      @keyframes openAnimation {
        from {
          opacity: 0;
          height: 0;
          overflow: hidden;
        }
        to {
          opacity: 1;
          height: auto;
          padding: 0.5rem 1rem;
        }
      }

      @keyframes closeAnimation {
        from {
          opacity: 1;
          padding: 0.5rem 1rem;
        }
        to {
          opacity: 0;
          height: 0;
          overflow: hidden;
        }
      }

    </style>
    <div>
        <div class="header" id="header">${this.headerValue}</div>
        <div class="description" id="description">${this.descriptionValue}</div>
    </div>
    `;
  }
}

export default Input;
