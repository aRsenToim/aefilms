import { useState } from 'react'
import s from './slider.module.scss'
import CardActor from '../../cardActor/cardActor'

const Slider = ({title, cards}) => {
    const [left, setLeft] = useState(0)
    return <div className={s.Film__Actors}>
        <h1>{title}</h1>
        <div className={s.Film__slider}>
            <button className={s.left} onClick={() => {
                if (left == 0) {
                    return setLeft(0)
                }
                setLeft(left + 160)
            }}>{`<`}</button>
            <div className={s.Slider__line} style={{
                height: '256px',
                display: 'flex',
                position: "relative",
                left: left,
                transition: '0.5s left',
            }}>
                {cards.map(el => <CardActor key={el.id} img={el.img} name={el.name} character={el.character} />)}
            </div>
            <button onClick={() => {
                if (left == -(160 * (cards.length - 5))) {
                    return setLeft(left)
                }
                setLeft(left - 160)
            }} className={s.right}>{`>`}</button>
        </div>
    </div>
}

export default Slider