class Rating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.getElementById("star").addEventListener("click", () => {
      console.log("test");
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
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon" id="star"/>
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon"/>
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon"/>
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon"/>
        <img src="https://image.flaticon.com/icons/svg/1828/1828970.svg" alt="Rating Icon" class="starIcon"/>
    </div>
    `;
  }
}

export default Rating;
