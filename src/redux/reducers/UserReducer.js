import { regist } from '../../server/authorization';
import { login } from '../../server/authorization';
import { generateKey } from '../../server/utilits/generator';
import { UserApi, UserApiFetch } from './../../Api/userApi';

const SET_FAVORITE_FILM = 'SET_FAVORITE_FILM'
const SET_STAR_FILM = 'SET_STAR_FILM'
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILES = 'SET_PROFILES'
const SET_STATUS = 'SET_STATUS'
let initianalState = {
    profile: {
    },
    profiles: [
    ]
}

const UserReducer = (state = initianalState, action) => {
    switch (action.type) {
        case SET_FAVORITE_FILM:
            return { ...state, profile: { ...state.profile, favoriteFilm: action.favoriteFilm } }
            break;
        case SET_STAR_FILM:
            return { ...state, profile: { ...state.profile, startFilm: action.startFilm } }
            break;
        case SET_STATUS:
            return { ...state, profile: { ...state.profile, status: action.status } }
            break;
        case SET_PROFILE:
            return { ...state, profile: action.profile }
            break;
        case SET_PROFILES:
            return { ...state, profiles: action.profiles }
            break;
        default:
            return state
            break;
    }
}

export const setFavoriteFilm = (favoriteFilm) => {
    return { type: SET_FAVORITE_FILM, favoriteFilm }
}
export const setProfiles = (profiles) => {
    return { type: SET_PROFILES, profiles }
}
export const setStarFilm = (startFilm) => {
    return { type: SET_STAR_FILM, startFilm }
}
export const setProfile = (profile) => {
    return { type: SET_PROFILE, profile }
}
export const setStatus = (status) => {
    return { type: SET_STATUS, status }
}


export const setStatusFetch = (status) => {
    return dispath => {
        UserApiFetch.changeStatus(UserApi.getKeyUserId(), status)
        dispath(setStatus(status))
    }
}
export const exitAccount = () => {
    return dispath => {
        UserApi.setKeyUserId('')
        dispath(setProfile({}))
    }
}
export const addFavoriteFilmFetch = (favoriteFilm) => {
    return dispath => {
        dispath(setFavoriteFilm(favoriteFilm))
        UserApiFetch.setFavorite(UserApi.getKeyUserId(), favoriteFilm).then(() => {
        })
    }
}
export const addStarsFilmFetch = (startFilm) => {
    return dispath => {
        UserApiFetch.setStars(UserApi.getKeyUserId(), startFilm)
        dispath(setStarFilm(startFilm))
    }
}
export const addCommentFetch = (idAccount, FilmId, comment) => {
    UserApiFetch.addComments({
        idAccount: idAccount,
        FilmId: FilmId, 
        comment: comment,
        id: generateKey(),
    })
}
export const setProfilesFetch = () => {
    return dispath => {
        UserApiFetch.getProfiles().then(data => {
            dispath(setProfiles(data))
        })
    }
}
export const setProfileLoginFetch = ({ email, password }, profiles) => {
    return dispath => {
        let profile = login({ email, password }, profiles)
        if (typeof profile == 'string') return profile
        dispath(setProfile(profile))
        UserApi.setKeyUserId(profile.id)
    }
}
export const setProfileFetch = () => {
    return dispath => {
        UserApiFetch.getProfile(UserApi.getKeyUserId()).then(data => {
            dispath(setProfile(data));
        })
    }
}
export const registProfile = ({ email, password }, users) => {
    return dispath => {
        let profile = regist({ email, password }, users)
        if (profile == 'Account with this email already exists') return profile
        UserApiFetch.registProfile(profile)
        dispath(setProfilesFetch())
        UserApi.setKeyUserId(profile.id)
        dispath(setProfile(profile))
    }
}

export default UserReducer