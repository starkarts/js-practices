const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastFilm1 = prompt('Один из последних просмотренных фильмов'),
      estimation1 = prompt('На сколько оцените его?'),
      lastFilm2 = prompt('Один из последних просмотренных фильмов'),
      estimation2 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilm1] = estimation1;
personalMovieDB.movies[lastFilm2] = estimation2;

console.log(personalMovieDB);