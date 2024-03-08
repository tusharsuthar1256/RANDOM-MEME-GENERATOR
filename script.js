const animeinp = document.querySelector("#input");
const img = document.querySelector(".img");
const btn = document.querySelector("button");

btn.addEventListener("click",() => {
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((memeurl) => {
        img.innerHTML = `<img src=${memeurl.url} class="img">`
      });
});
