class Switch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>

    .switch {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 37px;
    }

    .input {
    opacity: 0;
    width: 0;
    height: 0;
    outline: none;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 30px;
    border: 2px solid #171717;
    }

    .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #171717;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    }

    .input:checked + .slider {
    background-color: #171717;
    }
    .input:checked + .slider:before {
    -webkit-transform: translateX(40px);
    -ms-transform: translateX(40px);
    transform: translateX(40px);
    background-color: #f5f5f5;
    }

    </style>

    <label class="switch">
      <input class="input" type='checkbox' />
      <span class="slider" />
    </label>
    `;
  }
}

export default Switch;
