class Select extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot
      .querySelector(".custom-select-wrapper")
      .addEventListener("click", function () {
        this.querySelector(".custom-select").classList.toggle("open");
      });
  }

  getUserOptions() {
    let options = "";
    const userOptions = this.textContent.trim().split(",");
    userOptions.forEach((option) => {
      options += ` <span class="custom-option" data-value="${
        option.split("-")[1]
      }">${option.split("-")[0]}</span>\n`;
    });
    for (const option of this.shadowRoot.querySelectorAll(".custom-option")) {
      option.addEventListener("click", (opt) => {
        if (!this.shadowRoot.children[1].classList.contains("selected")) {
          this.shadowRoot
            .querySelector(".custom-option.selected")
            .classList.remove("selected");
          opt.target.classList.add("selected");
          this.shadowRoot.querySelector("#label").textContent =
            opt.target.innerText;
        }
      });
    }
    return options;
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after, q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        *, *:after, *:before {
            box-sizing: border-box;
        }

        .custom-select-wrapper {
            position: relative;
            user-select: none;
            width: 100%;
        }
        .custom-select {
            position: relative;
            display: flex;
            flex-direction: column;
            border: 3px solid #171717
        }
        .custom-select__trigger {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 1rem;
            font-size: 20px;
            font-weight: 300;
            color: #3b3b3b;
            height: 35px;
            background: #ffffff;
            cursor: pointer
        }
        .custom-options {
            position: absolute;
            display: block;
            top: 100%;
            left: -3px;
            right: 0;
            border: 3px solid #171717;
            border-top: 0;
            background: #fff;
            transition: all 0.5s;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            z-index: 2;
        }
        .custom-select.open .custom-options {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }
        .custom-option {
            position: relative;
            display: block;
            padding: 0 22px 0 22px;
            font-size: 22px;
            font-weight: 300;
            color: #3b3b3b;
            line-height: 35px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }
        .custom-option:hover {
            cursor: pointer;
            background-color: #171717;
            color: #fafafa
        }
        .custom-option.selected {
            color: #ffffff;
            background-color: #171717;
        }

        .arrow {
            position: relative;
            height: 15px;
            width: 15px;
        }
        .arrow::before, .arrow::after {
            content: "";
            position: absolute;
            bottom: 0px;
            width: 0.15rem;
            height: 100%;
            transition: all 0.5s;
        }
        .arrow::before {
            left: -5px;
            transform: rotate(45deg);
            background-color: #394a6d;
        }
        .arrow::after {
            left: 5px;
            transform: rotate(-45deg);
            background-color: #394a6d;
        }
        .open .arrow::before {
            left: -5px;
            transform: rotate(-45deg);
        }
        .open .arrow::after {
            left: 5px;
            transform: rotate(45deg);
        }

    </style>
    <div class="custom-select-wrapper">
        <div class="custom-select">
            <div class="custom-select__trigger"><span id="label">Tesla</span>
                <div class="arrow"></div>
            </div>
            <div class="custom-options">
                ${this.getUserOptions()}
            </div>
        </div>
    </div>
    `;
  }
}

export default Select;
