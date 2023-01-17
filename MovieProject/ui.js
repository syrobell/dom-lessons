function UI() {

}
UI.prototype.addFilmToUI = function(newFilm) {
    /* <!-- <tr>
                                             <td><img src="" class="img-fluid img-thumbnail"></td>
                                             <td></td>
                                             <td></td>
                                             <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                           </tr> -->
                                           <!-- <tr>
                                             <td><img src="" class="img-fluid img-thumbnail"></td>
                                             <td></td>
                                             <td></td>
                                             <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                           </tr> -->
                                           */
    const filmList = document.getElementById("films");

    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    s
    
    
    
    `;
}