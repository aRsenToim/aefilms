import { NavLink, Outlet } from 'react-router-dom'
import s from './navbar.module.scss'

const Navbar = () => {
    return <>
        <div className={s.Navbar}>
            <div className={s.Logo}>
                <NavLink className={s.navlink} to='/'>
                    Aef
                </NavLink>
            </div>
            <ul className={s.links}>
                <li>
                    <NavLink to='/' className={data => data.isActive ? s.active : s.item}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 22H7" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 22H21" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                            <path d="M17 22V13H7V22" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/search' className={data => data.isActive ? s.active : s.item}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 22L18 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile' className={data => data.isActive ? s.active : s.item}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </NavLink>
                </li>
            </ul>
        </div>

        <Outlet/>
    </>
}

export default Navbar