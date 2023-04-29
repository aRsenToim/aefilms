import axios from "axios"
export const UserApi = {
    keyFavoriteFilms: 'favoriteFilms',
    keyStarFilms: 'starFilms',
    keyProfile: 'profile',
    idKeyLS: 'idKey',
    getKeyUserId(){
        let data = localStorage.getItem(this.idKeyLS)
        if (!data) return ''
        return data
    },
    setKeyUserId(key){
        localStorage.setItem(this.idKeyLS, key)
    }
}

export const UserApiFetch = {
    async getProfiles(){ 
        const {data} = await axios.get('https://643c2a5d70ea0e6602a2ebb8.mockapi.io/Users')
        return data
    },
    async getProfile(id){
        const {data} = await axios.get(`https://643c2a5d70ea0e6602a2ebb8.mockapi.io/Users/${id}`)
        return data
    },
    async registProfile(profile){
        const {error} = await axios.post('https://643c2a5d70ea0e6602a2ebb8.mockapi.io/Users', profile)
        if (error) return error
    },
    async setFavorite(idAccount, favoriteFilm){
        const {error} = await axios.put(`https://643c2a5d70ea0e6602a2ebb8.mockapi.io/Users/${idAccount}`, {favoriteFilm})
        if (error) return error
    },
    async setStars(idAccount, startFilm){
        const {error} = await axios.put(`https://643c2a5d70ea0e6602a2ebb8.mockapi.io/Users/${idAccount}`, {startFilm})
        if (error) return error
    },
    async changeStatus(idAccount, status){
        const {error} = await axios.put(`https://643c2a5d70ea0e6602a2ebb8.mockapi.io/Users/${idAccount}`, {status})
        if (error) return error
    },
    async addComments(comment){
        console.log(comment);
        const {error} = await axios.post(`https://643c2a5d70ea0e6602a2ebb8.mockapi.io/comments`, comment)
        if (error) return error
    },
}