let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {
    'lastFilm': 'estimation'
  },
  actors: {},
  genres: [],
  privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов');
let estimation = prompt('На сколько оцените его?');

console.log(personalMovieDB.movies);