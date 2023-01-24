const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clear-films");



// UI prototype obje üretme
const ui = new UI();

// Storage prototype obje üretme
const storage = new Storage();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", deleteAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        //Eğer ki içeriklerin herhangi biri boşsa
        //hata mesajı dönecek
        ui.displayMessages("Lütfen Tüm Alanları Doldurunuz", "danger");


    } else {
        // film constructor'ından newFilm adında bir object
        //oluşturdum
        const newFilm = new film(title, director, url);
        storage.addFilmToStorage(newFilm);
        //Objecti UI'a eklemek
        ui.addFilmToUI(newFilm);
        ui.displayMessages("Film Başarıyla Eklendi", "success");
    }

    ui.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme işlemi Başarılı", "success");
    }
}

function deleteAllFilms() {
    ui.deleteAllFilmsFromUI();
    storage.deleteAllFilmsFromStorage();
}