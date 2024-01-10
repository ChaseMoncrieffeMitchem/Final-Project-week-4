// API 1: https://api.imgflip.com/get_memes

// async function main() {
//     const memes = await fetch("http://www.omdbapi.com/?apikey=f5bbb04b&s=fast")
//     const memesData = await memes.json();
//     const memeListEl = document.querySelector('.movie-list')
//     memeListEl.innerHTML = memesData.map((movie) => `<div class="movie-card">
//     <div class="movie-card__container">
//         <h3 class="movie-poster"></h3>
//         <p class="movie-title">Movie Title</p>
//         <p class="movie-type">Movie Type</p>
//         <p class="movie-year">Movie Year</p>
//     </div>
// </div>`).join("")
// }

// main();

async function main() {
    const users = await fetch("http://www.omdbapi.com/?apikey=f5bbb04b&s=fast")
    const usersData = await users.json();
    // const userListEl = document.querySelector('.movie-list');
    // userListEl.innerHTML = 
    usersData.Search.map((movie) => 
        `<div class="movie">
        <div class="movie-card">
            <div class="movie-card__container">
                <h3 class="movie-poster"></h3>
                <p class="movie-title">Movie Title</p>
                <p class="movie-type">Movie Type</p>
                <p class="movie-year">Movie Year</p>
            </div>
        </div>
    </div>`
    ).join("")
    console.log(usersData.Search)
}

main();