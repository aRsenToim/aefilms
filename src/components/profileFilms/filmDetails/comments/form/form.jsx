import { useState } from 'react'
import s from './form.module.scss'
import { addCommentFetch } from '../../../../../redux/reducers/UserReducer'

const From = (props) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const postComment = () => {
        if (!/[^\s]/gim.test(text) || !title) {
            return setError('Enter a valid comment title')
        }else if (!/[^\s]/gim.test(text) || !text) {
            return setError('Enter a valid comment text')
        }else if (text.length < 150) {
            return setError('comment content cannot be less than 150 characters')
        }
        addCommentFetch(props.idAccount, props.film.id, {title, text})
        props.addGoodAlert('Your comment has been sent for moderation')
        setText('')
        setTitle('')
    }

    return <div className={s.form}>
        <div className={s.form__account}>
            <div className={s.account__info}>
                <img src={props.img} alt="" />
                <div className={s.info}>
                    <h3>{props.email}</h3>
                    <span>{props.comments} comments</span>
                </div>
            </div>
            <span>
            Please read the rules before posting a <a href="http://" target="_blank">review</a>.
            </span>
        </div>
        <hr />
        <div className={s.form__input}>
            <input value={title} onChange={(e) => {setTitle(e.currentTarget.value)}} type="text" placeholder='Title comment' className={s.title} />
            <textarea value={text} onChange={(e) => {setText(e.currentTarget.value)}} placeholder="Text" className={s.text}></textarea>
            <div className={s.error}>
                {error}
            </div>
        </div>
        <div className={s.form__button}>
            <button onClick={postComment}>Post a comment</button>
        </div>
    </div>
}

export default From