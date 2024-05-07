const init = () => {
  const formD = document.querySelector("form");
  formD.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#searchByID");
    console.log(input);
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((resp) => resp.json())
      .then((data) => {
        const title = document.querySelector("#movieDetails h4");
        const summary = document.querySelector("movieDetails p");
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
