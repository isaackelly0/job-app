import './Card.css';
const Card = props => {
    return(
        <div id={props.item.name}>
            <img src={props.item.pic} alt={props.item.alt}/>
            <span>
                <h4>
                    {props.item.name}
                </h4>
                <p>
                    {props.item.description}
                </p>
                <a href={props.item.page}>Page</a>
                <a href={props.item.github}>Github</a>
            </span>
        </div>
    )
}
export default Card;