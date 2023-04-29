import { NavLink } from 'react-router-dom'
import s from './noAccountError.module.scss'

const NoAccountError = () => {
    return <div className={s.error}>
        <p className={s.title}>You are not logged in</p>
        <button className={s.button}><NavLink to='/login' className={s.navlink}>Login</NavLink></button>
    </div>
}

export default NoAccountError