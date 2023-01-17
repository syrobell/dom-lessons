const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

const ui = new UI();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        //Eğer ki içeriklerin herhangi biri boşsa
        //hata mesajı dönecek


    } else {
        // film constructor'ından newFilm adında bir object
        //oluşturdum
        const newFilm = new film(title, director, url);

        //Objecti UI'a eklemek
        ui.addFilmToUI(newFilm);
    }



    e.preventDefault();
}