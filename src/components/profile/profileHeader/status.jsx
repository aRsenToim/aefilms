import { useState } from "react"
import { addError, setError } from "../../../redux/reducers/pageReducer"
import { useDispatch } from 'react-redux';

const Status = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const [input, setInput] = useState(props.status)
    const dispath = useDispatch()
    const [lengthError, setlengthError] = useState('Too many characters.')
    const chengeStatus = () => {
        if (input.length > 25) {
            dispath(addError(lengthError, 'error'))
            setIsFocus(false)
            return
        }
        setIsFocus(false)
        props.chengeStatus(input)
    }
    return <>
        {isFocus ? <input value={input} onChange={(e) => { setInput(e.currentTarget.value) }} type="text" autoFocus onBlur={chengeStatus} /> : <p onDoubleClick={() => { setIsFocus(true) }}>{props.status}</p>}
    </>
}

export default Status