"use strict";




// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// console.log(fries === 3);
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }




// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for(let j = 0; j < i; j++) {
//         result += '*';

//     }
//     result += '\n';

// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }

// }

let numberOfFilms;


function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    }

}
start();

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false


};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('На сколько вы оцените его?');
        
        if ( a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b; 
        } else {
            console.log('error');
            i--;
    }

}
}
// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);


    }

}
writeYourGenres();

