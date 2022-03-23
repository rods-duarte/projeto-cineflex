import {Link} from "react-router-dom";

import "./style.css";

//TODO Enviar para a rota /filme/id 
export default function Movie({data}) {
    return (
        <Link to={`/filme`} state={{id: data.id}} className="Movie">
            <img src={data.posterURL} alt={data.title} />
        </Link>
    )
}