import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
const wavesurfer1 = WaveSurfer.create({
  container: "#waveform1",
  waveColor: "red",
  progressColor: "#0e2f4f",
  url: "./audio2.mp3",
  barWidth: 5,
  barGap: 1,
  barRadius: 2,
  height: 400,
  cursorWidth: 0,
});
const wavesurfer2 = WaveSurfer.create({
  container: "#waveform2",
  waveColor: "black",
  progressColor: "#0e2f4f",
  url: "./audio1.mp3",
  barWidth: 5,
  barGap: 1,
  barRadius: 2,
  height: 300,
  cursorWidth: 0,
});
let audioToPlay = true;
document.querySelector("input").addEventListener("change", () => {
  audioToPlay = !audioToPlay;
  Switcher();
});
wavesurfer2.on("click", () => {
  wavesurfer1.setTime(wavesurfer2.getCurrentTime());
});
function Switcher() {
  if (audioToPlay) {
    wavesurfer2.setMuted(true);
    wavesurfer2.setTime(wavesurfer1.getCurrentTime());
    wavesurfer1.setMuted(false);
    wavesurfer2.setOptions({ waveColor: "black" });
    wavesurfer1.setOptions({ waveColor: "red" });
  } else {
    wavesurfer1.setMuted(true);
    wavesurfer1.setTime(wavesurfer2.getCurrentTime());
    wavesurfer2.setMuted(false);
    wavesurfer1.setOptions({ waveColor: "black" });
    wavesurfer2.setOptions({ waveColor: "red" });
  }
}
function PlayAudio() {
  audioToPlay ? wavesurfer2.setMuted(true) : wavesurfer1.setMuted(true);
  wavesurfer2.playPause();
  wavesurfer1.playPause();
  if (wavesurfer2.isPlaying()) {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
    </svg>`;
  } else {
    this.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="bi bi-play-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"
      />
    </svg>`;
  }
}
document
  .getElementById("PlayButton")
  .addEventListener("click", PlayAudio);