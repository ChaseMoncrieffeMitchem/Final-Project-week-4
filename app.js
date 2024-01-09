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
    const users = await fetch("https://www.omdbapi.com/?apikey=f5bbb04b&s=fast")
    const usersData = await users.json();
    const userListEl = document.querySelector('.user-list');
    userListEl.innerHTML = usersData.map(user => 
        `<div class="user-card">
        <div class="user-card__container">
            <h3>User's Name</h4>
            <p><b>Email:</b> email@email.com</p>
            <p><b>Phone:</b> 0000000000</p>
            <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
        </div>
        </div>`
    ).join("")
    console.log(usersData)
}

main();