import { NavLink } from 'react-router-dom'
import s from './card.module.scss'

const Card = (props) => {
    return <div className={s.Card}>
        <NavLink className='navlink' to={`/film/${props.id}`}>
            <img src={props.img} alt="" />
        </NavLink>
        <NavLink className='navlink' to={`/film/${props.id}`}>
            <h3>{props.name}</h3>
        </NavLink>
        <span>{props.type}</span>
    </div>
}

export default Card