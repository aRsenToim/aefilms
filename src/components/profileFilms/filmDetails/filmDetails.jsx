import { useState } from 'react'
import s from './filmDetails.module.scss'
import Comments from './comments/comments'

const FilmDetails = (props) => {
    return <div className={s.Film__details}>
        <Comments film={props.film} comments={props.comments}/>
    </div>
}

export default FilmDetails