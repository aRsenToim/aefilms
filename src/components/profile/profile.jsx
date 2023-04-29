import { useDispatch, useSelector } from 'react-redux'
import s from './profile.module.scss'
import ProfileHeader from './profileHeader/profileHeader'
import ProfileSection from './profileSection/profileSection'
import { setProfilesFetch, setStatusFetch } from '../../redux/reducers/UserReducer'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const Profile = () => {
    const profile = useSelector(state => state.UserPage.profile)
    const dispath = useDispatch ()
    const films = useSelector(state => state.filmsPage.films)
    const getFavoriteFilms = () => {
        let arr = []
        films.forEach(el => {
            profile.favoriteFilm.forEach(id => {
                if(id == el.id){
                    arr.push(el)
                }
            });
        })
        return arr
    }
    return <>
        {JSON.stringify(profile) !== '{}' ? <div className={s.Profile}>
        <ProfileHeader profile={profile} chengeStatus={(status) => {
            dispath(setStatusFetch(status))
        }} />
        <ProfileSection title="Favorite Films" content={getFavoriteFilms()}/>
    </div> :  <Navigate to='/login' />}
    </> 
}

export default Profile