// API 1: http://www.omdbapi.com/?apikey=f5bbb04b&s=fast

const userListEl = document.querySelector('.movie-list');

async function main() {
    const users = await fetch(`http://www.omdbapi.com/?apikey=f5bbb04b&s=fast`)
    const usersData = await users.json();
    userListEl.innerHTML = usersData.Search.map((movie) => movieHTML(movie)).join("")
}

main();

function showMoviePosts(movie) {
    console.log(movie)
}

function movieHTML(movie) {
    return `
    <div class="movie-card" onclick="showMoviePosts(${movie.Title})">
        <div class="movie-card__container">
            <h3 class="movie-poster">
            <img src="${movie.Poster}" alt="" target="_blank"></h3>
            <p class="movie-title">${movie.Title}</p>
            <p class="movie-year">${movie.Year}</p>
        </div>
    </div>`
}

// async function onSearchChange(Title) {
//     const movie = event.target.value
//     const users = await fetch(`http://www.omdbapi.com/?apikey=f5bbb04b&s=${Title}`)
//     const usersData = await users.json();
//     userListEl.innerHTML = usersData.map(movie => `
//     <div class="movie-card" onclick="showMoviePosts(${movie.Title})">
//         <div class="movie-card__container">
//             <h3 class="movie-poster">
//             <img src="${movie.Poster}" alt="" target="_blank"></h3>
//             <p class="movie-title">${movie.Title}</p>
//             <p class="movie-year">${movie.Year}</p>
//         </div>
//     </div>
// </div>`)
// }