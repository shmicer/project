"use strict";


const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false


};

console.log(personalMovieDB);

const a = prompt('Один из последних просмотренных фильмов?');
const b = prompt('На сколько вы оцените его?');
const c = prompt('Один из последних просмотренных фильмов?');
const d = prompt('На сколько вы оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);