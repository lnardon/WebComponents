class Rating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector("#s1").addEventListener("mouseover", () => {
      this.shadowRoot.querySelectorAll(".starIcon").forEach((node, index) => {
        if (index < 1) {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828961.svg"
          );
        } else {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828970.svg"
          );
        }
      });
    });
    this.shadowRoot.querySelector("#s2").addEventListener("mouseover", () => {
      this.shadowRoot.querySelectorAll(".starIcon").forEach((node, index) => {
        if (index < 2) {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828961.svg"
          );
        } else {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828970.svg"
          );
        }
      });
    });
    this.shadowRoot.querySelector("#s3").addEventListener("mouseover", () => {
      this.shadowRoot.querySelectorAll(".starIcon").forEach((node, index) => {
        if (index < 3) {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828961.svg"
          );
        } else {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828970.svg"
          );
        }
      });
    });
    this.shadowRoot.querySelector("#s4").addEventListener("mouseover", () => {
      this.shadowRoot.querySelectorAll(".starIcon").forEach((node, index) => {
        if (index < 4) {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828961.svg"
          );
        } else {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828970.svg"
          );
        }
      });
    });
    this.shadowRoot.querySelector("#s5").addEventListener("mouseover", () => {
      this.shadowRoot.querySelectorAll(".starIcon").forEach((node, index) => {
        if (index < 5) {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828961.svg"
          );
        } else {
          node.setAttribute(
            "src",
            "https://image.flaticon.com/icons/svg/1828/1828970.svg"
          );
        }
      });
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
        
        .ratingContainer{
            width: 125px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        .starIcon {
            width: 20px;
            margin: 0rem 0.125rem
        }
    </style>

    <div class="ratingContainer">
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon" id="s1"/>
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon" id="s2"/>
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon" id="s3"/>
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon" id="s4"/>
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon" id="s5"/>
    </div>
    `;
  }
}

export default Rating;
