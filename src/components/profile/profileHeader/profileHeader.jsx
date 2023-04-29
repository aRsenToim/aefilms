import { useState } from 'react'
import s from './profileHeader.module.scss'
import { useDispatch } from 'react-redux';
import { setStatusFetch } from '../../../redux/reducers/UserReducer'
import { addError } from '../../../redux/reducers/pageReducer';
import Status from './status';
import { NavLink } from 'react-router-dom';

const ProfileHeader = (props) => {
    return <div className={s.Profile__header}>
        <div className={s.header__account}>
            <img src={props.profile.img} alt="" />
            <div className={s.header__info}>
                <h1>{props.profile.email}</h1>
                <Status status={props.profile.status} chengeStatus={props.chengeStatus}/>
            </div>
        </div>
        <NavLink to='/settingprofile'><button className={s.button}>Edit data</button></NavLink>
    </div>
}


export default ProfileHeader