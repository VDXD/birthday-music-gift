/*
  Eight-page birthday gift:
  Page 1 is ONLY your opening message.
  Pages 2–8 are the seven song pages.
  Edit the message and song details below.
*/
const openingMessage = `Hii Muffin, This is your first birthday gift....

This is What connect us. What connected us everytime we argue we figure out we again fell in love.Lemme me guide you love. So you can see the small next button on right corner, 
click that...`;

const songs = [
  {
    title: "Baby Baby", artist: "Sports", poster: "assets/covers/baby_baby.jpg", audio: "assets/songs/baby_baby.mp3",
    accent: "#04bce0", accentDark: "#062f35", bg: "#031130", textColor: "#2ba7ba",
    message: "This was the first song I made an edit for you and this is very special for me as you know. and as song said I never wanna see you cry."
  },
  {
    title: "What once was", artist: "Her's", poster: "assets/covers/what_once_was.jpg", audio: "assets/songs/what_once_was.mp3",
    accent: "#ff92cc", accentDark: "#bf2b54", bg: "#c32483", textColor: "#ffbaf6",
    message: "Remember we had something to talk and you used to work in that south tokoganj office, I came we talked then TI mall ke niche beth kar we were listening to this song and You will never know how beautiful you were looking at that moment"
  },
  {
    title: "Amor de Siempre", artist: "CUCO", poster: "assets/covers/amor.jpg", audio: "assets/songs/Amor_de_Siempre.mp3",
    accent: "#f7b8ff", accentDark: "#1d07d0", bg: "#a61711", textColor: "#f7b8ff",
    message: "I was in my room and we again had some thing going on you were not talking to me and I just randonmly found this song and it says When I see those eyes There is where I want to live If those lips kiss me There I want to die My own love song right now When you say to me I love you I want to see that smile In my bed until sunrise. I wanna start my day with you and end in your arms."
  },
  {
    title: "Heaven Sent", artist: "Tevomxntana", poster: "assets/covers/Heaven_sent.png", audio: "assets/songs/Heaven_Sent.mp3",
    accent: "#83b5f8", accentDark: "#978485", bg: "#575e80", textColor: "#c3edfa",
    message: "The song and you like wow you are my heaven sent like you are such a goddess and you are so beautiful like trust me you are fucking awsome"
  },
  {
    title: "MIA", artist: "BAD BUNNY x DRAKE", poster: "assets/covers/mia.png", audio: "assets/songs/mia.mp3",
    accent: "#f50292", accentDark: "#a8401f", bg: "#202020", textColor: "#ffffff",
    message: "Mia was is a really old song actually one of first song i actually liked after honey singh but i never search it meaning but one day again out of no where this song came in my liked list and i searched it meaning and it says Baby, I'm a fan of your walk (Wouh!) I give you everything of mine, even my breathing Yeh) You are everything muffin you will never know how much i love you"
  },
  {
    title: "Shiddat Title Track", artist: "Sunny Kaushal,Radhika Madan, Mohit Raina, Diana P", poster: "assets/covers/Shiddat_Title_Track.jpg", audio: "assets/songs/Shiddat_Title_Track.mp3",
    accent: "#bf3a1a", accentDark: "#fe185c", bg: "#280808", textColor: "#ffffff",
    message: "Ohhh this song i never listened to this song until you said ki sath me sunte hai you don't know how much i loved when you said this and the song lyrics hit so hard babe like wow and i was so happy i listened it with you (R.I.P my one earphone)"
  },
  {
    title: "Pyar Ki Si", artist: "Nanku, Lambo Drive", poster: "assets/covers/Pyar_Ki_Si.jpg", audio: "assets/songs/Pyar_Ki_Si.mp3",
    accent: "rgb(249, 243, 161)", accentDark: "#bd916f", bg: "#395171", textColor: "#c0c0c0",
    message: "Well well well we both know this song right as jab ye sunte hai ahem yes that and it's awsome you are so good i never felt unsatisfyied with you, you try your best to make me happy always and i know that how much you try muffin sab dikhta hai"
  },
  {
    title: "Muffin", artist: "Uncle Aunty (Best artist)", poster: "assets/covers/muffin.jpeg", audio: "assets/songs/Ik_Kudi.mp3",
    accent: "#fbb3bb", accentDark: "#d46c2c", bg: "#9b3160", textColor: "#c0c0c0",
    message: "You are my song. Your Voice is sukoon to my heart. You face is my music poster i want to look forever. Your touch feels like a song i always wanted to play the song i crave for. You are my song."
  },
  {
    title: "Us", artist: "Muffin and Muffin ka pagal ved", poster: "assets/covers/us.jpeg", audio: "assets/songs/Mera Mann Kehne Laga.mp3",
    accent: "rgb(249, 243, 161)", accentDark: "#bd916f", bg: "#395171", textColor: "#c0c0c0",
    message: "I don't know that i get a chance this to show you like if you are sitting side of me look at me please...."
  }
];

