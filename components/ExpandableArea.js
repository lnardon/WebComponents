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
        this.shadowRoot.getElementById("arrow").classList.remove("downArrow");
        this.shadowRoot.getElementById("arrow").classList.add("rightArrow");
      } else {
        this.shadowRoot
          .getElementById("description")
          .classList.add("openAnimation");
        this.shadowRoot
          .getElementById("description")
          .classList.remove("closeAnimation");
        this.shadowRoot.getElementById("arrow").classList.remove("rightArrow");
        this.shadowRoot.getElementById("arrow").classList.add("downArrow");
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

      .container {
        display: block;
        width: 100%;
        border: 3px solid #171717;
        padding: 0.5rem;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 1.25rem;
        font-weight: bold;
        cursor:pointer;
      }

      .arrow {
        width: 20px
      }

      .description {
        opacity: 0;
        height: 0px;
        overflow: hidden;
      }

      .openAnimation {
        animation: openAnimation 0.7s ease-out forwards;
      }

      .closeAnimation {
        animation: closeAnimation 0.7s ease-out forwards;
      }

      .rightArrow {
        animation: rightAnimation 0.7s ease-out forwards;
      }

      .downArrow {
        animation: downAnimation 0.7s ease-out forwards;
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
          padding: 0.5rem;
        }
      }

      @keyframes closeAnimation {
        from {
          opacity: 1;
          padding: 0.5rem;
        }
        to {
          opacity: 0;
          height: 0;
          overflow: hidden;
        }
      }

      @keyframes rightAnimation {
        from {
          transform: rotate(90deg);
        }
        to {
          transform: rotate(0deg);
        }
      }

      @keyframes downAnimation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(90deg);
        }
      }

    </style>
    <div class="container">
        <div class="header" id="header">
          ${this.headerValue}         
          <img
            src='https://image.flaticon.com/icons/svg/60/60758.svg'
            alt='Arrow'
            class="arrow"
            id="arrow"
          />
        </div>
        <div class="description" id="description">${this.descriptionValue}</div>
    </div>
    `;
  }
}

export default Input;
