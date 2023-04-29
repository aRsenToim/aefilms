import { FilmsApi } from "../../Api/filmsApi"

const SET_FILMSCATALOG = 'SET_FILMSCATALOG'
const SET_FILM = 'SET_FILM'
const ADD_FAVORITE = 'ADD_FAVORITE'
const CHENGE_STAR_WINDOW = 'CHENGE_STAR_WINDOW'
const SET_FILMS = 'SET_FILMS'
const SET_IS_TRAILER_WINDOW = 'SET_IS_TRAILER_WINDOW'
let initianalState = {
    filmsCatalogs: [
    ],
    film: {
    },
    films: [],
    isStarWindow: false,
    isTrailerWindow: false,
}

const filmsReducer = (state = initianalState, action) => {
    switch (action.type) {
        case SET_IS_TRAILER_WINDOW:
            return {...state, isTrailerWindow: state.isTrailerWindow ? false : true}
            break;
        case SET_FILMS:
            return { ...state, films: action.films }
            break;
        case SET_FILMSCATALOG:
            return { ...state, filmsCatalogs: action.filmsCatalogs }
            break;
        case CHENGE_STAR_WINDOW:
            return { ...state, isStarWindow: state.isStarWindow ? false : true }
            break;
        case SET_FILM:
            return { ...state, film: action.film }
            break;
        case ADD_FAVORITE:
            return { ...state, film: action.film }
            break
        default:
            return state;
            break;
    }
}
export const setWindowTrailer = () => {
    return {type: SET_IS_TRAILER_WINDOW}
}
export const setfilmsCatalogs = (filmsCatalogs) => {
    return { type: SET_FILMSCATALOG, filmsCatalogs }
}
export const setFilm = (film) => {
    return { type: SET_FILM, film }
}
export const chengeStarWindow = () => {
    return { type: CHENGE_STAR_WINDOW }
}
export const setFilms = (films) => {
    return { type: SET_FILMS, films }
}

export const setFilmChange = (idFilm) => {
    return dispath => {
        FilmsApi.getFilm(idFilm).then(data => {
            dispath(setFilm(data));
        })
    }
}

export default filmsReducer