const $ = (s) => document.querySelector(s);
const audio = $("#audio");
audio.volume = 0.5;
let pageIndex = 0; // 0 = opening message, 1–7 = songs

function currentSong() { return songs[pageIndex - 1]; }
function timeText(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
}
function applyTheme(song) {
  const root = document.documentElement;
  root.style.setProperty("--accent", song.accent);
  root.style.setProperty("--accent-rgb", rgb(song.accent));
  root.style.setProperty("--accent-dark", song.accentDark);
  root.style.setProperty("--page-bg", song.bg);
  root.style.setProperty("--ink", song.textColor || "#ffffff");
  document.querySelector('meta[name="theme-color"]').content = song.bg;
}
function rgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}
function renderMessage(text, container) {
  container.replaceChildren();
  text.split(/\n\s*\n/).forEach(block => {
    const p = document.createElement("p");
    p.textContent = block;
    container.appendChild(p);
  });
}
function renderPage(index) {
  pageIndex = Math.max(0, Math.min(songs.length, index));
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  $("#playButton").textContent = "▶";
  $("#seekBar").value = 0;
  $("#time").textContent = "0:00";

  const isOpening = pageIndex === 0;
  document.body.classList.toggle("opening-only", isOpening);
  $("#messagePage").hidden = !isOpening;
  $("#songPage").hidden = isOpening;

  if (isOpening) {
    document.documentElement.style.setProperty("--page-bg", "#f1cdd7");
    document.documentElement.style.setProperty("--accent", "#b77b83");
    document.documentElement.style.setProperty("--accent-dark", "#734b56");
    document.documentElement.style.setProperty("--accent-rgb", "183, 123, 131");
    renderMessage(openingMessage, $("#openingMessage"));
  } else {
    const song = currentSong();
    applyTheme(song);
    $("#posterIndex").textContent = `SIDE A · ${String(pageIndex).padStart(2, "0")}`;
    // renderMessage(song.message, $("#letterContent"));
    $("#songTitle").textContent = song.title;
    $("#songArtist").textContent = song.artist;
    renderMessage(song.message, $("#songMessage"));
    $("#posterPlaceholderTitle").textContent = song.title;
    const poster = $("#poster");
    const placeholder = $("#posterPlaceholder");
    poster.style.display = "block";
    placeholder.style.display = "none";
    poster.onerror = () => { poster.style.display = "none"; placeholder.style.display = "flex"; };
    poster.onload = () => { poster.style.display = "block"; placeholder.style.display = "none"; };
    poster.src = song.poster;
    audio.src = song.audio;
    audio.load();
  }

  $("#previous").disabled = pageIndex === 0;
  $("#next").disabled = pageIndex === songs.length;
  $("#pageCount").textContent = `${String(pageIndex + 1).padStart(2, "0")} / 08`;
}
$("#previous").addEventListener("click", () => renderPage(pageIndex - 1));
$("#next").addEventListener("click", () => renderPage(pageIndex + 1));
$("#playButton").addEventListener("click", async () => {
  if (audio.paused) {
    try { await audio.play(); $("#playButton").textContent = "Ⅱ"; }
    catch { $("#playButton").textContent = "▶"; }
  } else {
    audio.pause(); $("#playButton").textContent = "▶";
  }
});
audio.addEventListener("timeupdate", () => {
  $("#time").textContent = timeText(audio.currentTime);
  if (Number.isFinite(audio.duration) && audio.duration > 0) $("#seekBar").value = audio.currentTime / audio.duration * 100;
});
audio.addEventListener("loadedmetadata", () => $("#time").textContent = timeText(audio.duration));
audio.addEventListener("ended", () => $("#playButton").textContent = "▶");
audio.addEventListener("error", () => { if (audio.src) $("#playButton").title = "Add the MP3 file to assets/songs"; });
$("#seekBar").addEventListener("input", e => {
  if (Number.isFinite(audio.duration) && audio.duration > 0) audio.currentTime = Number(e.target.value) / 100 * audio.duration;
});
document.addEventListener("keydown", e => {
  if (e.target.matches("input, textarea")) return;
  if (e.key === "ArrowLeft") renderPage(pageIndex - 1);
  if (e.key === "ArrowRight") renderPage(pageIndex + 1);
});
renderPage(0);
