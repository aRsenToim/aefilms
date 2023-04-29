import { Navigate, useParams } from 'react-router-dom'
import s from './settingProfile.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { exitAccount, setStatusFetch } from '../../redux/reducers/UserReducer'
import { useState } from 'react'
import { addError, addGoodAlert, setError } from '../../redux/reducers/pageReducer'

const SettingProfile = (props) => {
    const [statusInput, setStatusInput] = useState('')
    const dispath = useDispatch()
    const profile = useSelector(state => state.UserPage.profile)
    const [textGoodAlert, setTextGoodAlert] = useState('Account changed')
    const [lengthError, setLengthError] = useState('Too many characters.')
    const updateProfile = () => {
        if (statusInput.length > 25) {
            dispath(addError(lengthError, 'error'))
            return setStatusInput('')
        }
        if (statusInput !== '') {
            dispath(setStatusFetch(statusInput))
            return dispath(addGoodAlert(textGoodAlert)) 
        }
    }

    return <>
        {JSON.stringify(profile) !== '{}' ? <div className={s.settingProfile}>
            <h1 className={s.title}>Settings</h1>
            <div className={s.content}>
                <form>
                    <ul className={s.forms}>
                        <li>
                            <label>Status</label>
                            <input value={statusInput} onChange={(e) => {setStatusInput(e.currentTarget.value)}} type="text" placeholder='Please enter your status' />
                        </li>
                    </ul>
                </form>
            </div>
            <div className={s.buttons}>
                <div className={s.left}>
                    <button onClick={updateProfile} className={s.update}>Update Profile</button>
                </div>
                <button className={s.exit} onClick={() => {
                    dispath(exitAccount())
                }}>Exit account</button>
            </div>
        </div> : <Navigate to='/login' />}
    </>
}

export default SettingProfile