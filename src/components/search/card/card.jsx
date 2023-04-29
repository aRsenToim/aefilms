import { NavLink } from 'react-router-dom'
import s from './card.module.scss'

const CardSearch = (props) => {
    return <NavLink className='navlink' to={`/film/${props.id}`}>
        <div key={props.id} className={s.film}>
            <img className={s.film__poster} src={props.poster} alt="" />
            <div className={s.title}>
                <h1>{props.name}</h1>
                <div className={s.title__info}>
                    <span className={s.grade}>{props.infoCard.grade}</span>
                    <span className={s.year}>{props.infoCard.year}</span>
                    <span className={s.type}>{props.type}</span>
                </div>
            </div>
        </div>
    </NavLink>
}

export default CardSearch