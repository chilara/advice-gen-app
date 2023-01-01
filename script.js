let text = document.getElementById("text");
let advise = document.getElementById("advice");
let gen = document.getElementById("gen");
let baseUrl = "https://api.adviceslip.com/advice";

const generateAdvance = async () => {
  try {
    const response = await fetch(baseUrl);
    let data = await response.json();

    console.log(data);
    text.innerHTML = `${data.slip.advice}`;
    advise.innerHTML = `#${data.slip.id}`;
  } catch (error) {
    console.log(error);
  }
};
