import { useEffect, useState } from 'react'
import s from './sort.module.scss'

const Sort = (props) => {
    const [sort, setSort] = useState([
        {
            id: 1,
            type: 'Type',
            checkbox: [
                {
                    id: 1,
                    type: 'Movie',
                    isChecked: false,
                },
                {
                    id: 2,
                    type: 'Serial',
                    isChecked: false,
                },
            ]
        },
        {
            id: 2,
            type: 'Category',
            checkbox: [
                {
                    id: 1,
                    type: 'Action',
                    isChecked: false,
                },
                {
                    id: 2,
                    type: 'Historial',
                    isChecked: false,
                },
                {
                    id: 3,
                    type: 'Crime',
                    isChecked: false,
                },
                {
                    id: 4,
                    type: 'Drama',
                    isChecked: false,
                },
                {
                    id: 5,
                    type: 'Fantasy',
                    isChecked: false,
                }
            ]
        },
    ])

    const onChangeInput = (type, idCheckbox) => {
        const copySort = JSON.parse(JSON.stringify(sort))
        let dataSortElem = copySort.find(el => el.type == type)
        let checkbox = dataSortElem.checkbox.find(el => el.id == idCheckbox)
        checkbox.isChecked = checkbox.isChecked ? false : true
        setSort(copySort)
        if (checkbox.isChecked == true) return props.onChangeSort(checkbox.type) 
        props.onChangeSort('')
    }

    return <div className={s.sorting}>
        <div className={s.sorting__clear}>
            Clean filters
        </div>
        {sort.map(sort => <div className={s.sort} key={sort.id}>
            <h2 className={s.sort__name}>{sort.type}</h2>
            {sort.checkbox.map(el => <div key={el.id} className={s.sort__checkbox}>
                <input type="checkbox" onChange={() => {onChangeInput(sort.type, el.id)}} checked={el.isChecked} id={el.id} />
                <label for="Movie">{el.type}</label>
            </div>)}
        </div>)}
    </div>
}

export default Sort