import s from './profileSection.module.scss'
import CardProfileFilm from './cardProfileFilm/cardProfileFilm'
import { useState } from 'react'
import { useEffect } from 'react'
const ProfileSection = (props) => {
    let [shift, setShift] = useState(0)
    const [button, setButton] = useState('block')

    useEffect(() => {
        if(props.content.length < 6){
            setButton('none')
        }
    })

    return <div className={s.Profile__section}>
        <h1>{props.title}</h1>
        <div className={s.section__slider}>
            <button style={{
                display: button
            }} onClick={() => {
                if (shift == 0) {
                    return setShift(0)    
                }
                setShift(shift += 180)
            }} className={s.slider__btn_left}>{`<`}</button>
            <div className={s.slider__cards} style={
                {
                    display: 'flex',
                    position: 'relative',
                    left: shift,
                    transition: '0.5s'
                }
            } >
                {props.content.map(el => <CardProfileFilm id={el.id} key={el.id} poster={el.poster} name={el.name} type={el.type}/>)}
            </div>
            <button style={{
                display: button
            }} onClick={() => {
                console.log(shift);
                if (shift == -(180 * (props.content.length - 6))) {
                    return setShift(0)    
                }
                setShift(shift -= 180)
            }} className={s.slider__btn_rigth}>{`>`}</button>
        </div>
    </div>
}

export default ProfileSection