

const PieceOfArt = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title}/>
            {/* <p>make art, not war</p> */}
        </div>
    )
}

export default PieceOfArt;