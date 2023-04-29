import { useEffect, useState } from 'react'
import s from './regist.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { registProfile } from '../../redux/reducers/UserReducer'
import { NavLink, Navigate } from 'react-router-dom'

const Regist = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const profiles = useSelector(state => state.UserPage.profiles)
    const dispath = useDispatch()
    const profile = useSelector(state => state.UserPage.profile)

    const registProfileChange = () => {
        const strongRegexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const strongRegexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        if (strongRegexPassword.test(String(password).toLocaleLowerCase())) {
            return setError('Incorrect password')
        }else if(!email && !password){
            return setError('Enter correct email and password')
        }else if (!strongRegexEmail.test(String(email).toLocaleLowerCase())) {
            return setError('Incorrect email')
        } else if (password.length < 6) {
            return setError('The number of characters in the password must not be less than 6')
        }
        dispath(registProfile({ email, password }, profiles))
    }

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 3500);
    })

    return <>
        {JSON.stringify(profile) == '{}' ? <div className={s.Regist}>
            <h1 className={s.title}>Regist</h1>
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
                    registProfileChange()
                }}>Regist</button>
            </div>
            <div className={s.descripiton}>
                <NavLink className={s.link} to='/login'>Login</NavLink>
            </div>
            <div className={s.error} >
                {error}
            </div>
        </div> : <Navigate to='/profile' />}
    </>
}

export default Regist