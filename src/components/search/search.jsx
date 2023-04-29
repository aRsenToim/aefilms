import { useQuery } from 'react-query'
import s from './search.module.scss'
import { FilmsApi } from '../../Api/filmsApi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setFilms } from '../../redux/reducers/filmsReducer'
import Preloader from '../../assect/prealoder/prealoder'
import CardSearch from './card/card'

const Search = () => {
    const data = useQuery('films', FilmsApi.getFilms)
    const dispath = useDispatch()
    const films = useSelector(state => state.filmsPage.films)
    const [searchInput, setSearchInput] = useState('')

    const onChengeSearch = (array) => {
        if (!searchInput) return array
        let films = array.filter((el) => {
            if (el.name.toLowerCase().search(searchInput.toLowerCase()) !== -1) {
                return el
            }
        })
        return films
    }
    


    useEffect(() => {
        if (JSON.stringify(films) == '[]' && data.data) {
            dispath(setFilms(data.data))
        }
    })

    return <div className={s.Search}>
        <div className={s.header}>
            <input value={searchInput} onChange={(el) => {setSearchInput(el.currentTarget.value)}} type="text" placeholder='Search' />
        </div>
        <div className={s.content}>
            <div className={s.films}>
                {JSON.stringify(films) !== '[]' ? <>{onChengeSearch(films).map(el => <CardSearch key={el.id} type={el.type} id={el.id} poster={el.poster} name={el.name} infoCard={el.infoCard}/>)}</> : <Preloader/>}
            </div>
        </div>
    </div>
}

export default Search