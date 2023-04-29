import s from './catalog.module.scss'
import Card from './card/card';

const Catalog = (props) => {
    return <div className={s.Catalog}>
        <h1 className={s.title}>{props.name}</h1>
        <div className={s.Catalog__cards}>
            {props.films.map(el => <Card key={el.id} id={el.id} img={el.img} name={el.name} type={el.type}/>)}
        </div>
    </div>
}

export default Catalog