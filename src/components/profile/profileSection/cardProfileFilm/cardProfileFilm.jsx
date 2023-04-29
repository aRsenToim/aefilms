import { NavLink } from 'react-router-dom'
import s from './cardProfileFilm.module.scss'

const CardProfileFilm = (props) => {
    return <NavLink className='navlink'  to={`/film/${props.id}`}>
        <div className={s.card}>
            <img src={props.poster} alt="" />
            <div className={s.card__info}>
                <h3>{props.name}</h3>
                <p>{props.type}</p>
            </div>
        </div>
    </NavLink>
}

export default CardProfileFilm