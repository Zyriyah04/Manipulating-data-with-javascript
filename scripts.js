let movies = [];

function addMovie() {
    const movieInput = document.getElementById('movieInput');
    const movieTitle = movieInput.value.trim();

    if (movieTitle) {
        movies.push(movieTitle);
        movieInput.value = '';
        alert('Movie added: ' + movieTitle);
    } else {
        alert('Please enter a movie title.');
    }
}

function displayList() {
    const movieListDiv = document.getElementById('movieList');
    movieListDiv.innerHTML = '';

    if (movies.length > 0) {
        const ul = document.createElement('ul');
        movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie;
            ul.appendChild(li);
        });
        movieListDiv.appendChild(ul);
    } else {
        movieListDiv.textContent = 'No movies in the list.';
    }
}

function resetList() {
    movies = [];
    document.getElementById('movieList').innerHTML = '';
    alert('Movie list has been reset.');
}
