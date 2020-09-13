class Video extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const video = this.shadowRoot.getElementById("video");
    const controls = this.shadowRoot.getElementById("controls");
    this.shadowRoot.getElementById("play").addEventListener("click", () => {
      if (video.classList.contains("paused")) {
        video.play();
        video.classList.remove("paused");
        video.classList.add("playing");
      } else {
        video.pause();
        video.classList.remove("playing");
        video.classList.add("paused");
      }
    });
    video.addEventListener("mouseenter", () => {
      controls.style.display = "block";
    });
    video.addEventListener("mouseout", () => {
      setTimeout(() => (controls.style.display = "none"), 3000);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
        .container {
            width: 100%;
            position: relative;
            padding:0px;
            margin:0px;
        }

        #video {
            max-width:100%;
        }

        .controls {
            position: absolute;
            width: 100%;
            height: 2rem;
            background-color: #171717;
            box-sizing: border-box;
            bottom: 0px;
        }

        button {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer
        }
    </style>
    <div class="container">
        <video src="./vid.mp4" id="video"></video>
        <div class="controls" id="controls">
            <button id="play">=></button>
        </div>
    </div>
    `;
  }
}

export default Video;
