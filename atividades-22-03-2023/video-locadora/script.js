let movieName = document.getElementById("movieName")
const durationMin = document.getElementById("duration")
let showMovies = document.getElementById("table")

function conver(){
    let hours = 0
    let min = durationMin.value

    while(min >= 60){
        min -= 60
        hours++
    }

    showMovies.innerHTML += `<tr>
    <td>${movieName.value}.</td>
    <td>${hours} horas e ${min} minutos.</td>
</tr>`
    movieName.value = ""
    durationMin.value = ""
}