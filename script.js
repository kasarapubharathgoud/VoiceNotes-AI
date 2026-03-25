function generateLecture() {
  const input = document.getElementById("inputText").value;
  const lang = document.getElementById("language").value;
  const speed = document.getElementById("speed").value;

  const loader = document.getElementById("loader");
  loader.style.display = "block";

  setTimeout(() => {
    const text = "Let me explain. " + input;
    typeEffect(text);

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    speech.rate = speed;

    window.speechSynthesis.speak(speech);

    loader.style.display = "none";
  }, 1000); // simulate processing
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").innerText = "";
}

function stopVoice() {
  window.speechSynthesis.cancel();
}

function startListening() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = function(event) {
    document.getElementById("inputText").value =
      event.results[0][0].transcript;
  };

  recognition.start();
}
function openMurf() {
  alert("Copy the generated text and paste it into Murf AI for high-quality voice.");
  window.open("https://murf.ai", "_blank");
}
function typeEffect(text) {
  let i = 0;
  const speed = 20;
  const output = document.getElementById("outputText");
  output.innerText = "";

  function typing() {
    if (i < text.length) {
      output.innerText += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}