import s from './films.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import Catalog from './catalog/catalog';
import { FilmsApi } from './../../Api/filmsApi';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { setfilmsCatalogs } from './../../redux/reducers/filmsReducer';
import Preloader from '../../assect/prealoder/prealoder';

const Films = () => {
    const dispath = useDispatch()

    const catalogs = useSelector(state => state.filmsPage.filmsCatalogs) 
    const data = useQuery('filmsCatalog', FilmsApi.getFilmsCatalogs)
    useEffect(() => {
        if (JSON.stringify(catalogs) == "[]" && data.data) {
            dispath(setfilmsCatalogs(data.data))
        }
    })
    
    return <div className={s.Films}>
        {JSON.stringify(catalogs) == "[]" ? <Preloader/> : catalogs.map(el => <Catalog key={el.id} id={el.id} name={el.name} films={el.films}/>)} 
    </div>
}

export default Films