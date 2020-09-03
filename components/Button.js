class Button extends HTMLElement {
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
        
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.25rem 1rem;
            background-color: #171717;
            border: none;
            color: #fafafa;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            outline: none;
        }

        button:hover {
            transform: scale(1.05);
        }
    
    </style>
    <button>${this.getAttribute("label")}</button>
    `;
  }
}

export default Button;
