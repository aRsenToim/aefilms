import { useDispatch, useSelector } from 'react-redux'
import Comment from './comment/comment'
import s from './comments.module.scss'
import From from './form/form'
import NoAccountError from './noAccountError/noAccountError'
import { addGoodAlert } from '../../../../redux/reducers/pageReducer'

const Comments = (props) => {
    const profile = useSelector(state => state.UserPage.profile)
    const dispath = useDispatch()
    return <div className={s.comments__block}>
        <h1 className={s.title}>Write a comment:</h1>
        {JSON.stringify(profile) == '{}' ? <NoAccountError/> : <From addGoodAlert={() => {dispath(addGoodAlert('Your comment has been sent for moderation'))}} film={props.film} idAccount={profile.id} email={profile.email} img={profile.img} comments={profile.profileComments}/>}
        <div className={s.comments}>
            <h1 className={s.title}>Comments</h1>
            {JSON.stringify(props.comments) !== '[]' ? props.comments.map(el => <Comment key={el.id} date={el.date} autor={el.autor} name={el.name} content={el.content} />) : <h2 className={s.commentsNone}>No comments yet</h2>}
        </div>
    </div>
}

export default Comments