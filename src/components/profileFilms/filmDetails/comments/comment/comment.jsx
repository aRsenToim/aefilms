import s from './comment.module.scss'

const Comment = (props) => {
    return <div className={s.comment}>
        <div className={s.autor}>
            <div className={s.autor__title}>
                <img src={props.autor.img} alt="" />
                <div className={s.info}>
                    <h3>{props.autor.name}</h3>
                    <span>{props.autor.counter} comment</span>
                </div>
            </div>
            <span className={s.date}>{props.date}</span>
        </div>
        <div className={s.content}>
            <h1 className={s.content__title}>{props.name}</h1>
            <p className={s.text}>
                {props.content}
            </p>
        </div>
    </div>
}

export default Comment