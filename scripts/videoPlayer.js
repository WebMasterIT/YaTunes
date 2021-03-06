export const videoPlayerInit = () => {
  console.log("videoPlayer");
};

const videoPlayer = document.querySelector(".video-player");
const videoButtonPlay = document.querySelector(".video-button__play");
const videoButtonStop = document.querySelector(".video-button__stop");
const videoProgress = document.querySelector(".video-progress");
const videoTimePassed = document.querySelector(".video-time__passed");
const videoTimeTotal = document.querySelector(".video-time__total");
const videoVolume = document.querySelector(".video-volume");
const videoFullscreen = document.querySelector(".video-fullscreen");
const volumeLess = document.querySelector(".fa-volume-down");
const volumeMore = document.querySelector(".fa-volume-up");


videoPlayer.volume = 0.3;

const lessVolume = () => {
  if (videoPlayer.volume >= 0.1) {
    videoPlayer.volume -= 0.1;
    videoVolume.value -= 0.1;
  }
};

const moreVolume = () => {
  if (videoPlayer.volume <= 1) {
    videoPlayer.volume += 0.1;
    videoVolume.value += 0.1;
  }
};

const toggleIcon = () => {
  if (videoPlayer.paused) {
    videoButtonPlay.classList.remove("fa-pause");
    videoButtonPlay.classList.add("fa-play");
  } else {
    videoButtonPlay.classList.add("fa-pause");
    videoButtonPlay.classList.remove("fa-play");
  }
};

const togglePlay = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }

  toggleIcon();
};

const stopPlay = () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
};

const addZero = (n) => (n < 10 ? "0" + n : n);

videoPlayer.addEventListener("click", togglePlay);
videoButtonPlay.addEventListener("click", togglePlay);

videoPlayer.addEventListener("play", toggleIcon);
videoPlayer.addEventListener("pause", toggleIcon);

videoButtonStop.addEventListener("click", stopPlay);

videoPlayer.addEventListener("timeupdate", () => {
  const currentTime = videoPlayer.currentTime;
  const duration = videoPlayer.duration;

  videoProgress.value = (currentTime / duration) * 100;

  let minutePassed = Math.floor(currentTime / 60);
  let secondsPassed = Math.floor(currentTime % 60);

  let minuteTotal = Math.floor(duration / 60);
  let secondsTotal = Math.floor(duration % 60);

  videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(
    secondsPassed
  )}`;
  videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(
    secondsTotal
  )}`;
});

videoProgress.addEventListener("input", () => {
  const duration = videoPlayer.duration;
  const value = videoProgress.value;

  videoPlayer.currentTime = (value * duration) / 100;
});

videoFullscreen.addEventListener("click", () => {
  videoPlayer.webkitEnterFullScreen(); //для других браузеров возможно лучше requestFullScreen
});

videoVolume.addEventListener("input", () => {
  videoPlayer.volume = videoVolume.value / 100;
});


videoVolume.value = videoPlayer.volume * 100;

volumeLess.addEventListener("click", () => {
  lessVolume();
});

volumeMore.addEventListener("click", () => {
  moreVolume();
});

videoPlayerInit.stop = () => {
  if (!videoPlayerInit.paused) {
    stopPlay();
  }
};
