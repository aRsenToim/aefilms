import s from './video.module.scss'
import 'react-html5video/dist/styles.css'
import { DefaultPlayer as Video } from 'react-html5video/dist'
import { Navigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setFilmChange } from '../../redux/reducers/filmsReducer'
const VideoComponent = () => {
    const film = useSelector(state => state.filmsPage.film)
    const dispath = useDispatch()
    const profile = useSelector(state => state.UserPage.profile)
    const idFilm = useParams().id

    useEffect(() => {
        if (JSON.stringify(film) == '{}' && idFilm || film.id !== idFilm) {
            dispath(setFilmChange(idFilm))
        }
    })
    
    return <div>
        {JSON.stringify(profile) == '{}' ? <Navigate to='/login' /> :
            <Video className={s.player} loop poster={film.poster}>
                <source src={film.urlVideo} type='video/webm' />
            </Video>}
    </div>
}

export default VideoComponent