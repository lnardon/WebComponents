class Video extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const container = this.shadowRoot.getElementById("container");
    const video = this.shadowRoot.getElementById("video");
    const controls = this.shadowRoot.getElementById("controls");
    const settings = this.shadowRoot.getElementById("settings");
    const backdrop = this.shadowRoot.getElementById("videoBackdrop");
    const fullscreenBtn = this.shadowRoot.getElementById("fullscreen");

    let lastTimeOut;
    this.shadowRoot.getElementById("play").addEventListener("click", () => {
      if (video.classList.contains("playing")) {
        video.pause();
        video.classList.remove("playing");
        video.classList.add("paused");
      } else {
        video.play();
        video.classList.remove("paused");
        video.classList.add("playing");
      }
    });
    video.addEventListener("mouseenter", () => {
      clearTimeout(lastTimeOut);
      controls.style.display = "flex";
      backdrop.style.animation = "backdropAnimation .3s ease-out forwards";
    });
    video.addEventListener("mouseout", () => {
      clearTimeout(lastTimeOut);
      lastTimeOut = setTimeout(() => {
        controls.style.display = "none";
        backdrop.style.animation =
          "backdropAnimationReverse .3s ease-in forwards";
      }, 1500);
    });
    video.addEventListener("click", () => {
      if (video.classList.contains("playing")) {
        video.pause();
        video.classList.remove("playing");
        video.classList.add("paused");
      } else {
        video.play();
        video.classList.remove("paused");
        video.classList.add("playing");
      }
    });
    settings.addEventListener("click", () => {
      video.playbackRate = 2;
    });
    controls.addEventListener("mouseenter", () => {
      clearTimeout(lastTimeOut);
    });
    controls.addEventListener("mouseout", () => {
      lastTimeOut = setTimeout(() => {
        controls.style.display = "none";
        backdrop.style.animation =
          "backdropAnimationReverse .3s ease-in forwards";
      }, 1500);
    });
    fullscreenBtn.addEventListener("click", () => {
      video.requestFullscreen();
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
            box-sizing: border-box;
        }

        #video {
            width:100%;
        }

        #videoBackdrop {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: calc(100% - 7px);
            background-color: rgba(0,0,0,0.35);
            box-sizing: border-box;
        }

        .controls {
            position: absolute;
            display: flex;
            align-items: center;
            width: 100%;
            height: 3rem;
            background-color: rgba(21,21,21,1);
            box-sizing: border-box;
            bottom: 0.5rem;
            animation: showControls 0.5s ease-in-out alternate;
            overflow: hidden;
            padding: 0rem 1rem;
        }

        button {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
        }

        .iconBtn {
            width: 20px
        }

        #videoTimeline {
            width: 100%;
            height: 5px;
            background-color: #fafafa
        }

        #videoTimelineCompleted {
            width: 30%;
            height: 5px;
            background-color: red 
        }

        #fullscreen {
            position: absolute;
            top: 1rem;
            right: 1rem
        }

        @keyframes showControls {
            from {
                height: 0rem
            }
            to {
                height: 3rem;
            }
        }

        @keyframes backdropAnimation {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes backdropAnimationReverse {
            from {
                opacity:1;
            }
            to {
                opacity: 0;
            }
        }
    </style>
    <div class="container" id="container">
        <div id="videoBackdrop"></div>
        <video src="./vid.mp4" type="video/mp4" id="video"></video>
        <button id="fullscreen">
            <img src="https://www.iconsdb.com/icons/preview/white/fit-to-width-xxl.png" class="iconBtn"/>
        </button>
        <div class="controls" id="controls">
            <button id="play">
                <img src="https://www.iconsdb.com/icons/preview/white/video-play-3-xxl.png" class="iconBtn"/>
            </button>
            <button id="settings">
                <img src="https://www.iconsdb.com/icons/preview/white/gear-xxl.png" class="iconBtn"/>
            </button>
        </div>
    </div>
    `;
  }
}

export default Video;
