// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

const movieLengths = [ 2, 3, 5, 4, 1, 6]
const flightLength = 3

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  const moviesWatched = new Set();
  
  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieSeen = movieLengths[i];
    const potentialSecondMovieLength = flightLength - firstMovieSeen; 

    if (moviesWatched.has(potentialSecondMovieLength)) {
      return true;
    }

    moviesWatched.add(firstMovieSeen);
  }

  return false;
}