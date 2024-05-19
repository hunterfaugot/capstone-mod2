
// Remove or comment out the event listener:
// randomizerButton.addEventListener('click', () => { /* ... */ });


document.addEventListener('DOMContentLoaded', () => {
  // ... your fetch and displayMovie code here ...
  const randomizerButton = document.getElementById('randomizer-btn');

  randomizerButton.addEventListener('click', () => {

    
// Move the fetch call outside of the event listener, so it runs immediately:
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.themoviedb.org/3/list/8300593-hunter-s-b-movies-1?api_key=cfa5bfcc1ef2a7ad945c5475e5c0ef3f')}`)
.then(response => response.json())
.then(data => {
  const movies = JSON.parse(data.contents).items;
    console.log(movies) // Added to log the parsed data

    if (movies && movies.length > 0) {
        shuffleArray(movies);
        const randomMovie = getRandomMovie(movies);
        displayMovie(randomMovie);
    } else {
        console.error('No movies found or data format incorrect.');
        // Display an appropriate error message to the user
    }
})
.catch(error => {
    console.error('Error fetching data:', error);
    // Display an error message to the user
});
});
});
function getRandomMovie(movies) {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
function displayMovie(movie) {
  const movieTitle = document.getElementById("movieTitle");
  const moviePoster = document.getElementById("moviePoster");
  const movieOverview = document.getElementById("movieOverview");

  console.log("movieTitle element:", movieTitle); // Check if it's null
  console.log("moviePoster element:", moviePoster); // Check if it's null
  console.log("movieOverview element:", movieOverview); // Check if it's null

  if (movieTitle && moviePoster && movieOverview) {
      movieTitle.textContent = movie.title;
      moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movieOverview.textContent = movie.overview;
  } else {
      console.error("Error: Some HTML elements not found.");
  }
  moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    moviePoster.style.display = 'block'; // Show the poster
}
// const randomizerButton = document.getElementById('randomizer-btn');
// //const API_KEY = 'YOUR_API_KEY';
// //const LIST_ID = 'YOUR_LIST_ID';

// // Add event listener to the assemble button
// randomizerButton.addEventListener('click', () => {
//   // Fetch movie data
//   fetch(`https://cors-anywhere.herokuapp.com/
//   https://api.themoviedb.org/3/movie/top_rated`, {
//     redirect: 'follow'
//   })
//   .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok.');
//     }
//     return response.json();
//   })
//   .then(response => response.json())
//   .then(data => {
//       // Process the 'data' here
//       const movies = data.items; // Array of movie objects
      
//       // Call your randomizer function (see next step)
//       const randomMovie = getRandomMovie(movies);
      
//       // Update your website (see next step)
//       displayMovie(randomMovie);
//   })
//   .catch(error => {
//       // Handle errors (e.g., display an error message)
//       console.error('Error fetching data:', error);
//   });


//   function getRandomMovie(movies) {
//     const randomIndex = Math.floor(Math.random() * movies.length);
//     return movies[randomIndex];
//   }

//   function displayMovie(movie) {
//     const movieTitle = document.getElementById("movieTitle");
//     const moviePoster = document.getElementById("moviePoster");
//     const movieOverview = document.getElementById("movieOverview");
//     if (movieTitle && moviePoster && movieOverview) {
//       movieTitle.textContent = movie.title;
//       moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // Construct image URL
//       movieOverview.textContent = movie.overview;
//     } else {
//       console.error("Error: Some HTML elements not found.")
//     }
    
//   }
//   // Expected output: 0, 1 or 2
// })