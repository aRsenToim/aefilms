import { useDispatch } from 'react-redux'
import { setError } from '../../redux/reducers/pageReducer'
import s from './Alert.module.scss'

const Alert = (props) => {
    const dispath = useDispatch()
    setTimeout(() => {
        dispath(setError())
    }, 1500)
    switch (props.type) {
        case 'error':
            return <ErrorAlert content={props.content} setError={props.setError}/>
            break;
        case 'good':
            return <GoodAlert content={props.content} setError={props.setError}/>
            break;
        default:
            break;
    }
}
const ErrorAlert = ({ content, setError }) => {
    return <div className={s.errorAlert}>
        <img src="" alt="" />
        <span>{content}</span>
        <button onClick={setError}>
            x
        </button>
    </div>
}
const GoodAlert = ({ content, setError }) => {
    return <div className={s.goodAlert}>
        <img src="" alt="" />
        <span>{content}</span>
        <button onClick={setError}>
            x
        </button>
    </div>
}

export default Alert