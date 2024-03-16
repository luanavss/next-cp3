import "./styles.css"
import {Props} from "./interface";

const Cardfilm = (props: Props) => {
    return (
        <>
        <div className="Cardanime">
        <p>{props.title}</p>
            <img src={props.Image}/>
            <button><a href={props.link}><b>Watch Here</b></a></button>
        </div>
        </>
    );
}

export default Cardfilm;
