function checkLogin() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === "sareena" && pass === "saara") {
    window.location.href = "home.html";
  } else {
    alert("Wrong username or password!");
  }
}

// Typing Effect with fade out and then show video
let i = 0;
let text = `Hi saara, I made this website just for you ❤️
Happy birthday, my queen.
Unna pola oru azhagana life partner
kidaikkardhu luck tha  yenaku.
nee kedaichathu yenaku romba happie ah iruku
papa✨

Happy Birthday to the one who makes my world
complete 🌍❤️.
You complete me in ways words can’t explain
😘 
My love, my life, my everything.

Na yela situation laiyum na unkuda irupen
papa🫶🏻
unaku support ah🫂 una Nala pathupen ah
theriyala,
but yenala mudincha alavuku una na pathupen
papa💕
 
I love u di saara😘

Aporom oru chinna memories clip - namba love
pani 10 months aguthu.
Inu 2months la namaku love aniversary💝
advance love aniversary ammu💖

Aporom antha clip yetho try panne Nala
irukuthanu theriyala... adjust panikoo😅

enjoy your day papa.

Forever yours, with every heartbeat🥰`;
let speed = 50;

function typeWriter() {
  const typingDiv = 
document.getElementById("typing");
  if(!typingDiv) return;

  if (i < text.length) {
    typingDiv.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      typingDiv.style.transition = "opacity 2s";
      typingDiv.style.opacity = 0;

      setTimeout(() => {
        const videoContainer =
document.getElementById("video-container");
        const video =
document.getElementById("love-video");

        if ( videoContainer && video) {
           videoContainer.style.display = "block";

           video.play();
        }
      }, 2000);
    }, 1000);
  }
}

window.onload = typeWriter;