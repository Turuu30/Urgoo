import './style/cart.css'
import { Link } from 'react-router-dom'

export const MoviesCart = (props) => {
    return(
        <Link to={`/${props.data.name}`}>
            <div className="cartCss">
                <img src={props.data.image} alt="" />
                <h2>{props.data.name}</h2>
            </div>
        </Link>
    )
}