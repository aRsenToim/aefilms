import s from './profileFilms.module.scss'
import FilmDetails from './filmDetails/filmDetails';
import FilmInfo from './filmInfo/filmInfo';
import { useDispatch, useSelector } from 'react-redux';
import { FilmsApi } from './../../Api/filmsApi';
import { Navigate, redirect, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { chengeStarWindow, setFilm, setWindowTrailer } from '../../redux/reducers/filmsReducer';
import { addFavoriteFilmFetch, addStarFilmFetch, addStarsFilmFetch, registProfile, setProfile, setProfileFetch, setProfilesFetch } from '../../redux/reducers/UserReducer';
import Preloader from './../../assect/prealoder/prealoder';
import { addError, setError } from "../../redux/reducers/pageReducer"

const ProfileFilms = () => {
    const dispath = useDispatch()
    const idFilm = useParams().id
    const film = useSelector(state => state.filmsPage.film)
    const profile = useSelector(state => state.UserPage.profile)
    useEffect(() => {
        if (JSON.stringify(film) == '{}' && idFilm || film.id !== idFilm) {
            FilmsApi.getFilm(idFilm).then(data => {
                dispath(setFilm(data));
            })
        }
    })
    const getIsFavorite = () => {
        if (!profile.favoriteFilm) return false
        if (profile.favoriteFilm.includes(film.id)) return true
        return false
    }
    const getIsStar = () => {
        if (!profile.startFilm) return false
        if (profile.startFilm.includes(film.id)) return true
        return false
    }
    return <>
        {JSON.stringify(film) == '{}' || !film ? <Preloader /> : <div className={s.ProfileFilms}>
            <FilmInfo addFavorite={() => {
                if (JSON.stringify(profile) == '{}') {
                    return dispath(addError('Sign in to mark your favorite'))
                }
                if (profile.favoriteFilm.includes(film.id)) {
                    let favoriteFilmCopy = [...profile.favoriteFilm]
                    favoriteFilmCopy.splice(favoriteFilmCopy.indexOf(film.id), 1)
                    dispath(addFavoriteFilmFetch(favoriteFilmCopy))
                    return;
                }
                dispath(addFavoriteFilmFetch([...profile.favoriteFilm, film.id]))
            }}
                chengeStar={() => {
                    if (JSON.stringify(profile) == '{}') {
                        return dispath(addError('Sign in to rate the movie'))
                    }
                    dispath(addStarsFilmFetch([...profile.startFilm, film.id]))
                    dispath(chengeStarWindow())
                }}
                chengeTrailer={() => {
                    dispath(setWindowTrailer())
                }}
                isFavorite={getIsFavorite()}
                isStar={getIsStar()}
                id={film.id} infoCard={film.infoCard} description={film.description} poster={film.poster} name={film.name} />
            <FilmDetails film={film} comments={film.comments} />
            <div className={s.Film__comment}>
            </div>
        </div>}
    </>
}

export default ProfileFilms