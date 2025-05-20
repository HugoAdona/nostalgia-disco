document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu setup (runs on all pages)
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("fa-bars");
      hamburger.classList.toggle("fa-times");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.add("fa-bars");
        hamburger.classList.remove("fa-times");
      });
    });
  }

  // Music player setup (only runs if elements exist, i.e., on index.html)
  const mysound = document.createElement("audio");
  mysound.id = "mysound";
  const audioSource = document.createElement("source");
  audioSource.id = "audio-source";
  audioSource.type = "audio/mp3";
  mysound.appendChild(audioSource);
  document.body.appendChild(mysound);

  const icon = document.getElementById("icon");
  const progressBar = document.querySelector(".progress");
  const repeatButton = document.getElementById("repeat-button");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const albumSelector = document.getElementById("album-selector");
  const songList = document.getElementById("song-list");
  const trackName = document.getElementById("track-name");
  const artistName = document.getElementById("artist-name");

  // Only initialize music player if required elements exist
  if (
    icon &&
    progressBar &&
    repeatButton &&
    prevButton &&
    nextButton &&
    albumSelector &&
    songList &&
    trackName &&
    artistName
  ) {
    // Album data with 6 songs per album, using local file paths
    const albums = [
      {
        name: "Neon Groove Nights",
        songs: [
          {
            name: "Don't Stop 'Til You Get Enough",
            artist: "Michael Jackson",
            src: "assets/music/Neon_Groove_Nights/NGN_Song1.mp3",
          },
          {
            name: "Physical",
            artist: "Olivia Newton-John",
            src: "assets/music/Neon_Groove_Nights/NGN_Song2.mp3",
          },
          {
            name: "Let's Hear It for the Boy",
            artist: "Deniece Williams",
            src: "assets/music/Neon_Groove_Nights/NGN_Song3.mp3",
          },
          {
            name: "Walking on Sunshine",
            artist: "Katrina and the Waves",
            src: "assets/music/Neon_Groove_Nights/NGN_Song4.mp3",
          },
          {
            name: "Holiday",
            artist: "Madonna",
            src: "assets/music/Neon_Groove_Nights/NGN_Song5.mp3",
          },
          {
            name: "Love Shack",
            artist: "The B-52's",
            src: "assets/music/Neon_Groove_Nights/NGN_Song6.mp3",
          },
        ],
      },
      {
        name: "Electric Boogie Fever",
        songs: [
          {
            name: "You Spin Me Round (Like a Record)",
            artist: "Dead or Alive",
            src: "assets/music/Electric_Boogie_Fever/EBF_Song1.mp3",
          },
          {
            name: "Give Me the Night",
            artist: "George Benson",
            src: "assets/music/Electric_Boogie_Fever/EBF_Song2.mp3",
          },
          {
            name: "Boogie Oogie Oogie",
            artist: "A Taste of Honey",
            src: "assets/music/Electric_Boogie_Fever/EBF_Song3.mp3",
          },
          {
            name: "Dance Wit Me",
            artist: "Chaka Khan",
            src: "assets/music/Electric_Boogie_Fever/EBF_Song4.mp3",
          },
          {
            name: "Forget Me Nots",
            artist: "Patrice Rushen",
            src: "assets/music/Electric_Boogie_Fever/EBF_Song5.mp3",
          },
          {
            name: "Ain't Nobody",
            artist: "Chaka Khan",
            src: "assets/music/Electric_Boogie_Fever/EBF_Song6.mp3",
          },
        ],
      },
      {
        name: "Starlight Pulse",
        songs: [
          {
            name: "Bizarre Love Triangle",
            artist: "New Order",
            src: "assets/music/Starlight_Pulse/SP_Song1.mp3",
          },
          {
            name: "Part-Time Lover",
            artist: "Stevie Wonder",
            src: "assets/music/Starlight_Pulse/SP_Song2.mp3",
          },
          {
            name: "Living in a Box",
            artist: "Living in a Box",
            src: "assets/music/Starlight_Pulse/SP_Song3.mp3",
          },
          {
            name: "Don't Leave Me This Way",
            artist: "Thelma Houston",
            src: "assets/music/Starlight_Pulse/SP_Song4.mp3",
          },
          {
            name: "Like a Virgin",
            artist: "Madonna",
            src: "assets/music/Starlight_Pulse/SP_Song5.mp3",
          },
          {
            name: "Stomp!",
            artist: "The Brothers Johnson",
            src: "assets/music/Starlight_Pulse/SP_Song6.mp3",
          },
        ],
      },
    ];

    let currentAlbumIndex = 0;
    let currentSongIndex = -1;
    let repeatState = 0; // 0 = no repeat, 1 = repeat one, 2 = repeat album

    // Initialize the player
    function initPlayer() {
      updateSongList();
      albumSelector.value = currentAlbumIndex;
    }

    // Update song list UI
    function updateSongList() {
      songList.innerHTML = "";
      albums[currentAlbumIndex].songs.forEach((song, index) => {
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");
        songItem.textContent = song.name;
        if (index === currentSongIndex) {
          songItem.classList.add("active");
        }
        songItem.addEventListener("click", () => {
          currentSongIndex = index;
          loadSong();
        });
        songList.appendChild(songItem);
      });
    }

    // Load and play a song
    function loadSong() {
      if (currentSongIndex >= 0) {
        const song = albums[currentAlbumIndex].songs[currentSongIndex];
        console.log(`Attempting to load song: ${song.name} by ${song.artist}`);
        audioSource.src = song.src;
        trackName.textContent = song.name;
        artistName.textContent = song.artist;
        mysound.load();
        mysound.play().catch((error) => {
          console.error(`Error playing audio: ${error.message}`);
          console.error(`Song path: ${song.src}`);
          alert(`Failed to play "${song.name}" by ${song.artist}.`);
        });
        icon.src = "assets/svg/pause.svg";
        updateSongList();
      } else {
        trackName.textContent = "Select a song";
        artistName.textContent = "";
        audioSource.src = "";
        mysound.load();
        console.log("No song selected, resetting audio source.");
        icon.src = "assets/svg/play.svg";
      }
    }

    // Play/pause toggle
    icon.onclick = function () {
      if (mysound.paused && currentSongIndex >= 0) {
        console.log(
          `Playing song: ${albums[currentAlbumIndex].songs[currentSongIndex].name}`
        );
        mysound.play().catch((error) => {
          console.error(`Error playing audio: ${error.message}`);
          alert(`Failed to play the song.`);
        });
        icon.src = "assets/svg/pause.svg";
      } else {
        console.log("Pausing audio.");
        mysound.pause();
        icon.src = "assets/svg/play.svg";
      }
    };

    // Previous song
    prevButton.onclick = function () {
      if (currentSongIndex > 0) {
        currentSongIndex--;
      } else if (repeatState === 2) {
        currentSongIndex = albums[currentAlbumIndex].songs.length - 1;
      }
      loadSong();
    };

    // Next song
    nextButton.onclick = function () {
      if (currentSongIndex < albums[currentAlbumIndex].songs.length - 1) {
        currentSongIndex++;
      } else if (repeatState === 2) {
        currentSongIndex = 0;
      } else {
        currentSongIndex = -1;
      }
      loadSong();
    };

    // Repeat button functionality
    repeatButton.onclick = function () {
      repeatState = (repeatState + 1) % 3;
      updateRepeatButtonIcon();
    };

    // Update repeat button appearance
    function updateRepeatButtonIcon() {
      switch (repeatState) {
        case 0: // No repeat
          repeatButton.src = "assets/svg/repeat.svg";
          repeatButton.alt = "No repeat icon";
          repeatButton.classList.remove("active", "repeat-one");
          break;
        case 1: // Repeat one
          repeatButton.src = "assets/svg/repeat.svg";
          repeatButton.alt = "Repeat one icon";
          repeatButton.classList.add("active", "repeat-one");
          break;
        case 2: // Repeat album
          repeatButton.src = "assets/svg/repeat.svg";
          repeatButton.alt = "Repeat album icon";
          repeatButton.classList.add("active");
          repeatButton.classList.remove("repeat-one");
          break;
      }
    }

    // Album selection
    albumSelector.onchange = function () {
      currentAlbumIndex = parseInt(this.value);
      currentSongIndex = -1;
      updateSongList();
      loadSong();
    };

    // Progress bar update
    mysound.addEventListener("timeupdate", function () {
      if (mysound.duration) {
        const progress = (mysound.currentTime / mysound.duration) * 100;
        progressBar.style.width = progress + "%";
      }
    });

    // Song ended
    mysound.addEventListener("ended", function () {
      console.log(
        `Song ended: ${currentSongIndex + 1}/${
          albums[currentAlbumIndex].songs.length
        } in album ${albums[currentAlbumIndex].name}`
      );
      if (repeatState === 1) {
        // Repeat one
        console.log("Repeating current song.");
        mysound.currentTime = 0;
        mysound.play();
      } else if (repeatState === 2) {
        // Repeat current album
        console.log("Repeating current album.");
        if (currentSongIndex < albums[currentAlbumIndex].songs.length - 1) {
          currentSongIndex++;
        } else {
          currentSongIndex = 0;
        }
        loadSong();
      } else {
        // No repeat: play next song or next album
        if (currentSongIndex < albums[currentAlbumIndex].songs.length - 1) {
          // Play next song in current album
          console.log("Playing next song in current album.");
          currentSongIndex++;
          loadSong();
        } else if (currentAlbumIndex < albums.length - 1) {
          // Move to first song of next album
          console.log(
            `Moving to next album: ${albums[currentAlbumIndex + 1].name}`
          );
          currentAlbumIndex++;
          currentSongIndex = 0;
          albumSelector.value = currentAlbumIndex;
          updateSongList();
          loadSong();
        } else {
          // Last song of last album: stop playback
          console.log("End of last album, stopping playback.");
          currentSongIndex = -1;
          progressBar.style.width = "0%";
          icon.src = "assets/svg/play.svg";
          updateSongList();
        }
      }
    });

    // Seek functionality
    document
      .querySelector(".progress-bar")
      .addEventListener("click", function (e) {
        const progressBarWidth = this.clientWidth;
        const clickPosition = e.offsetX;
        const seekTime = (clickPosition / progressBarWidth) * mysound.duration;
        mysound.currentTime = seekTime;
      });

    // Initialize animations
    window.addEventListener("load", function () {
      const elements = document.querySelectorAll(
        ".left-col h1, .left-col .tagline, .music-player"
      );
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, index * 200);
      });
    });

    // Initialize player
    initPlayer();
    updateRepeatButtonIcon();
  }
});
