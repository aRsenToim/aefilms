import {generatePassword} from './utilits/generator'

export function login({ email, password }, users) {
    let profile = users.find(el => {
        if (el.email == email && el.password == password) {
            return el
        }
    })
    if (!profile) return 'Account does not exist'
    return profile
}

export function regist({ email, password }, users) {
    users.forEach(element => {
        if (element.email == email) {
            return 'Account with this email already exists'
        }
    })
    return {
        email: email,
        favoriteFilm: [],
        id: users.length++,
        img: "/img/icon/user.png",
        password: password,
        startFilm: [],
        status: "status 1",
        watchFilm: []
    }
}