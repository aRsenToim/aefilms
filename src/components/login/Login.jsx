import { useEffect, useState } from 'react'
import s from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Navigate } from 'react-router-dom'
import { login } from '../../server/authorization'
import { setProfileLoginFetch } from '../../redux/reducers/UserReducer'

const Login = () => {
    const profiles = useSelector(state => state.UserPage.profiles)
    const profile = useSelector(state => state.UserPage.profile)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispath = useDispatch()

    const loginChange = () => {
        let data = dispath(setProfileLoginFetch({ email, password }, profiles))
        if (typeof data == 'string') return setError(data)
    }

    useEffect(() => {
        if (error !== '') {
            setTimeout(() => {
                setError('')
            }, 2000)   
        }
    })
    
    return <>
        {JSON.stringify(profile) == '{}' ? <div className={s.Login}>
            <h1 className={s.title}>Login</h1>
            <div className={s.form}>
                <div className={s.input}>
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
                </div>
                <div className={s.input}>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
                </div>
                <button className={s.button} onClick={() => {
                    loginChange()
                }}>Login</button>
            </div>
            <div className={s.descripiton}>
                <NavLink className={s.link} to='/regist'>Register</NavLink>
            </div>
            <div className={s.error} >
                {error}
            </div>
        </div> : <Navigate to='/profile' />}
    </>
}

export default Login