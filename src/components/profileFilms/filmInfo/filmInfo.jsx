import { NavLink } from 'react-router-dom'
import s from './filmInfo.module.scss'

const FilmInfo = ({ infoCard, description, poster, id, name, addFavorite, isFavorite, chengeStar, isStar, chengeFilm, chengeTrailer }) => {

    return <div className={s.Film__info} style={{
        background: `url(${poster}) no-repeat`,
        width: "100%",
        height: "600px",
        objectFit: "cover"
    }}>
        <div className={s.Film__content}>
            <h1 className={s.Film_title}>{name}</h1>
            <div className={s.Film_infoGrade}>
                <span className={s.year}>{infoCard.year}</span>
                <span className={s.type}>{infoCard.genre}</span>
                <div className={s.ageRating}>
                    {infoCard.limitationYear}+
                </div>
                <div className={s.star}>
                    <h1>{infoCard.grade}</h1>
                    <span>{infoCard.counterGrader}k</span>
                </div>
            </div>
            <div className={s.Film_description}>
                {description}
            </div>
            <div className={s.Film_button}>
                <NavLink to={`/video/${id}`}>
                    <button className={s.watch}>
                        Watch movie
                    </button>
                </NavLink>
               <button onClick={chengeTrailer}>Trailer</button>
                <button onClick={addFavorite}>
                    {isFavorite ? <img src="/img/icon/favofiteActive.svg" alt="" srcset="" /> : <img src="/img/icon/favofite.svg" alt="" srcset="" />}
                </button>
                {isStar ? <button>
                    <img src="/img/icon/starActive.svg" alt="" />
                </button> : <button onClick={chengeStar}>
                    <img src="/img/icon/star.svg" alt="" />
                </button>}
            </div>
        </div>
    </div>
}

export default FilmInfo