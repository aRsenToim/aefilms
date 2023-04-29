import s from './trailerPlayer.module.scss'
import 'react-html5video/dist/styles.css'
import { DefaultPlayer as Video } from 'react-html5video/dist'
import { useSelector } from 'react-redux'

const TrailerPlayer = (props) => {
    const film = useSelector(state => state.filmsPage.film)
    return <>
        <div className={s.Trailer}>
            <div className={s.close} onClick={props.setWindowTrailer}>
                <img src="/img/icon/close.svg" alt="" />
            </div>
            <Video className={s.player} loop poster={film.poster}>
                <source src={film.trailerUrl} type='video/webm' />
            </Video>
        </div>
        <div className={s.shadow}></div>
    </>
}

export default TrailerPlayer