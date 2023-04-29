import axios from "axios"


export const FilmsApi = {
    async getFilmsCatalogs(){
        const { data } = await axios.get('https://6422c33a77e7062b3e21f82c.mockapi.io/FilmsCatalogs')
        return data
    },
    async getFilm(id){
        const {data} = await axios.get(`https://6422c33a77e7062b3e21f82c.mockapi.io/products/${id}`)
        return data
    },
    async getFilms(){
        const {data} = await axios.get(`https://6422c33a77e7062b3e21f82c.mockapi.io/products/`)
        return data
    },
}