"use strict";
const musicTitleEl = document.getElementById("music_title");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "music/01-LaBonita.mp3",
    displayName: "La isla bonita",
  },
  {
    path: "music/02-KnowingMeKnowingYou.mp3",
    displayName: "Knowing me, knowing you",
  },
  {
    path: "music/03-Rasputin.mp3",
    displayName: "Rasputin",
  },
  {
    path: "music/04-MoneyMoney.mp3",
    displayName: "Money, money, money",
  },
  {
    path: "music/05-SOSAbba.mp3",
    displayName: "S.O.S.",
  },
  {
    path: "music/06-Soli1979.mp3",
    displayName: "Soli",
  },
  {
    path: "music/07-Serdmalvini.mp3",
    displayName: "Сердце Мальвины",
  },
  {
    path: "music/08-Potapnepara.mp3",
    displayName: "Не пара",
  },
  {
    path: "music/09-Poyderevna.mp3",
    displayName: "Пой, деревня",
  },
  {
    path: "music/10-Reggivnochi.mp3",
    displayName: "Регги в ночи",
  },
  {
    path: "music/11-Luchsolnca.mp3",
    displayName: "Луч Солнца золотого",
  },
  {
    path: "music/12-Nebiloteba.mp3",
    displayName: "Если б не было тебя",
  },
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
}
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
document.addEventListener("DOMContentLoaded", btnEvents);
loadMusic(songs[musicIndex]);

